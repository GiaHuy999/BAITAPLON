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
};
