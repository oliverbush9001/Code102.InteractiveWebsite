// add comments to descript what this script does
document.addEventListener("DOMContentLoaded", () => {
  // pages as an array
  const pages = [
    { name: "Home", file: "home.htm", id: "home" },
    { name: "About", file: "about.htm", id: "about" },
    { name: "Examples", file: "examples.htm", id: "examples" }
  ];

  // navigation section
  const nav = document.createElement("nav");
  nav.innerHTML = pages
    .map(page => `<a href="${page.file}" data-page="${page.id}">${page.name}</a>`)
    .join("");

// add navigation to html file
  document.body.insertBefore(nav, document.body.firstChild);

  // active link should look different - determine active page and add "active" class to the link
  const currentPage = window.location.pathname.split("/").pop().split(".")[0];
  const links = nav.querySelectorAll("a");

  links.forEach(link => {
    if (link.dataset.page === currentPage) {
      link.classList.add("active");
    }
  });
});