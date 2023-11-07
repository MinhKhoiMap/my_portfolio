function reavealFunc() {
  window.sr = ScrollReveal({
    duration: 600,
    distance: "50px",
    easing: "ease-out",
  });

  sr.reveal("header h2", {
    origin: "left",
    interval: 500,
    reset: true,
  });

  sr.reveal("main h2", {
    origin: "bottom",
    interval: 500,
    reset: true,
  });

  sr.reveal("#introduce .subject-title:not(.role)", { origin: "top" });
  sr.reveal("#introduce .subject-title:last-child", {
    origin: "top",
    delay: 500,
  });
  sr.reveal("#introduce .subject-title.role", { origin: "left", reset: true });
  sr.reveal("#introduce .description", { origin: "right" });
  sr.reveal("#introduce .some_things_about_me", { origin: "bottom" });
  sr.reveal("#introduce .avatar figure img", {
    origin: "left",
    opacity: 1,
    reset: true,
  });
  //   sr.reveal("#ability > div h2", {
  //     origin: "left",
  //     interval: 500,
  //     reset: true,
  //   });
  sr.reveal("#ability > div p", {
    origin: "top",
    scale: 0.8,
    interval: 500,
    reset: true,
  });
  //   sr.reveal("#my_expertise h2", {
  //     origin: "top",
  //     scale: 0.8,
  //     reset: true,
  //   });
  //   sr.reveal("#my_expertise .title > div", { origin: "top", reset: true });
  sr.reveal("#my_expertise .title h3", { origin: "left", reset: true });
  sr.reveal("#my_expertise .my_expertise_items .desc span", {
    origin: "top",
    scale: 0,
    reset: true,
  });
  sr.reveal("#my_expertise .my_expertise_items .desc p", {
    origin: "top",
    reset: true,
  });
  sr.reveal("#my_expertise .bg_skill", {
    opacity: 0.4,
  });
  sr.reveal(
    "#my_expertise .my_expertise_items div:last-child blockquote, #my_expertise .my_expertise_items div:last-child footer",
    {
      origin: "left",
      reset: true,
    }
  );
  sr.reveal("#my_expertise .my_expertise_items > div:last-child div", {
    origin: "left",
    delay: 500,
    reset: true,
  });

  sr.reveal("#my_skill_bag .card", {
    origin: "left",
    interval: 400,
  });

  sr.reveal("#my_skill_bag .note", {
    origin: "bottom",
  });

  sr.reveal("#my_projects .row .col-xl-4:not(.label_group)");
  sr.reveal("#my_projects .row .col-xl-8", {
    origin: "left",
    interval: 400,
    reset: true,
  });

  sr.reveal("#experience .banner", {
    origin: "top",
    delay: 800,
    reset: true,
  });
  sr.reveal("#experience .experience-item", {
    delay: 1500,
    origin: "top",
    reset: true,
  });
  sr.reveal("#contact .social-info .group-other a", {
    origin: "left",
    interval: 500,
    reset: true,
  });
  sr.reveal("#contact .social-info .email", {
    origin: "left",
    reset: true,
  });

  sr.clean("#my_projects .row .col-xl-4.label_group h2");

  ScrollReveal({
    duration: 600,
    distance: "20px",
    easing: "ease-in-out",
  }).reveal("#my_projects .row .col-xl-4.label_group h2", {
    origin: "right",
    reset: true,
  });
}

window.addEventListener("load", () => reavealFunc());
