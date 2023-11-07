window.scrollTo(0, 0);

pages = document.getElementById("main");
mainMenu = document.getElementById("main-menu");
itemMenu = document.querySelectorAll("#main-menu a");

page = pages.children;

window.onscroll = () => {
  for (let i = 0; i < page.length; i++) {
    if (
      Math.ceil(window.scrollY) >= page[i].offsetTop &&
      Math.ceil(window.scrollY) < page[i].offsetTop + page[i].clientHeight
    ) {
      mainMenu.style.color =
        page[i].attributes["ds-color"]?.textContent || "#4831d4";
      itemMenu[i]?.classList.add("current");
    } else {
      itemMenu[i]?.classList.remove("current");
    }
  }
};

window.onload = () => {
  for (let i = 0; i < page.length; i++) {
    if (
      Math.ceil(window.scrollY) >= page[i].offsetTop + 1 &&
      Math.ceil(window.scrollY) < page[i].offsetTop + page[i].clientHeight
    ) {
      mainMenu.style.color =
        page[i].attributes["ds-color"]?.textContent || "#000";
      itemMenu[currentItem].classList.remove("current");
      itemMenu[i].classList.add("current");
      currentItem = i;
      break;
    }
  }
};
