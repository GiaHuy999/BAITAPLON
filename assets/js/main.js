
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
  loginButton.addEventListener('click', function()  {
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

  // Hàm kiểm tra lần đầu load trang
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
      alert('User already exists');
      return;
    }

    users.push({
      username: usernameValue,
      password: passwordValue,
    });

    localStorage.setItem('users', JSON.stringify(users));

    alert('User created successfully');

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
      alert('User not found');
      return;
    }

    if (user.password !== passwordValue) {
      alert('Invalid password');
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
  
  prevButton.addEventListener('click', function () {
    if (index > 0) {
        index -= 1;
        updateCarousel();
    }
  });

  nextButton.addEventListener('click', function () {
    if (index < items.length - 3) {
        index += 1;
        updateCarousel();
    }
  });
  //--------------------------------------------------------

}