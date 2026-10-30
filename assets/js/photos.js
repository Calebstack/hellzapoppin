(function () {
  const photos = window.hellzapoppinPhotos;
  const grid = document.getElementById("photo-grid");

  if (!Array.isArray(photos) || !grid) {
    throw new Error("Photo archive data or page elements could not be loaded.");
  }

  [43, 214].forEach((archiveNumber) => {
    const fileNumber = String(archiveNumber).padStart(3, "0");
    const alreadyIncluded = photos.some((photo) => photo.src.includes(`photo-${fileNumber}.`));
    if (!alreadyIncluded) {
      const extension = archiveNumber === 43 ? "png" : "jpg";
      photos.splice(archiveNumber - 1, 0, {
        src: `assets/images/photos/photo-${fileNumber}.${extension}`,
        alt: `Hellzapoppin official photo archive, image ${fileNumber}`,
        original: `Official photo archive image ${fileNumber}`
      });
    }
  });

  photos.forEach((photo, index) => {
    if (!photo || typeof photo.src !== "string" || typeof photo.alt !== "string" || typeof photo.original !== "string") {
      throw new Error("The photo archive contains an invalid entry.");
    }

    const card = document.createElement("figure");
    card.className = "photo-tile photo-archive-card";

    const image = document.createElement("img");
    image.src = photo.src;
    image.alt = photo.alt;
    image.loading = "lazy";
    image.decoding = "async";

    const caption = document.createElement("figcaption");
    const number = document.createElement("span");
    number.className = "photo-tile__number";
    number.textContent = `OFFICIAL PHOTO ARCHIVE · ${String(index + 1).padStart(3, "0")}`;

    const filename = document.createElement("span");
    filename.className = "photo-tile__caption";
    filename.textContent = photo.original;

    caption.append(number, filename);
    card.append(image, caption);
    grid.append(card);
  });
})();
