PAPERBARK BUSINESS CO WEBSITE - HOW TO GO LIVE
==============================================

1. Open assets/config.js in any text editor (Notepad, TextEdit) and update:
     - email      -> your business email
     - payhip     -> the product link from Payhip (https://payhip.com/b/....)
     - etsy       -> your Etsy listing link (or "" to hide the Etsy button)
     - price      -> if it changes
   Every button and price on every page updates from this one file.

2. Open policies.html, read the refunds / licence / privacy wording, adjust it
   to suit you, and delete the yellow "delete this box" note.

3. Upload EVERYTHING in this folder (keep the folder structure):
     index.html, secretarys-book.html, policies.html, assets/, images/
   index.html is the home page.

ADDING A NEW PRODUCT LATER
- Add it to "products" in assets/config.js, give it its own page
  (copy secretarys-book.html as a starting point), and switch its card on the
  home page from "Coming soon" to "Available now".

CONTACT FORM (Netlify Forms)
- contact.html holds the contact form. Every "Contact" / "Get in touch" link on
  the site opens it, with the topic filled in. message-sent.html is the thank-you page.
- Messages appear in Netlify: Site > Forms > "contact".
- To get them by email: Netlify > Site configuration > Notifications >
  Emails and webhooks > Form submission notifications > Add notification >
  Email notification > choose the "contact" form > enter your email.
