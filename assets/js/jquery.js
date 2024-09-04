$(document).ready(function() {

//=====menu second
  $(".tab-content > div:not(:first-child)").hide();
  $(".tab > li > a").click(function(event) {
      event.preventDefault();
      $(".tab > li").removeClass("active");
      $(this).parent().addClass("active");

      let h = $(this).attr("href");
      $(".tab-content > div").hide();
      $(h).show();
  });

//=====slider 5s

  $(".slider").height($(".slider img").height());
  $(".slider > div:not(:first-child)").hide();

  let current = 1;
  setInterval(function() {
      let next = current + 1;
      if (next > $(".slider > div").length) {
          next = 1;
      }
      $(".slider > div").eq(current - 1).fadeOut(1000);
      $(".slider > div").eq(next - 1).fadeIn(1000);
      current = next;
  }, 5000); 

//=====scroll====

 function animateOnScroll() {
  $(".main").each(function(index) {
      let elementTop = $(this).offset().top;
      let viewportHeight = $(window).height();
      let scrollTop = $(window).scrollTop();
      if (elementTop < scrollTop + viewportHeight) {
          if (index === 1) {
              $(this).addClass("section-visible-second");
          } else {
              $(this).addClass("section-visible");
          }
      }
  });
}

// Đặt lớp ẩn
$(".main").each(function(index) {
  if (index === 1) {
      $(this).addClass("section-hidden-second");
  } else {
      $(this).addClass("section-hidden");
  }
});


animateOnScroll();
$(window).on("scroll", function() {
  animateOnScroll();
});

//======= fixed menu
const menu = $(".menu");
const initialOffsetTop = menu.offset().top; 


function checkFixedMenu() {
  if ($(window).scrollTop() > initialOffsetTop) {
      menu.addClass("menu-fixed");
  } else {
      menu.removeClass("menu-fixed");
  }
}


$(window).on("scroll", checkFixedMenu);
checkFixedMenu();

//==========go to top
window.onscroll = function() { scrollFunction(); };

      function scrollFunction() {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
              document.getElementById("goToTopButton").style.display = "block";
          } else {
              document.getElementById("goToTopButton").style.display = "none";
          }
      }

      document.getElementById("goToTopButton").addEventListener("click", function() {
          window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    
});
