const controls = document.querySelector("[data-project-controls]");

if (controls) {
  const search = controls.querySelector('input[type="search"]');
  const branch = controls.querySelector("select");
  const groups = document.querySelectorAll("[data-project-group]");
  const status = document.querySelector("[data-project-status]");
  const empty = document.querySelector("[data-empty-results]");

  function filterProjects() {
    const query = search.value.trim().toLocaleLowerCase("en");
    let total = 0;

    for (const group of groups) {
      let matches = 0;
      const groupName = group.querySelector("h2").textContent;

      for (const project of group.querySelectorAll("[data-project]")) {
        const matchesBranch = branch.value === "all" || group.dataset.projectGroup === branch.value;
        const matchesSearch = `${groupName} ${project.textContent}`.toLocaleLowerCase("en").includes(query);
        project.hidden = !matchesBranch || !matchesSearch;
        if (!project.hidden) matches += 1;
      }

      group.hidden = matches === 0;
      total += matches;
    }

    status.textContent = `${total} ${total === 1 ? "project" : "projects"} shown`;
    empty.hidden = total !== 0;
  }

  controls.hidden = false;
  controls.addEventListener("submit", (event) => event.preventDefault());
  controls.addEventListener("input", filterProjects);
  controls.addEventListener("change", filterProjects);
  controls.addEventListener("reset", () => requestAnimationFrame(filterProjects));
  filterProjects();
}
