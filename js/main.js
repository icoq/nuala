$(".burger").click(function (event) {
  $(".burger, .menu").toggleClass("active");
  $(".logoCont").toggleClass("colorActive");
  $("body").toggleClass("scrollLock");
  //$(".logo").toggleClass("active2");
});

$(".menuItems__item-cat").addClass("selected");

// let menuElems = document.querySelectorAll(".menuItems__item");

// for (let i = 0; i < menuElems.length; i++) {
//   menuElems[i].onclick = function() {
//     this.classList.toggle("selected");
//   };
// }

function darkMode() {
  var x = document.querySelector(".darkMode");
  if (x.innerHTML == "Dark Mode?") {
    x.innerHTML = "Light Mode?";
  } else {
    x.innerHTML = "Dark Mode?";
  }

  $(".darkMode").toggleClass("whiteMode");

  $("body").toggleClass("darkBody");
  $(".item__name").toggleClass("darkItem__name");
  $(".item__price").toggleClass("darkItem__price");
  $(".nav").toggleClass("darkNav");
  $(".logoCont").toggleClass("darkNav");
  $(".item").toggleClass("darkItem");
  $(".btn").toggleClass("darkBtn");
  $(".menuItems__item").toggleClass("darkMenuItems__item");
  $(".menu").toggleClass("darkMenu");
  $(".menuItems").toggleClass("darkMenuItems");
  $(".menuItems>.menuItems__item").toggleClass("darkMenuItems__item");
  $(".logoCont>.logo").toggleClass("darkLogo");
  $(".cartCount__number").toggleClass("darkCartCount__number");
  $(".burger>span").toggleClass("darkBurger");
  $(".burger").toggleClass("darkBurger");
  $(".footer").toggleClass("darkFooter");
  $(".form").toggleClass("darkForm");
  $(".input").toggleClass("darkInput");
  $(".label").toggleClass("darkLabel");

  $(".solotext").toggleClass("darkMenuItems__item1 ");
  $(".stock").toggleClass("darkMenuItems__item1");
  $(".soloid").toggleClass("darkMenuItems__item1 ");
  $(".soloprice").toggleClass("darkMenuItems__item1 ");
  $(".solotitle").toggleClass("darkMenuItems__item1 ");
  $(".soloItem").toggleClass("darkSoloItem");

  $(".shoppingCont__inner").toggleClass("darkShoppingCont__inner");
  $(".shoppingItem").toggleClass("darkShoppingItem");
  $(".shoppingCont__header").toggleClass("darkShoppingCont__header");
  $(".shoppingItem__name").toggleClass("darkShoppingItem__name");
  $(".shoppingItem__remove").toggleClass("darkShoppingItem__remove");
  $(".shoppingItem__price").toggleClass("darkShoppingItem__price");
  $(".amount").toggleClass("darkAmount");
  $(".cu").toggleClass("ddd");
  $(".d").toggleClass("metaColor");
}

let isDark = localStorage.getItem("isDark");

$(".darkMode").click(function () {
  localStorage.setItem("isDark", "");

  const body1 = document.querySelector("body");
  isDark = localStorage.getItem("isDark");

  if (isDark !== null) {
    if (!body1.classList.contains("darkBody")) {
      localStorage.setItem("isDark", true);
      isDark = localStorage.getItem("isDark");
    } else {
      localStorage.setItem("isDark", false);
      isDark = localStorage.getItem("isDark");
    }

    darkMode();
  }
});

if (isDark == "true") {
  darkMode();
}
;
;
;
window.onload = function() {
    // webp support for css
    function WebP(callback) {
        var webP = new Image();
        webP.onload = webP.onerror = function() {
            callback(webP.height == 2);
        };
        webP.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }

    WebP(function(support) {
        if (support == true) {
            document.querySelector("body").classList.add("webp");
        }
    });
};;

const cart = document.querySelector(".menuItems__item-cart");

cart.onclick = function () {
  document.querySelector("body").classList.toggle("scrollLock1");
  document.querySelector(".bg").classList.toggle("bgHidden");
  document.querySelector(".shoppingCont").classList.toggle("shoppingHidden");
  document.querySelector("body").classList.toggle("peNone");
};

const close = document.querySelector(".close");

close.onclick = function () {
  document.querySelector("body").classList.remove("scrollLock1");
  document.querySelector(".shoppingCont").classList.add("shoppingHidden");
  document.querySelector(".bg").classList.add("bgHidden");
  document.querySelector("body").classList.remove("peNone");
};

window.onload = function () {
  $(".slider").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    arrows: true,
    cssEase: "ease",
    speed: 750,
    //fade: true,

    prevArrow:
      '<span class="slick-prev pull-left"><img class="larrow" src="./img/larrow.png"></span>',
    nextArrow:
      '<span class="slick-next pull-right"><img class="rarrow" src="./img/rarrow.png"></span>',
  });
};

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
          function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              // Checking if the target was focused
              return false;
            } else {
              $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          }
        );
      }
    }
  });

//# sourceMappingURL=main.js.map
