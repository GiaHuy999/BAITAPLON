
window.onload = function() {

  //========================LOADING============================
  const loadingScreen = document.getElementById('loading-screen');
  loadingScreen.style.display = 'flex';

  setTimeout(function() {
    loadingScreen.style.display = 'none';
  }, 20);

  //========================ACCOUNT=============================


  //----------------


  const loginButton = document.getElementById('nut-dang-nhap');
  loginButton.addEventListener('click', function() {
    container.classList.toggle('hien-thi');
  });
  // closeLoginTab.addEventListener("click", function() {
  //   loginTab.classList.remove("hien-thi");
  //   setTimeout(() => {
  //     loginTab.style.display = "none";
  //   }, 450);
  // });

  const signUpButton = document.getElementById('signUp');
  const signInButton = document.getElementById('signIn');
  const container = document.getElementById('container');

  signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
  });

  signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
  });


  //------------------signin-----------------------

  const inputList = document.querySelectorAll('.sign-in-container input');
  const usernameInput = inputList[0];
  const passwordInput = inputList[1];
  const btnSubmit = document.querySelector('.sign-in-container button');

  // //------------------signup-----------------------

  const inputSignupList = document.querySelectorAll('.sign-up-container input');
  const usernameSignupInput = inputSignupList[0];
  const passwordSignupInput = inputSignupList[2];
  const btnSignupSubmit = document.querySelector('.sign-up-container button');

  const defaultUsers = [
    {
      username: 'admin',
      password: 'admin'
    },
  ];


  const handleFirstLoad = () => {
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify(defaultUsers));
    }
  }

  // Gọi hàm kiểm tra khi trang load lần đầu
  handleFirstLoad();

  // //----------------xu li dang ki-----------------------
  btnSignupSubmit.onclick = (event) => {

    event.preventDefault();

    const usernameValue = usernameSignupInput.value;
    const passwordValue = passwordSignupInput.value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((user) => user.username === usernameValue);

    if (user) {
      alert('Tài khoản đã tồn tại!');
      return;
    }

    users.push({
      username: usernameValue,
      password: passwordValue,
    });

    localStorage.setItem('users', JSON.stringify(users));

    alert('Tạo tài khoản thành công!');

    usernameValue.value = '';
    passwordValue.value = '';
  }

  // //-----------------xu li dang nhap-----------------------
  btnSubmit.onclick = (event) => {

    inputSignupList.values = '';
    inputList.values = '';

    event.preventDefault();

    const usernameValue = usernameInput.value;
    const passwordValue = passwordInput.value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((user) => user.username === usernameValue);

    if (!user) {
      alert('Không tìm thấy tài khoản!');
      return;
    }

    if (user.password !== passwordValue) {
      alert('Sai mật khẩu!');
      return;
    }
    //--------------after login-----------------------
    window.location.href = 'menu.html';
  }
  //=====================SLIDE============================
  const prevButton = document.querySelector('.fa-angle-left');
  const nextButton = document.querySelector('.fa-angle-right');
  const carouselInner = document.querySelector('.carousel');
  const items = document.querySelectorAll('.carousel-item');
  const itemWidth = items[0].clientWidth;
  let index = 0;

  //-----------------xoa hover-----------------------
  function updateCarousel() {
    carouselInner.style.transform = `translateX(${-itemWidth * index}px)`;
    if (index === 0) {
      prevButton.classList.remove('dieu-huong');
    } else {
      prevButton.classList.add('dieu-huong');
    }
    if (index >= items.length - 3) {
      nextButton.classList.remove('dieu-huong');
    } else {
      nextButton.classList.add('dieu-huong');
    }
  }
  //--------------------xu li slide------------------------
  updateCarousel();

  prevButton.addEventListener('click', function() {
    if (index > 0) {
      index -= 1;
      updateCarousel();
    }
  });

  nextButton.addEventListener('click', function() {
    if (index < items.length - 3) {
      index += 1;
      updateCarousel();
    }
  });
  //--------------------------------------------------------
  document.getElementById('submit-feedback').addEventListener('click', function() {

    const name = document.getElementById('feedback-name').value;
    const email = document.getElementById('feedback-email').value;
    const message = document.getElementById('feedback-message').value;

    
    if (name && email && message) {
      // Tạo 
      const newFeedback = document.createElement('div');
      newFeedback.classList.add('feedback-item');
      newFeedback.innerHTML = `<h4>${name}</h4><p>${message}</p>`;

      // Thêm trên cùng
      const feedbackContainer = document.getElementById('view-feedback');
      feedbackContainer.insertBefore(newFeedback, feedbackContainer.firstChild);

      // Xóa 
      document.getElementById('feedback-name').value = '';
      document.getElementById('feedback-email').value = '';
      document.getElementById('feedback-message').value = '';
    } else {
      alert('Vui lòng điền đầy đủ thông tin.');
    }
  });


  document.getElementById("scrollToTuVan").addEventListener("click", function() {
    const targetElement = document.getElementById("tu-van");
    const offset = 50;
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: targetPosition - offset,
      behavior: "smooth"
    });
  });

  window.addEventListener("scroll", function() {
      const targetElement = document.getElementById("special-element");
      const imageElement = document.getElementById("special-image");

      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const scrollPosition = window.pageYOffset + window.innerHeight;
      if (scrollPosition > targetPosition ) 
          imageElement.style.display = "block";
      else 
           imageElement.style.display = "none";
  });
}

