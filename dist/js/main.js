$(document).ready(function() {
  const $mobileNav = $("#mobile-nav");

  function toggleNav() {
    $mobileNav.toggleClass("active");
    $mobileNav.toggleClass("invisible");
  }

  $("#nav-hamburger, #mobile-nav__overlay, #mobile-nav__close").on("click", function() {
    toggleNav();
  })
})