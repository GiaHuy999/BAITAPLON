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

//  Giỏ hàng
    const cartIcons = document.querySelectorAll('.fa-cart-plus');
    cartIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            
            const item = this.closest('.slide-item');
            const itemId = item.dataset.id;
            const itemName = item.querySelector('.name').textContent;
            const itemPrice = item.querySelector('.price').textContent;
            const itemSrc = item.querySelector('img').getAttribute('src').replace(/^\//, '');

           
            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            
            const existingItemIndex = cart.findIndex(cartItem => cartItem.id === itemId);
            if (existingItemIndex !== -1) {

                cart[existingItemIndex].quantity = (cart[existingItemIndex].quantity || 1) + 1;
                localStorage.setItem('cart', JSON.stringify(cart));
                alert('Đã thêm vào giỏ hàng');
                return;
            }
//------------

            cart.push({ id: itemId,src:itemSrc, name: itemName, price: itemPrice, quantity: 1 });
            localStorage.setItem('cart', JSON.stringify(cart));

            alert('Đã thêm vào giỏ hàng');
        });
    });

    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('increase-quantity') || event.target.classList.contains('decrease-quantity')) {
            const cartItem = event.target.closest('.cart-item');
            const itemId = cartItem.dataset.id;
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            const itemIndex = cart.findIndex(cartItem => cartItem.id === itemId);

            if (itemIndex !== -1) {
                if (event.target.classList.contains('increase-quantity')) {
                    cart[itemIndex].quantity = (cart[itemIndex].quantity || 1) + 1;
                } else if (event.target.classList.contains('decrease-quantity')) {
                    cart[itemIndex].quantity = Math.max((cart[itemIndex].quantity || 1) - 1, 1);
                }

                localStorage.setItem('cart', JSON.stringify(cart));
                updateCartDisplay();
            }
        }
    });

    function updateCartDisplay() {
        const cartItems = document.querySelectorAll('.cart-item');
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        cartItems.forEach(item => {
            const itemId = item.dataset.id;
            const cartItem = cart.find(cartItem => cartItem.id === itemId);
            if (cartItem) {
                item.querySelector('.quantity').textContent = cartItem.quantity;
            }
        });
    }

    updateCartDisplay();
};
