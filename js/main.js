$(window).scroll(() => {
  let aboutTop = $("#about").offset().top;
  let windowScroll = $(window).scrollTop();

  if (windowScroll > aboutTop - 500) {
    $("#bar").css({ color: "black" });
    if ($(window).width > "768px") {
      $("nav").css({ "background-color": "white", transition: "0.7s all" });
      $("nav a").css({ color: "black" });
      let anchor = $(".anchor");
      for (let i = 0; i < anchor.length; i++) {
        let beforeElement = window.getComputedStyle(anchor[i], "::before");
        anchor[i].style.setProperty("--bg-color", "black");
      }
    }
  } else {
    $("#bar").css({ color: "white" });
    $("nav").css({ "background-color": "transparent", transition: "0.7s all" });
    $("nav a").css({ color: "white" });
    let anchor = $(".anchor");
    for (let i = 0; i < anchor.length; i++) {
      let beforeElement = window.getComputedStyle(anchor[i], "::before");
      anchor[i].style.setProperty("--bg-color", "white");
    }
  }
});
