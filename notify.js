/* Paperbark "Notify me" pop-up form (sent to you by Netlify Forms). No need to edit. */
document.addEventListener("DOMContentLoaded", function () {
  var dlg = document.getElementById("notify-dialog");
  if (!dlg) return;
  var useForm = !(window.PB && window.PB.signupUrl);   // a signup link in config.js takes priority
  if (!useForm) return;
  var prod = dlg.querySelector('input[name="product"]');
  var title = dlg.querySelector(".nd-product");
  document.querySelectorAll("[data-notify]").forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      var name = el.dataset.notify || "new Paperbark books";
      prod.value = name;
      title.textContent = name;
      if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", "");
      var f = dlg.querySelector('input[type="email"]'); if (f) setTimeout(function () { f.focus(); }, 50);
    });
  });
  dlg.querySelectorAll("[data-close]").forEach(function (b) {
    b.addEventListener("click", function () { dlg.close ? dlg.close() : dlg.removeAttribute("open"); });
  });
  dlg.addEventListener("click", function (e) { if (e.target === dlg && dlg.close) dlg.close(); });
});
