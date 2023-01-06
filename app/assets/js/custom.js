const electron = require("electron");

const els = {
  landing: {
    launchButton: document.getElementById("launch_button"),
    launchBefore: document.getElementById("landing__before"),
    launchAfter: document.getElementById("landing__after"),
    links: {
      discord: document.getElementById("landing__nav__discord"),
      minepage: document.getElementById("landing__nav__minepage"),
      minelist: document.getElementById("landing__nav__minelist")
    }
  }
};

els.landing.launchButton.addEventListener("click", () => {
  els.landing.launchBefore.style.display = "none";
  els.landing.launchAfter.style.display = "";
});

function hrefWorker(el) {
  el.addEventListener("click", () => {
    const link = el.getAttribute("href");
    electron.shell.openExternal(link);
  })
}
hrefWorker(els.landing.links.discord);
hrefWorker(els.landing.links.minepage);
hrefWorker(els.landing.links.minelist);
