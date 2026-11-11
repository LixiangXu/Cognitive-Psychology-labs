/* site.js — builds index.html and lab.html from the list in labs.js.
   You should not need to edit this file to add or change a lab. */
(function () {
  "use strict";

  var SITE = window.SITE || {};
  var LABS = Array.isArray(window.LABS) ? window.LABS : null;
  var params = new URLSearchParams(location.search);
  var INSTRUCTOR = params.get("instructor") === "1";

  /* ---------- small helpers ---------- */

  // h("a", {href: "..."}, "text", childNode, ...) -> element. Text is never parsed as HTML.
  function h(tag, attrs) {
    var el = document.createElement(tag);
    for (var k in attrs || {}) {
      var v = attrs[k];
      if (v === false || v == null) continue;
      if (k === "class") el.className = v;
      else if (k.slice(0, 2) === "on") el.addEventListener(k.slice(2), v);
      else el.setAttribute(k, v === true ? "" : v);
    }
    for (var i = 2; i < arguments.length; i++) append(el, arguments[i]);
    return el;
  }
  function append(el, child) {
    if (child == null || child === false) return;
    if (Array.isArray(child)) child.forEach(function (c) { append(el, c); });
    else el.appendChild(child.nodeType ? child : document.createTextNode(String(child)));
  }
  function $(id) { return document.getElementById(id); }
  function list(x) { return x == null || x === "" ? [] : (Array.isArray(x) ? x : [x]); }
  function isDemo(lab) { return lab.type === "demo"; }
  function badgeText(lab) {
    if (isDemo(lab)) return "In-class demo";
    return lab.number == null ? "Lab" : "Lab " + lab.number;
  }
  function launchUrl(lab) { return "./" + lab.folder + "/index.html"; }
  function detailsUrl(lab) {
    return "./lab.html?id=" + encodeURIComponent(lab.id) + (INSTRUCTOR ? "&instructor=1" : "");
  }
  function homeUrl(extra) {
    var p = new URLSearchParams(extra || "");
    if (INSTRUCTOR) p.set("instructor", "1");
    var s = p.toString();
    return "./index.html" + (s ? "?" + s : "");
  }

  // "Some *italic* text" -> nodes with <em>; plain() strips the asterisks.
  function rich(text) {
    return String(text).split("*").map(function (part, i) {
      return i % 2 ? h("em", null, part) : document.createTextNode(part);
    });
  }
  function plain(text) { return String(text).replace(/\*/g, ""); }
  function refLink(ref) {
    if (ref.doi) return "https://doi.org/" + String(ref.doi).replace(/^https?:\/\/(dx\.)?doi\.org\//, "");
    return ref.url || "";
  }
  function refPlain(ref) {
    var link = refLink(ref);
    return plain(ref.cite) + (link ? " " + link : "");
  }
  function refNode(ref) {
    var link = refLink(ref);
    return h("span", { class: "ref-text" }, rich(ref.cite),
      link ? [" ", h("a", { href: link, target: "_blank", rel: "noopener" }, link.replace(/^https?:\/\//, ""))] : null);
  }
  function copyButton(getText) {
    var btn = h("button", { type: "button", class: "btn-mini" }, "Copy citation");
    btn.addEventListener("click", function () {
      var text = getText();
      var done = function (ok) {
        btn.textContent = ok ? "Copied" : "Copy failed";
        setTimeout(function () { btn.textContent = "Copy citation"; }, 1600);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () { done(true); }, function () { done(fallbackCopy(text)); });
      } else done(fallbackCopy(text));
    });
    return btn;
  }
  function fallbackCopy(text) {
    var ta = h("textarea", { style: "position:fixed;opacity:0" });
    ta.value = text; document.body.appendChild(ta); ta.select();
    var ok = false;
    try { ok = document.execCommand("copy"); } catch (e) { /* ignore */ }
    ta.remove();
    return ok;
  }

  // Data-analysis link(s): a live button per link, or a greyed-out "coming soon".
  function analysisNodes(lab, cls) {
    var links = list(lab.analysis).map(function (a) {
      return typeof a === "string" ? { label: "", url: a } : a;
    }).filter(function (a) { return a && a.url; });
    if (!links.length) {
      return [h("span", { class: cls + " is-soon", title: "The data-analysis page for this lab is not available yet" },
        "Data analysis: coming soon")];
    }
    return links.map(function (a) {
      return h("a", { class: cls, href: a.url }, "Data analysis" + (a.label ? ": " + a.label : ""));
    });
  }

  function instructorNodes(lab) {
    if (!INSTRUCTOR) return null;
    var items = [];
    if (lab.debug) items.push(h("a", { href: launchUrl(lab) + "?debug=1" }, "Test run (?debug=1)"));
    list(lab.conditions).forEach(function (f) {
      items.push(h("a", { href: "./" + lab.folder + "/" + f }, f));
    });
    if (!items.length) items.push(h("span", null, "No fast test run for this lab"));
    return h("div", { class: "instructor-row" }, h("span", { class: "instructor-label" }, "Instructor"), items);
  }

  /* ---------- checking labs.js ---------- */

  function validate() {
    var problems = [];
    if (!LABS) return ["labs.js did not load, or it has a typing mistake (often a missing comma, quote or bracket). Open the browser console to see the line number."];
    var seen = {};
    LABS.forEach(function (lab, i) {
      var name = "Entry " + (i + 1) + (lab && lab.title ? " (“" + lab.title + "”)" : "");
      if (!lab || typeof lab !== "object") { problems.push(name + " is not a { ... } block."); return; }
      ["id", "title", "folder"].forEach(function (f) {
        if (!lab[f] || typeof lab[f] !== "string") problems.push(name + " is missing “" + f + "”.");
      });
      if (lab.id) {
        if (seen[lab.id]) problems.push(name + " uses the id “" + lab.id + "”, which another entry already uses.");
        seen[lab.id] = true;
      }
      if (lab.tags != null && !Array.isArray(lab.tags)) problems.push(name + ": “tags” must be a list in [square brackets].");
      if (lab.references != null && !Array.isArray(lab.references)) problems.push(name + ": “references” must be a list in [square brackets].");
      list(lab.references).forEach(function (r, j) {
        if (!r || !r.cite) problems.push(name + ": reference " + (j + 1) + " has no “cite” text.");
      });
      if (lab.type && lab.type !== "lab" && lab.type !== "demo") problems.push(name + ": “type” must be \"lab\" or \"demo\".");
    });
    return problems;
  }
  function showProblems(problems, mount) {
    mount.appendChild(h("div", { class: "notice notice-error", role: "alert" },
      h("strong", null, "There is a problem in labs.js"),
      h("ul", null, problems.map(function (p) { return h("li", null, p); }))));
  }
  function usableLabs() {
    return (LABS || []).filter(function (lab) { return lab && lab.id && lab.title && lab.folder; });
  }

  /* ---------- shared page chrome ---------- */

  function fillChrome() {
    document.querySelectorAll("[data-site]").forEach(function (el) {
      var v = SITE[el.getAttribute("data-site")];
      if (v) el.textContent = v;
    });
    if (INSTRUCTOR) {
      document.body.classList.add("is-instructor");
      document.body.insertBefore(
        h("div", { class: "instructor-banner" }, "Instructor view. Test-run links and conditions files are shown. ",
          h("a", { href: location.pathname.split("/").pop() + stripInstructor() }, "Switch to student view")),
        document.body.firstChild);
    }
  }
  function stripInstructor() {
    var p = new URLSearchParams(location.search); p.delete("instructor");
    var s = p.toString(); return s ? "?" + s : "";
  }

  function tagChips(lab, linkToHome) {
    return h("ul", { class: "tags" }, list(lab.tags).map(function (t) {
      return h("li", null, linkToHome
        ? h("a", { class: "tag", href: homeUrl("tag=" + encodeURIComponent(t)) }, t)
        : h("button", { type: "button", class: "tag", "data-tag": t, title: "Show labs tagged “" + t + "”" }, t));
    }));
  }
  function metaLine(lab) {
    var bits = [lab.duration && "About " + lab.duration, lab.chapter].filter(Boolean);
    return bits.length ? h("p", { class: "meta" }, bits.join(" · ")) : null;
  }
  function coverNode(lab, eager) {
    if (!lab.cover) return h("div", { class: "cover cover-empty", "aria-hidden": "true" }, h("span", null, lab.title.charAt(0)));
    var img = h("img", { src: lab.cover, alt: "", loading: eager ? "eager" : "lazy", width: 880, height: 550 });
    img.addEventListener("error", function () {
      var ph = h("div", { class: "cover cover-empty", "aria-hidden": "true" }, h("span", null, lab.title.charAt(0)));
      img.parentNode.replaceWith(ph);
    });
    return h("div", { class: "cover" }, img);
  }

  /* ---------- landing page ---------- */

  function initIndex() {
    var grid = $("grid");
    var problems = validate();
    if (problems.length) showProblems(problems, $("problems"));
    var labs = usableLabs();
    labs.forEach(function (lab, i) { lab._order = i; });

    // every tag used anywhere, with how many labs use it
    var tagCount = {};
    labs.forEach(function (lab) { list(lab.tags).forEach(function (t) { tagCount[t] = (tagCount[t] || 0) + 1; }); });
    var allTags = Object.keys(tagCount).sort(function (a, b) { return a.localeCompare(b); });

    var state = {
      q: params.get("q") || "",
      tags: (params.get("tag") || "").split(",").map(function (s) { return s.trim(); }).filter(function (t) { return tagCount[t]; }),
      type: ["lab", "demo"].indexOf(params.get("type")) >= 0 ? params.get("type") : "all",
      sort: params.get("sort") === "az" ? "az" : "course"
    };

    var search = $("search"), sortSel = $("sort"), tagBar = $("tag-bar"), count = $("count"), clear = $("clear");
    search.value = state.q;
    sortSel.value = state.sort;

    allTags.forEach(function (t) {
      tagBar.appendChild(h("button", { type: "button", class: "chip", "data-tag": t, "aria-pressed": "false" },
        t, h("span", { class: "chip-n" }, tagCount[t])));
    });

    function haystack(lab) {
      if (!lab._hay) {
        lab._hay = [lab.title, badgeText(lab), lab.summary, list(lab.about).join(" "), list(lab.tags).join(" "),
          list(lab.references).map(function (r) { return r.cite; }).join(" "), lab.chapter]
          .filter(Boolean).join(" ").toLowerCase();
      }
      return lab._hay;
    }
    function matches(lab) {
      if (state.type !== "all" && (isDemo(lab) ? "demo" : "lab") !== state.type) return false;
      if (state.tags.length && !state.tags.some(function (t) { return list(lab.tags).indexOf(t) >= 0; })) return false;
      var words = state.q.toLowerCase().split(/\s+/).filter(Boolean);
      var hay = haystack(lab);
      return words.every(function (w) { return hay.indexOf(w) >= 0; });
    }

    function card(lab) {
      var noun = isDemo(lab) ? "demo" : "lab";
      return h("article", { class: "card" + (isDemo(lab) ? " is-demo" : "") },
        h("div", { class: "card-top" }, coverNode(lab), h("span", { class: "badge" }, badgeText(lab))),
        h("div", { class: "card-body" },
          h("h2", null, h("a", { class: "card-link", href: launchUrl(lab) }, lab.title)),
          lab.summary ? h("p", { class: "summary" }, lab.summary) : null,
          tagChips(lab, false),
          metaLine(lab),
          h("div", { class: "card-actions" },
            h("span", { class: "go", "aria-hidden": "true" }, "Launch " + noun + " →"),
            h("a", { class: "sub-link", href: detailsUrl(lab), "aria-label": "Details: " + lab.title }, "Details"),
            analysisNodes(lab, "sub-link")),
          instructorNodes(lab)));
    }

    function render() {
      var shown = labs.filter(matches);
      shown.sort(state.sort === "az"
        ? function (a, b) { return a.title.localeCompare(b.title); }
        : function (a, b) { return a._order - b._order; });
      grid.textContent = "";
      shown.forEach(function (lab) { grid.appendChild(card(lab)); });

      var filtered = state.q || state.tags.length || state.type !== "all";
      count.textContent = filtered
        ? "Showing " + shown.length + " of " + labs.length
        : labs.length + " labs and demos";
      clear.hidden = !filtered;
      $("empty").hidden = shown.length > 0;

      tagBar.querySelectorAll(".chip").forEach(function (c) {
        c.setAttribute("aria-pressed", state.tags.indexOf(c.getAttribute("data-tag")) >= 0 ? "true" : "false");
      });
      document.querySelectorAll("[data-type]").forEach(function (b) {
        b.setAttribute("aria-pressed", b.getAttribute("data-type") === state.type ? "true" : "false");
      });

      // keep the address in step with the filters so it can be shared
      var p = new URLSearchParams();
      if (state.q) p.set("q", state.q);
      if (state.tags.length) p.set("tag", state.tags.join(","));
      if (state.type !== "all") p.set("type", state.type);
      if (state.sort !== "course") p.set("sort", state.sort);
      if (INSTRUCTOR) p.set("instructor", "1");
      var s = p.toString();
      try { history.replaceState(null, "", location.pathname + (s ? "?" + s : "") + location.hash); } catch (e) { /* file:// */ }
    }

    function toggleTag(t) {
      var i = state.tags.indexOf(t);
      if (i >= 0) state.tags.splice(i, 1); else state.tags.push(t);
      render();
    }

    search.addEventListener("input", function () { state.q = search.value.trim(); render(); });
    sortSel.addEventListener("change", function () { state.sort = sortSel.value; render(); });
    tagBar.addEventListener("click", function (e) {
      var c = e.target.closest(".chip"); if (c) toggleTag(c.getAttribute("data-tag"));
    });
    grid.addEventListener("click", function (e) {
      var t = e.target.closest("button.tag");
      if (t) { toggleTag(t.getAttribute("data-tag")); $("tools").scrollIntoView({ block: "nearest" }); }
    });
    document.querySelectorAll("[data-type]").forEach(function (b) {
      b.addEventListener("click", function () { state.type = b.getAttribute("data-type"); render(); });
    });
    function reset() { state.q = ""; state.tags = []; state.type = "all"; search.value = ""; render(); }
    clear.addEventListener("click", reset);
    $("empty-clear").addEventListener("click", reset);
    document.addEventListener("keydown", function (e) {
      if (e.key === "/" && !/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName)) {
        e.preventDefault(); search.focus(); search.select();
      } else if (e.key === "Escape" && document.activeElement === search && search.value) {
        search.value = ""; state.q = ""; render();
      }
    });

    renderReferences(labs);
    render();
  }

  // One combined, alphabetical reference list; each entry says which labs use it.
  function renderReferences(labs) {
    var byCite = {};
    labs.forEach(function (lab) {
      list(lab.references).forEach(function (r) {
        if (!r || !r.cite) return;
        var key = plain(r.cite).toLowerCase();
        if (!byCite[key]) byCite[key] = { ref: r, labs: [] };
        byCite[key].labs.push(lab);
      });
    });
    var keys = Object.keys(byCite).sort();
    var ol = $("ref-list");
    $("references").hidden = keys.length === 0;
    keys.forEach(function (k) {
      var e = byCite[k];
      ol.appendChild(h("li", null,
        refNode(e.ref),
        h("div", { class: "ref-tools" },
          h("span", { class: "ref-used" }, "Used in: ", e.labs.map(function (lab, i) {
            return [i ? ", " : "", h("a", { href: detailsUrl(lab) }, lab.title)];
          })),
          copyButton(function () { return refPlain(e.ref); }))));
    });
  }

  /* ---------- details page ---------- */

  function initLab() {
    var main = $("lab");
    var problems = validate();
    var labs = usableLabs();
    var id = params.get("id");
    var idx = -1;
    labs.forEach(function (lab, i) { if (lab.id === id) idx = i; });
    $("back").setAttribute("href", homeUrl());

    if (idx < 0) {
      if (problems.length) showProblems(problems, main);
      main.appendChild(h("div", { class: "notice" },
        h("strong", null, "Lab not found"),
        h("p", null, id ? "There is no lab with the id “" + id + "”." : "No lab was chosen."),
        h("p", null, h("a", { href: homeUrl() }, "Back to all labs"))));
      return;
    }
    var lab = labs[idx];
    var noun = isDemo(lab) ? "demo" : "experiment";
    document.title = lab.title + " · " + (SITE.title || "Labs");

    var refs = list(lab.references).filter(function (r) { return r && r.cite; });
    var about = list(lab.about);

    main.appendChild(h("article", { class: "detail" },
      h("div", { class: "detail-cover" }, coverNode(lab, true)),
      h("div", { class: "detail-body" },
        h("p", { class: "eyebrow" }, badgeText(lab)),
        h("h1", null, lab.title),
        lab.summary ? h("p", { class: "lede" }, lab.summary) : null,
        tagChips(lab, true),
        metaLine(lab),
        h("div", { class: "detail-actions" },
          h("a", { class: "btn btn-primary", href: launchUrl(lab) }, "Start " + noun + " →"),
          analysisNodes(lab, "btn btn-secondary")),
        instructorNodes(lab))));

    if (about.length || refs.length) {
      main.appendChild(h("details", { class: "about" },
        h("summary", null, "About this " + noun,
          isDemo(lab) ? null : h("span", { class: "about-hint" }, "Best read after you have taken part")),
        h("div", { class: "about-body" },
          about.map(function (p) { return h("p", null, p); }),
          refs.length ? [
            h("h2", null, refs.length > 1 ? "References" : "Reference"),
            h("ul", { class: "ref-list" }, refs.map(function (r) {
              return h("li", null, refNode(r),
                h("div", { class: "ref-tools" }, copyButton(function () { return refPlain(r); })));
            }))
          ] : null,
          lab.chapter ? h("p", { class: "chapter" }, "Textbook: " + lab.chapter) : null)));
    }

    var prev = labs[idx - 1], next = labs[idx + 1];
    main.appendChild(h("nav", { class: "pager", "aria-label": "Other labs" },
      prev ? h("a", { class: "pager-prev", href: detailsUrl(prev) }, h("span", null, "← Previous"), prev.title) : h("span"),
      next ? h("a", { class: "pager-next", href: detailsUrl(next) }, h("span", null, "Next →"), next.title) : h("span")));
  }

  /* ---------- start ---------- */

  document.addEventListener("DOMContentLoaded", function () {
    fillChrome();
    if ($("grid")) initIndex();
    else if ($("lab")) initLab();
  });
})();
