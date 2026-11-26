/* Progressive enhancement: reveal, reading progress, section highlight. Pages work without it. */
(function () {
  var els = document.querySelectorAll(".sec, .hsec .board, .hsec .viz");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }); }, { rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (e) { io.observe(e); });
  } else els.forEach(function (e) { e.classList.add("in"); });
  var bar = document.querySelector(".progress"), links = [].slice.call(document.querySelectorAll(".rail a"));
  var secs = links.map(function (a) { return document.querySelector(a.getAttribute("href")); });
  function on() {
    var h = document.documentElement, m = h.scrollHeight - h.clientHeight;
    if (bar) bar.style.width = (m > 0 ? h.scrollTop / m * 100 : 0) + "%";
    var c = -1; secs.forEach(function (s, i) { if (s && s.getBoundingClientRect().top < 140) c = i; });
    links.forEach(function (a, i) { a.classList.toggle("on", i === c); });
  }
  window.addEventListener("scroll", on, { passive: true }); on();
})();
