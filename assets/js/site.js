const headerMarkup = `
<a class="skip-link" href="#main">Skip to content</a>
<div class="notice"><span aria-hidden="true">✳</span> THE WORLD'S MOST ICONIC UNDERGROUND CIRCUS STUNT SHOW <span aria-hidden="true">✳</span></div>
<header class="site-header">
  <a class="brand" href="index.html" aria-label="Hellzapoppin home"><img src="assets/images/logo.png" alt=""><span class="brand__name">HELLZA<span>POPPIN</span></span></a>
  <button class="menu-toggle" type="button" aria-label="Open navigation menu" aria-expanded="false" aria-controls="site-navigation"><span class="menu-toggle__icon" aria-hidden="true"></span></button>
  <nav class="site-nav" id="site-navigation" aria-label="Main navigation">
    <a class="site-nav__home" href="index.html">HOME</a>
    <div class="nav-group"><button class="nav-group__toggle" type="button" aria-expanded="false">HELLZAPOPPIN <span aria-hidden="true">⌄</span></button><div class="nav-group__menu">
      <a href="about.html">ABOUT</a><a href="productions.html">PRODUCTIONS</a><a href="contact.html">CONTACT</a><a href="newsletter.html">NEWSLETTER</a><a href="donate.html">DONATE</a>
    </div></div>
    <a href="https://shophellzapoppin.square.site/" target="_blank" rel="noopener noreferrer">SHOP ↗</a>
    <div class="nav-group"><button class="nav-group__toggle" type="button" aria-expanded="false">TOUR DATES/TICKETS <span aria-hidden="true">⌄</span></button><div class="nav-group__menu"><a href="tour-dates.html">TOUR DATES/TICKETS</a><a href="tour-history.html">TOUR HISTORY</a></div></div>
    <div class="nav-group"><button class="nav-group__toggle" type="button" aria-expanded="false">MEDIA <span aria-hidden="true">⌄</span></button><div class="nav-group__menu"><a href="videos.html">VIDEOS</a><a href="photos.html">PHOTOS</a><a href="https://www.youtube.com/user/hellzapoppinrevue/videos" target="_blank" rel="noopener noreferrer">YOUTUBE ↗</a><a href="tour-posters.html">TOUR POSTERS</a></div></div>
    <div class="nav-group"><button class="nav-group__toggle" type="button" aria-expanded="false">MEET THE PERFORMERS <span aria-hidden="true">⌄</span></button><div class="nav-group__menu nav-group__menu--performers">
      <a href="performers.html">ALL PERFORMERS</a>
      <a href="bryce-the-govna-graves.html">BRYCE "THE GOVNA" GRAVES</a><a href="willow-lauren.html">WILLOW LAUREN</a><a href="lizard-man.html">LIZARD MAN</a><a href="andrew-s.html">ANDREW S</a><a href="michael-trixx.html">MICHAEL TRIXX</a><a href="leila-noone.html">LEILA NOONE</a><a href="derek-cockrum.html">DEREK COCKRUM</a><a href="camille-zamboni.html">CAMILLE ZAMBONI</a><a href="ben-blaque.html">BEN BLAQUE</a><a href="eric-ross.html">ERIC ROSS</a><a href="lucian-fuller.html">LUCIAN FULLER</a><a href="short-e-dangerously.html">SHORT E DANGEROUSLY</a><a href="dan-sperry.html">DAN SPERRY</a><a href="meeze.html">MEEZE</a><a href="nik-sin.html">NIK SIN</a><a href="roilan-handbalancer.html">ROILAN HANDBALANCER</a><a href="auzzy-blood.html">AUZZY BLOOD</a><a href="reed-masterson.html">REED MASTERSON</a>
    </div></div>
    <a class="site-nav__trading" href="https://hellzapoppintradingco.com/" target="_blank" rel="noopener noreferrer">TRADING CO. ↗</a>
  </nav>
</header>`;

const footerMarkup = `
<footer class="site-footer"><div class="page-width">
  <div class="footer-top">
    <section class="footer-column footer-brand" aria-label="Hellzapoppin social media">
      <a class="brand" href="index.html" aria-label="Hellzapoppin home"><img src="assets/images/logo.png" alt=""><span class="brand__name">HELLZA<span>POPPIN</span></span></a>
      <h2 class="footer-heading">FOLLOW THE CIRCUS</h2>
      <div class="social-links">
        <a href="https://www.facebook.com/hellzapoppincircussideshow" target="_blank" rel="noopener noreferrer" aria-label="Hellzapoppin on Facebook">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.5-1.5h1.7V3.9c-.8-.1-1.7-.2-2.5-.2-2.5 0-4.1 1.5-4.1 4.2V10H7.4v3h2.7v8z"/></svg>
        </a>
        <a href="https://www.instagram.com/hellzapoppin" target="_blank" rel="noopener noreferrer" aria-label="Hellzapoppin on Instagram">
          <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle class="social-icon__dot" cx="17.5" cy="6.8" r="1"/></svg>
        </a>
        <a href="https://www.linkedin.com/company/hellzapoppin/" target="_blank" rel="noopener noreferrer" aria-label="Hellzapoppin on LinkedIn">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 8.6H2V21h3.2zM3.6 3a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8M22 13.9c0-3.7-2-5.5-4.7-5.5a4.1 4.1 0 0 0-3.7 2V8.6h-3.2V21h3.2v-6.1c0-1.6.3-3.2 2.4-3.2s2.1 1.9 2.1 3.3V21h3.2z"/></svg>
        </a>
        <a href="https://www.x.com/HellzapoppinTM" target="_blank" rel="noopener noreferrer" aria-label="Hellzapoppin on X">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.7 5.6 22H2.4l7.3-8.4L1.9 2h6.5l4.5 6.7zm-1.1 17.9h1.7L7.4 4H5.6z"/></svg>
        </a>
        <a href="https://www.youtube.com/@Hellzapoppin" target="_blank" rel="noopener noreferrer" aria-label="Hellzapoppin on YouTube">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6z"/></svg>
        </a>
      </div>
    </section>
    <section class="footer-column footer-contact">
      <h2 class="footer-heading">CONTACT</h2>
      <address>
        <p><strong>BRYCE GRAVES</strong><a href="mailto:bryce@hellzapoppin.com">bryce@hellzapoppin.com</a></p>
        <p><strong>WILLOW LAUREN</strong><a href="mailto:brittany@hellzapoppin.com">brittany@hellzapoppin.com</a></p>
      </address>
    </section>
    <nav class="footer-column footer-navigation" aria-label="Footer navigation">
      <h2 class="footer-heading">EXPLORE</h2>
      <div class="footer-nav">
        <a href="index.html">HOME</a><a href="about.html">ABOUT</a><a href="productions.html">PRODUCTIONS</a>
        <a href="tour-dates.html">TOUR DATES</a><a href="tour-history.html">TOUR HISTORY</a>
        <a href="videos.html">VIDEOS</a><a href="photos.html">PHOTOS</a><a href="tour-posters.html">TOUR POSTERS</a>
        <a href="performers.html">PERFORMERS</a><a href="contact.html">CONTACT</a><a href="newsletter.html">NEWSLETTER</a>
        <a href="donate.html">DONATE</a>
        <a href="https://shophellzapoppin.square.site/" target="_blank" rel="noopener noreferrer">SHOP ↗</a>
        <a href="https://hellzapoppintradingco.com/" target="_blank" rel="noopener noreferrer">TRADING CO. ↗</a>
      </div>
    </nav>
  </div>
  <div class="footer-bottom"><span>© <span data-current-year>2026</span> HELLZAPOPPIN, LLC. ALL RIGHTS RESERVED.</span><span>THE IMPOSSIBLE IS REAL.</span></div>
</div></footer>`;

const performers = {
  "bryce-the-govna-graves": {
    name: "Bryce “The Govna” Graves",
    role: "PRODUCER · MANAGEMENT · RINGLEADER",
    bio: `<p>Bryce “The Govna” Graves is the ringmaster and producer at the heart of Hellzapoppin. With a blood-red coat, a top hat, and a preacher's command of the crowd, he has built an independent traveling sideshow around daring artists and unforgettable live performances.</p><p>A survivor and relentless champion of his craft, Bryce treats the performers as family and carries the work of producing, managing, and bringing Hellzapoppin to audiences around the world.</p>`
  },
  "willow-lauren": {
    name: "Willow Lauren",
    role: "CO-PRODUCER · SIDESHOW STUNTWOMAN · AERIALIST",
    bio: `<p>Meet the mysterious, spellbinding sideshow starlet Miss Willow Lauren—the Duchess of Dixie. A former motorcycle stunt rider turned international touring sideshow stuntwoman, Willow is also an aspiring illusionist and aerialist.</p><p>Willow is known for fire performance, contortion, and classic sideshow stunts. She also assists other performers in their high-stakes acts, and has toured with Hellzapoppin across the United States, Europe, the Philippines, and Canada.</p>`
  },
  "lizard-man": {
    name: "Lizard Man",
    role: "SIDESHOW ARTIST · HUMAN CURIOSITY",
    bio: `<p>Lizard Man is a sideshow artist and human curiosity whose striking appearance and stage presence have made him a memorable part of the Hellzapoppin company.</p>`
  },
  "andrew-s": {
    name: "Andrew S",
    role: "SIDESHOW ARTIST · WORLD-RECORD PERFORMER",
    bio: `<p>From the entertainment capital of the world, Andrew S brings classic carnival entertainment screaming into the 21st century with multiple world records. His act combines ancient and dangerous feats of skill with jaw-dropping original stunts.</p><p>Andrew's television credits include Guinness World Records (Italy), Ripley's Believe It or Not!, National Geographic, America's Got Talent, Comedy Central, AMC's Freakshow, The Go Big Show, A&E, Discovery Channel, Travel Channel, and Penn & Teller.</p>`
  },
  "michael-trixx": {
    name: "Michael Trixx",
    role: "ROCK ’N’ ROLL MAGICIAN",
    bio: `<p>With a background in music, Michael Trixx combines his two passions—rock ’n’ roll and magic—to create an unforgettable performance. Live doves and parakeets, levitations, confetti blizzards, and fire magic bring the spectacle to life.</p><p>Michael has appeared on NBC's America's Got Talent and performed at clubs across the United States and London. He is the 2009 Florida State Magic Convention Stage Show Contest Champion.</p>`
  },
  "leila-noone": {
    name: "Leila Noone",
    role: "HAIR HANGER · CONTORTIONIST · FOOT ARCHER · HAND BALANCER",
    bio: `<p>Leila Noone is a multidisciplinary circus performer whose acts include hair hanging, contortion, foot archery, and hand balancing.</p><p>Her extraordinary skills bring the artistry, strength, and precision of contemporary circus to the Hellzapoppin sideshow.</p>`
  },
  "derek-cockrum": {
    name: "Derek “Dirty D Hurricane” Cockrum",
    role: "WORLD-CLASS YO-YO ARTIST",
    bio: `<p>Meet Derek “Dirty D Hurricane” Cockrum, a world-class yo-yo artist. His mind-blowing tricks bring a surprising spin—and a spectacular display of precision and skill—to the sideshow.</p>`
  },
  "camille-zamboni": {
    name: "Camille Zamboni",
    role: "GUINNESS WORLD RECORD · CONTORTIONIST · HAND BALANCER",
    bio: `<p>With playful curiosity and a sweet demure, Camille Zamboni twists her way into your little black heart. A self-taught contortionist, hand balancer, and archer, Camille uses her background in artistic gymnastics to bend and balance with remarkable control.</p><p>She sends arrows flying with her feet while balancing upside down on her hands. Camille also holds the official Guinness World Record for painting the world's largest Ouija board at Pennsylvania's Grand Midway Hotel.</p>`
  },
  "ben-blaque": {
    name: "Ben Blaque",
    role: "AGT CHAMPION · CROSSBOW ARTIST",
    bio: `<p>Ben Blaque is an America's Got Talent champion and a world-renowned crossbow artist. He has appeared multiple times on America's Got Talent and Britain's Got Talent, on NBC's I Can Do That, and on The Big Show featuring Snoop Dogg.</p><p>A touring performer across America, Australia, Europe, and South America, Ben brings a death-defying crossbow act to Hellzapoppin—performed live with assistant Willow Lauren.</p>`
  },
  "eric-ross": {
    name: "Eric Ross",
    role: "MAGICIAN · SIDESHOW STUNTMAN",
    bio: `<p>Eric Ross is an award-winning magician and circus sideshow performer, specializing in close-up magic and street magic with everyday objects such as playing cards and borrowed coins.</p><p>His sideshow repertoire includes classic and modern feats such as the human blockhead, glass eating and walking, fire eating and breathing, and fakir performance. Eric has traveled the world performing for audiences and corporations.</p>`
  },
  "lucian-fuller": {
    name: "Lucian Fuller",
    role: "CIRCUS PERFORMER · JUGGLER · COMEDIAN",
    bio: `<p>Lucian Fuller is a high-energy, family-friendly circus performer with world-class juggling skills, dangerously funny stunts, and clean comedy. His performances have delighted audiences around the world.</p><p>Lucian has performed in more than 5,000 shows across 27 countries.</p>`
  },
  "short-e-dangerously": {
    name: "Short E. Dangerously",
    role: "SIDESHOW STUNTMAN · EMCEE · DJ",
    bio: `<p>Short E. Dangerously is a magnetic, slick-talking sideshow stuntman, nightclub emcee, and veteran DJ. His performance blends live stunts and a captivating stage presence that audiences won't soon forget.</p><p>He has traveled around the world and appeared on AMC's Freakshow, National Geographic, and in multiple Ripley's Believe It or Not! books. Shorty is a wax figure at Ripley's museums and has toured with Hellzapoppin at festivals and alongside major rock bands.</p>`
  },
  "dan-sperry": {
    name: "Dan Sperry",
    role: "SHOCK ILLUSIONIST · THE ANTI-CONJUROR",
    bio: `<p>Known as the Rockstar of Magic, Dan Sperry blends macabre illusions with eccentric humor and audience interaction. His unique performance has been called “totally icky, yet totally awesome.”</p><p>Dan has appeared on America's Got Talent, Penn & Teller: Fool Us, Masters of Illusion, Germany's Das Supertalent, FOX's World Magic Awards, and TLC's Cake Boss. He also starred in The Illusionists, Broadway's best-selling magic show.</p>`
  },
  "meeze": {
    name: "MeeZee",
    role: "THE CHAIRMAN OF CHEERS · CIRCUS PERFORMER",
    bio: `<p>The Chairman of Cheers, Clown Prince, and Royal Rouge of Sideshow: MeeZee is a classic American circus and sideshow performer from California.</p><p>Specializing in the daredevil balancing art of chair stacking, MeeZee combines mesmerizing rhythm, nuanced character, strength, and balance. How high will he go? See the Chairman put himself in perilous positions with precarious objects.</p>`
  },
  "nik-sin": {
    name: "Nik Sin",
    role: "THE WORLD'S SMALLEST ESCAPE ARTIST",
    bio: `<p>Nik Sin is billed by Hellzapoppin as the world's smallest escape artist, bringing a distinctive escape act to the company's sideshow lineup.</p>`
  },
  "roilan-handbalancer": {
    name: "Roilan Hernandez De Paz",
    role: "THIRD-GENERATION CUBAN HAND BALANCER",
    bio: `<p>Roilan Hernandez De Paz, also known as Circo Roilan, is a third-generation Cuban hand balancer best known for his winning performance on Germany's Das Supertalent in 2017.</p><p>Roilan has held multiple Las Vegas residencies, including the V Variety show at Planet Hollywood, and toured internationally with Cirque du Soleil, Cirque de la Symphonie, and Armed Forces Entertainment. After escaping Cuban prison at 16, he received political asylum and became a U.S. citizen in 2018.</p>`
  },
  "auzzy-blood": {
    name: "Auzzy Blood",
    role: "SIDESHOW ARTIST",
    bio: `<p>Auzzy Blood is an up-and-coming sideshow artist who has performed with Cirque du Soleil in Las Vegas. His specialty acts include sword swallowing, eye-socket weightlifting, fakir performance, and his signature corkscrew stunt.</p><p>Auzzy brings a remarkable demonstration of focus and mind over matter to the Hellzapoppin sideshow.</p>`
  },
  "reed-masterson": {
    name: "Reed Masterson",
    role: "AWARD-WINNING ILLUSIONIST · MAGICIAN",
    bio: `<p>Reed Masterson is a nationally touring, award-winning illusionist with a signature rockstar style and a larger-than-life personality. Since his first sold-out show in 2008, he has performed for audiences across 46 states.</p><p>Reed has appeared on ABC, FOX, NBC, The CW, and an A&E television special. His fast-paced, interactive illusions and award-winning dove act bring a theatrical, Vegas-quality production to the stage.</p>`
  }
};

const performerId = document.body.dataset.performer;
const pageHeader = document.querySelector("#header-placeholder");
const pageFooter = document.querySelector("#footer-placeholder");

if (pageHeader) pageHeader.innerHTML = headerMarkup;
if (pageFooter) pageFooter.innerHTML = footerMarkup;

const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";
const currentPagePath = currentPath === "/" ? "/index.html" : currentPath;
document.querySelectorAll(".site-nav a[href], .footer-nav a[href]").forEach((link) => {
  const destination = new URL(link.href, window.location.href);
  const destinationPath = destination.pathname.replace(/\/+$/, "") || "/";
  if (destination.origin !== window.location.origin || destinationPath !== currentPagePath) return;

  link.setAttribute("aria-current", "page");
  const group = link.closest(".nav-group");
  if (group) group.classList.add("is-current");
});

if (performerId && performers[performerId]) {
  const performer = performers[performerId];
  const title = document.querySelector("[data-performer-name]");
  const role = document.querySelector("[data-performer-role]");
  const bio = document.querySelector("[data-performer-bio]");
  const documentTitle = document.querySelector("title");
  if (title) title.textContent = performer.name;
  if (role) role.textContent = performer.role;
  if (bio) bio.innerHTML = performer.bio;
  if (documentTitle) documentTitle.textContent = `${performer.name} | Hellzapoppin`;
}

const performerRoster = document.querySelector("[data-performer-roster]");
const companyMomentPhotos = [
  "assets/images/gallery-official-2.jpg",
  "assets/images/gallery-official-4.jpg",
  "assets/images/gallery-official-5.jpg",
  "assets/images/gallery-official-7.png",
  "assets/images/gallery-official-8.jpg"
];

function getPerformerPhotos(slug, photoSets) {
  const photos = photoSets[slug] || [];
  if (photos.length) return { photos, isCompanyGallery: false };
  if (slug === "nik-sin") return { photos: companyMomentPhotos, isCompanyGallery: true };
  return { photos: [], isCompanyGallery: false };
}

if ((performerId && performers[performerId]) || performerRoster) {
  const galleryDataScript = document.createElement("script");
  galleryDataScript.src = "assets/js/performer-photos-data.js";
  galleryDataScript.addEventListener("load", () => {
    const photoSets = window.hellzapoppinPerformerPhotos;
    if (!photoSets || typeof photoSets !== "object") {
      throw new Error("Performer photo data could not be loaded.");
    }

    if (performerId && performers[performerId]) {
      const performer = performers[performerId];
      const { photos, isCompanyGallery } = getPerformerPhotos(performerId, photoSets);
      const profileMark = document.querySelector(".artist__mark");
      const profileImage = document.querySelector(".artist__mark img");
      const backLink = document.querySelector('.artist__grid a[href="performers.html"]');

      if (backLink) backLink.closest("p").remove();

      if (profileImage && photos.length) {
        profileMark.classList.add("artist__mark--photo");
        if (isCompanyGallery) profileMark.classList.add("artist__mark--company-photo");
        profileImage.src = photos[0];
        profileImage.alt = isCompanyGallery ? "Hellzapoppin company show moment" : `${performer.name} performing with Hellzapoppin`;
        profileImage.dataset.lightboxSrc = photos[0];
        profileImage.dataset.lightboxAlt = profileImage.alt;
        profileImage.tabIndex = 0;
        profileImage.setAttribute("role", "button");
        profileImage.setAttribute("aria-label", `View larger photo of ${performer.name}`);
      }

      const profileGrid = document.querySelector(".artist__grid");
      if (profileGrid && photos.length) {
        const gallery = document.createElement("div");
        gallery.className = "performer-gallery";
        const heading = document.createElement("h2");
        heading.className = "display";
        heading.textContent = isCompanyGallery ? "COMPANY MOMENTS." : "IN THE RING.";
        const imageGrid = document.createElement("div");
        imageGrid.className = "performer-gallery__grid";

        photos.forEach((src, index) => {
          const button = document.createElement("button");
          button.className = "performer-gallery__photo";
          button.type = "button";
          button.setAttribute("aria-label", isCompanyGallery
            ? `Open Hellzapoppin company show photo ${index + 1}`
            : `Open photo ${index + 1} of ${performer.name}`);
          button.dataset.lightboxSrc = src;

          const image = document.createElement("img");
          image.src = src;
          image.alt = isCompanyGallery
            ? `Hellzapoppin company show moment, photo ${index + 1}`
            : `${performer.name} performing with Hellzapoppin, photo ${index + 1}`;
          button.dataset.lightboxAlt = image.alt;
          image.loading = "lazy";
          image.decoding = "async";
          button.append(image);
          imageGrid.append(button);
        });

        gallery.append(heading, imageGrid);
        profileGrid.insertAdjacentElement("afterend", gallery);
      } else if (profileGrid) {
        const note = document.createElement("p");
        note.className = "artist__photo-note";
        note.textContent = "The official profile does not currently include individual performer photos.";
        profileGrid.insertAdjacentElement("afterend", note);
      }
    }

    if (performerRoster) {
      Object.entries(performers).forEach(([slug, performer]) => {
        const card = document.createElement("article");
        card.className = "performer-roster-card";
        const { photos, isCompanyGallery } = getPerformerPhotos(slug, photoSets);
        if (isCompanyGallery) card.classList.add("performer-roster-card--company-gallery");

        if (photos.length) {
          const image = document.createElement("img");
          image.src = photos[0];
          image.alt = isCompanyGallery ? "Hellzapoppin company show moment" : `${performer.name} performing with Hellzapoppin`;
          image.loading = "lazy";
          image.decoding = "async";
          image.dataset.lightboxSrc = photos[0];
          image.dataset.lightboxAlt = image.alt;
          image.tabIndex = 0;
          image.setAttribute("role", "button");
          image.setAttribute("aria-label", `View larger photo of ${performer.name}`);
          card.append(image);
        } else {
          const placeholder = document.createElement("div");
          placeholder.className = "performer-roster-card__placeholder";
          placeholder.setAttribute("role", "img");
          placeholder.setAttribute("aria-label", `No individual performer photo is available for ${performer.name}`);
          placeholder.textContent = "NO INDIVIDUAL PHOTO AVAILABLE";
          card.append(placeholder);
        }

        const details = document.createElement("div");
        details.className = "performer-roster-card__details";
        const role = document.createElement("p");
        role.className = "performer__role";
        role.textContent = performer.role;
        const name = document.createElement("h2");
        name.textContent = performer.name;
        const biography = document.createElement("p");
        biography.className = "performer-roster-card__bio";
        const bioText = document.createElement("div");
        bioText.innerHTML = performer.bio;
        const summary = bioText.textContent.trim();
        biography.textContent = summary.length > 170 ? `${summary.slice(0, 167).trim()}…` : summary;
        const link = document.createElement("a");
        link.className = "rule-link";
        link.href = `${slug}.html`;
        link.textContent = "VIEW PROFILE ↗";
        details.append(role, name, biography, link);
        card.append(details);
        performerRoster.append(card);
      });
    }

    setupPerformerLightbox();
  });
  galleryDataScript.addEventListener("error", () => {
    throw new Error("Failed to load performer photo galleries.");
  });
  document.head.append(galleryDataScript);
}

function setupPerformerLightbox() {
  const dialog = document.createElement("dialog");
  dialog.className = "performer-lightbox";
  dialog.setAttribute("aria-label", "Performer photo viewer");

  const closeButton = document.createElement("button");
  closeButton.className = "performer-lightbox__close";
  closeButton.type = "button";
  closeButton.setAttribute("aria-label", "Close photo viewer");
  closeButton.textContent = "×";

  const image = document.createElement("img");
  image.className = "performer-lightbox__image";

  dialog.append(closeButton, image);
  document.body.append(dialog);

  const close = () => {
    if (dialog.open) dialog.close();
  };

  closeButton.addEventListener("click", close);
  image.addEventListener("click", close);
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) close();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && dialog.open) {
      event.preventDefault();
      close();
    }
  });

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-lightbox-src]");
    if (!trigger) return;

    image.src = trigger.dataset.lightboxSrc;
    image.alt = trigger.dataset.lightboxAlt || "Expanded performer photo";
    dialog.showModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.target instanceof Element && (event.key === "Enter" || event.key === " ") && event.target.matches("[data-lightbox-src]:not(button)")) {
      event.preventDefault();
      event.target.click();
    }
  });
}

const menuToggle = document.querySelector(".menu-toggle");
const siteNavigation = document.querySelector("#site-navigation");

if (menuToggle && siteNavigation) {
  let menuAnimation;

  const setNavigationOpen = (open) => {
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");

    if (menuAnimation) menuAnimation.cancel();
    if (open) siteNavigation.classList.add("is-open");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !siteNavigation.animate) {
      siteNavigation.classList.toggle("is-open", open);
      return;
    }

    const animation = siteNavigation.animate(
      open
        ? [{ opacity: 0, transform: "translateY(-8px)" }, { opacity: 1, transform: "translateY(0)" }]
        : [{ opacity: 1, transform: "translateY(0)" }, { opacity: 0, transform: "translateY(-8px)" }],
      { duration: 180, easing: "ease-out" }
    );
    menuAnimation = animation;
    animation.onfinish = () => {
      if (menuAnimation !== animation) return;
      if (!open) siteNavigation.classList.remove("is-open");
      menuAnimation = null;
    };
  };

  const closeMenu = () => {
    setNavigationOpen(false);
    document.querySelectorAll(".nav-group.is-open").forEach((group) => group.classList.remove("is-open"));
  };

  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    setNavigationOpen(!expanded);
  });

  siteNavigation.querySelectorAll(".nav-group__toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const group = button.closest(".nav-group");
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      group.classList.toggle("is-open", !expanded);
    });
  });

  siteNavigation.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement && window.matchMedia("(max-width: 800px)").matches) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
      closeMenu();
      menuToggle.focus();
    }
  });
}

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const siteHeader = document.querySelector(".site-header");
const mainContent = document.querySelector("main");

if (prefersReducedMotion) {
  document.querySelectorAll("video[autoplay]").forEach((video) => video.pause());
}

if (!prefersReducedMotion && Element.prototype.animate) {
  if (siteHeader) {
    siteHeader.animate(
      [{ opacity: 0, transform: "translateY(-10px)" }, { opacity: 1, transform: "translateY(0)" }],
      { duration: 420, easing: "cubic-bezier(.2,.7,.25,1)" }
    );
  }
  if (mainContent) {
    mainContent.animate(
      [{ opacity: 0, transform: "translateY(12px)" }, { opacity: 1, transform: "translateY(0)" }],
      { duration: 480, delay: 60, easing: "cubic-bezier(.2,.7,.25,1)" }
    );
  }
}

let pageNavigationStarted = false;
document.addEventListener("click", (event) => {
  if (
    prefersReducedMotion ||
    pageNavigationStarted ||
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey ||
    !(event.target instanceof Element) ||
    !Element.prototype.animate
  ) return;

  const link = event.target.closest("a[href]");
  if (!link || link.hasAttribute("download") || (link.target && link.target !== "_self")) return;

  const destination = new URL(link.href, window.location.href);
  if (
    destination.origin !== window.location.origin ||
    (destination.pathname === window.location.pathname && destination.search === window.location.search)
  ) return;

  event.preventDefault();
  pageNavigationStarted = true;
  const transition = document.body.animate(
    [{ opacity: 1 }, { opacity: 0 }],
    { duration: 180, easing: "ease-in" }
  );
  transition.onfinish = () => window.location.assign(destination.href);
});

const year = document.querySelector("[data-current-year]");
if (year) year.textContent = String(new Date().getFullYear());

document.querySelectorAll(".tour-feature").forEach((feature) => {
  const video = feature.querySelector("video");
  const soundToggle = feature.querySelector(".video-sound-toggle");
  if (!video || !soundToggle) return;

  soundToggle.addEventListener("click", () => {
    video.muted = !video.muted;
    soundToggle.setAttribute("aria-pressed", String(!video.muted));
    soundToggle.setAttribute("aria-label", video.muted ? "Unmute video" : "Mute video");
  });
});

const newsletterForm = document.querySelector("#newsletter-form");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = document.querySelector("#newsletter-message");
    if (message) {
      message.textContent = "Your email hasn't been sent or stored here. Continue to the official signup and enter it there.";
      message.setAttribute("role", "status");
    }
    window.location.assign("https://hellzapoppin.com/newsletter");
  });
}
