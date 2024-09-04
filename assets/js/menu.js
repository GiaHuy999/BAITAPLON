window.onload = function() {
    const pages = document.querySelectorAll('.slide-page');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const pageBtns = document.querySelectorAll('.page-btn');
    let currentPage = 0;

    function showPage(index) {
        pages.forEach((page, i) => {
            page.style.transform = `translateX(-${index * 100}%)`;
        });
        currentPage = index;
    }

    prevBtn.addEventListener('click', () => {
        if (currentPage > 0) {
            showPage(currentPage - 1);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentPage < (pages.length) / 3 - 1) {
            showPage(currentPage + 1);
        }
    });

    pageBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const pageIndex = parseInt(btn.getAttribute('data-page'), 10) - 1;
            showPage(pageIndex);
        });
    });
    //----------------------------------------------------------
    const slides = document.querySelectorAll('.slide-inner');
    const menus = document.querySelectorAll('ul.menu > li');



    slides[0].classList.add('active');
    for (let menu of menus) {
        menu.addEventListener('click', function() {
            for (let slide of slides) {
                slide.classList.remove('active');
            }
            let men = document.getElementById(`${menu.id}-inner`);
            men.classList.add('active');
            showPage(0);

        });
    }








    // Xử lý sự kiện nhấp chuột vào biểu tượng giỏ hàng
    const cartIcons = document.querySelectorAll('.fa-cart-plus');
    cartIcons.forEach(icon => {
        icon.addEventListener('click', function () {
            // Lấy thông tin mặt hàng từ phần tử chứa nó
            const item = this.closest('.slide-item');
            const itemId = item.dataset.id;
            const itemName = item.querySelector('.name').textContent;
            const itemPrice = item.querySelector('.price').textContent;

            // Lấy giỏ hàng từ LocalStorage, nếu chưa có thì tạo mới
            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            // Kiểm tra xem mặt hàng đã tồn tại trong giỏ hàng chưa
            const existingItemIndex = cart.findIndex(cartItem => cartItem.id === itemId);
            if (existingItemIndex !== -1) {
                // Nếu có rồi thì chỉ cập nhật số lượng hoặc thực hiện các hành động khác nếu cần
                alert('Item already in cart!');
                return;
            }

            // Thêm mặt hàng vào giỏ hàng
            cart.push({ id: itemId, name: itemName, price: itemPrice });
            localStorage.setItem('cart', JSON.stringify(cart));

            alert('Item added to cart!');
        });
    });
};
