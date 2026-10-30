(function () {
  const videos = window.hellzapoppinVideos;
  const grid = document.getElementById("video-grid");
  const count = document.getElementById("video-count");
  const backgroundVideo = document.querySelector(".video-hero__media");

  if (!Array.isArray(videos) || !grid || !count) {
    throw new Error("Video archive data or page elements could not be loaded.");
  }

  if (backgroundVideo && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    backgroundVideo.pause();
  }

  const fragment = document.createDocumentFragment();
  videos.forEach((video) => {
    if (!video || typeof video.title !== "string" || typeof video.category !== "string" ||
        typeof video.provider !== "string" || typeof video.image !== "string") {
      throw new Error("The video archive contains an invalid entry.");
    }

    const url = new URL(video.url);
    if (url.protocol !== "https:" || !["www.youtube.com", "youtube.com", "vimeo.com"].includes(url.hostname)) {
      throw new Error(`The video link for "${video.title}" is invalid.`);
    }

    const link = document.createElement("a");
    link.className = "video-tile";
    link.href = url.href;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.setAttribute("aria-label", `Watch ${video.title} on ${video.provider}`);

    const image = document.createElement("img");
    image.src = video.image;
    image.alt = "";
    image.loading = "lazy";
    image.decoding = "async";

    const category = document.createElement("span");
    category.className = "video-tile__category";
    category.textContent = video.category;

    const heading = document.createElement("h2");
    heading.textContent = video.title;

    const action = document.createElement("span");
    action.className = "video-tile__watch";
    action.textContent = `WATCH ON ${video.provider.toUpperCase()} ↗`;

    link.append(image, category, heading, action);
    fragment.append(link);
  });

  grid.replaceChildren(fragment);
  count.textContent = `${videos.length} videos in the collection`;
})();
