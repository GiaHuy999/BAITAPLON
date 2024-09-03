
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
  //======================================================




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

}


// document.addEventListener('DOMContentLoaded', function() {
//   const locationElement = document.getElementById('location');
//   const tableQuantityElement = document.getElementById('table-quantity');
//   const appetizersElement = document.getElementById('appetizers');
//   const mainCoursesElement = document.getElementById('main-courses');
//   const dessertsElement = document.getElementById('desserts');
//   const winesElement = document.getElementById('wines');
//   const photoConceptElement = document.getElementById('photo-concept');
//   const totalAmountElement = document.getElementById('total-amount');

//   let cart = {
//     location: null,
//     tables: {
//       quantity: 0,
//       appetizers: null,
//       mainCourses: null,
//       desserts: null,
//       wines: null
//     },
//     photoStudio: {
//       concept: null
//     },
//     totalAmount: 0
//   };

//   function updateCartDisplay() {
//     if (cart.location) {
//       locationElement.innerHTML = `<p>${cart.location}</p>`;
//     } else {
//       locationElement.innerHTML = `<p>Chưa chọn địa điểm.</p><a href="abc.html" class="button">Chọn địa điểm</a>`;
//     }

//     tableQuantityElement.textContent = cart.tables.quantity;
//     appetizersElement.textContent = cart.tables.appetizers || 'Chưa chọn';
//     mainCoursesElement.textContent = cart.tables.mainCourses || 'Chưa chọn';
//     dessertsElement.textContent = cart.tables.desserts || 'Chưa chọn';
//     winesElement.textContent = cart.tables.wines || 'Chưa chọn';
//     photoConceptElement.textContent = cart.photoStudio.concept || 'Chưa chọn';

//     // Giả lập tính toán tổng số tiền
//     cart.totalAmount = cart.tables.quantity * 100; // Ví dụ: 100 là giá mỗi bàn tiệc
//     totalAmountElement.textContent = `$${cart.totalAmount.toFixed(2)}`;
//   }

//   // Các hàm xử lý chỉnh sửa và cập nhật thông tin
//   document.getElementById('edit-tables').addEventListener('click', function() {
//     // Mở cửa sổ chỉnh sửa bàn tiệc (có thể là một modal)
//     alert('Chức năng chỉnh sửa bàn tiệc chưa được triển khai.');
//   });

//   document.getElementById('edit-photo-studio').addEventListener('click', function() {
//     // Mở cửa sổ chỉnh sửa studio chụp ảnh (có thể là một modal)
//     alert('Chức năng chỉnh sửa studio chụp ảnh chưa được triển khai.');
//   });

//   document.getElementById('checkout-button').addEventListener('click', function() {
//     alert('Chức năng thanh toán chưa được triển khai.');
//   });

//   updateCartDisplay();
// });
// let list = document.querySelectorAll('.center .list .item');
// list.forEach(item => {
//   item.addEventListener('click', function(event) {
//     if (event.target.classList.contains('add')) {
//       var itemNew = item.cloneNode(true);
//       let checkIsset = false;

//       let listCart = document.querySelectorAll('.cart .listCart .item');
//       listCart.forEach(cart => {
//         if (cart.getAttribute('data-key') == itemNew.getAttribute('data-key')) {
//           checkIsset = true;
//           cart.classList.add('danger');
//           setTimeout(function() {
//             cart.classList.remove('danger');
//           }, 1000)
//         }
//       })
//       if (checkIsset == false) {
//         document.querySelector('.cart .listCart').appendChild(itemNew);
//       }
//     }
//   })
// })

function Remove(key) {
  let listCart = document.querySelectorAll('.cart .listCart .item');
  listCart.forEach(item => {
    if (item.getAttribute('data-key') == key) {
      item.remove();
      return;
    }
  })
}
