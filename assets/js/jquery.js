$(document).ready(function() {
    // Hiển thị nội dung tab đầu tiên và ẩn các nội dung còn lại
    $(".tab-content > div:not(:first-child)").hide();

 
    $(".tab > li > a").click(function(event) {
        event.preventDefault();
        $(".tab > li").removeClass("active");
        $(this).parent().addClass("active");

        let h = $(this).attr("href");
        $(".tab-content > div").hide();
        $(h).show();
    });

  
    $(".slider").height($(".slider img").height() + 5);

    
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


   // Thêm hiệu ứng di chuyển khi cuộn đến
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

// Đặt lớp ẩn cho các phần tử .main khi trang tải
$(".main").each(function(index) {
    if (index === 1) {
        $(this).addClass("section-hidden-second");
    } else {
        $(this).addClass("section-hidden");
    }
});

// Gọi hàm animateOnScroll khi trang tải và khi cuộn
animateOnScroll();
$(window).on("scroll", function() {
    animateOnScroll();
});

// ===
// Xác định phần tử menu
const menu = $(".menu");
const initialOffsetTop = menu.offset().top; // Vị trí ban đầu của menu

// Hàm kiểm tra và áp dụng lớp fixed
function checkFixedMenu() {
    if ($(window).scrollTop() > initialOffsetTop) {
        menu.addClass("menu-fixed");
    } else {
        menu.removeClass("menu-fixed");
    }
}

// Gọi hàm khi cuộn và khi trang tải
$(window).on("scroll", checkFixedMenu);
checkFixedMenu(); // Kiểm tra ngay khi trang tải

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
