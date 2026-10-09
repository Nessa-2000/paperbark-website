/* =====================================================================
   PAPERBARK BUSINESS CO — SITE SETTINGS
   This is the ONLY file you need to edit to update prices, buy links
   and your contact email. Save it, re-upload it, done.
   ===================================================================== */
window.PB = {

  // Where buyers, clubs and associations can email you
  email: "hello@yourdomain.com.au",

  // OPTIONAL: a sign-up form link for "Notify me" buttons (e.g. a MailerLite,
  // Mailchimp or Google Form link). Leave as "" and the buttons will open an
  // email to you instead.
  signupUrl: "",

  // One entry per product that is FOR SALE.
  // payhip = the product link Payhip gives you (looks like https://payhip.com/b/AbC1)
  // etsy   = your Etsy listing link (or "" to hide the Etsy button)
  products: {
    "secretarys-book": {
      price:  "A$29",
      payhip: "https://payhip.com/b/YOUR-CODE",
      etsy:   "https://www.etsy.com/listing/YOUR-LISTING"
    }
  }
};

/* ---------- no need to edit below this line ---------- */
document.addEventListener("DOMContentLoaded", function () {
  var PB = window.PB;
  document.querySelectorAll("[data-price]").forEach(function (el) {
    var p = PB.products[el.dataset.price]; if (p) el.textContent = p.price;
  });
  document.querySelectorAll("[data-buy]").forEach(function (el) {
    var p = PB.products[el.dataset.buy]; if (p && p.payhip) el.href = p.payhip;
  });
  document.querySelectorAll("[data-etsy]").forEach(function (el) {
    var p = PB.products[el.dataset.etsy];
    if (p && p.etsy) el.href = p.etsy; else el.style.display = "none";
  });
  document.querySelectorAll("[data-mail]").forEach(function (el) {
    var subj = el.dataset.mail || "Hello from your website";
    el.href = "mailto:" + PB.email + "?subject=" + encodeURIComponent(subj);
    if (el.dataset.showEmail !== undefined) el.textContent = PB.email;
  });
  document.querySelectorAll("[data-notify]").forEach(function (el) {
    var name = el.dataset.notify;
    el.href = PB.signupUrl ? PB.signupUrl
      : "mailto:" + PB.email + "?subject=" + encodeURIComponent("Notify me: " + name) +
        "&body=" + encodeURIComponent("Hi! Please let me know when the " + name + " is ready.");
  });
  var y = document.getElementById("yr"); if (y) y.textContent = new Date().getFullYear();
  // mobile menu
  var t = document.querySelector(".menu-toggle"), n = document.querySelector(".site-nav");
  if (t && n) t.addEventListener("click", function () {
    var open = n.classList.toggle("open"); t.setAttribute("aria-expanded", open);
  });
});
