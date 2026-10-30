(function () {
  const entries = window.hellzapoppinTourHistory;
  const search = document.getElementById("history-search");
  const yearFilter = document.getElementById("history-year-filter");
  const results = document.getElementById("history-results");
  const list = document.getElementById("tour-history-list");

  if (!Array.isArray(entries) || !search || !yearFilter || !results || !list) {
    throw new Error("Tour history data or page controls could not be loaded.");
  }

  const groupedEntries = new Map();
  entries.forEach((entry) => {
    if (!entry || !/^\d{4}-\d{2}-\d{2}$/.test(entry.date) || typeof entry.displayDate !== "string" || typeof entry.description !== "string") {
      throw new Error("The tour history archive contains an invalid entry.");
    }

    const year = entry.date.slice(0, 4);
    if (!groupedEntries.has(year)) groupedEntries.set(year, []);
    groupedEntries.get(year).push(entry);
  });

  const years = Array.from(groupedEntries.keys()).sort((a, b) => Number(b) - Number(a));
  years.forEach((year) => {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    yearFilter.append(option);
  });

  function render() {
    const query = search.value.trim().toLocaleLowerCase();
    const selectedYear = yearFilter.value;
    const fragment = document.createDocumentFragment();
    let visibleCount = 0;

    years.forEach((year) => {
      if (selectedYear && year !== selectedYear) return;

      const matchingEntries = groupedEntries.get(year).filter((entry) => {
        return !query || `${entry.displayDate} ${entry.description}`.toLocaleLowerCase().includes(query);
      });
      if (!matchingEntries.length) return;

      visibleCount += matchingEntries.length;
      const group = document.createElement("details");
      group.className = "history-year-group";
      group.open = Boolean(query || selectedYear) || year === years[0];

      const heading = document.createElement("summary");
      heading.className = "history-year";
      heading.textContent = `${year} (${matchingEntries.length})`;
      group.append(heading);

      matchingEntries.forEach((entry) => {
        const event = document.createElement("article");
        event.className = "history-event";

        const date = document.createElement("time");
        date.dateTime = entry.date;
        date.textContent = entry.displayDate;

        const description = document.createElement("span");
        description.textContent = entry.description || "Event details not listed in the supplied archive.";

        event.append(date, description);
        group.append(event);
      });

      fragment.append(group);
    });

    list.replaceChildren(fragment);
    results.textContent = `${visibleCount.toLocaleString()} of ${entries.length.toLocaleString()} tour dates shown`;

    if (!visibleCount) {
      const empty = document.createElement("p");
      empty.className = "history-empty";
      empty.textContent = "No tour dates match that search. Try another location, venue, or year.";
      list.append(empty);
    }
  }

  search.addEventListener("input", render);
  yearFilter.addEventListener("change", render);
  render();
})();
