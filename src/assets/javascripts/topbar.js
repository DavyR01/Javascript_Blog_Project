const iconMobile = document.querySelector(".header-menu-icon");
const headerMenu = document.querySelector(".header-menu");
let isMenuOpen = false;
let mobileMenuDOM;

const closeMenu = () => {
   mobileMenuDOM.classList.remove("open");
};

const createMobileMenu = () => {
   mobileMenuDOM = document.createElement("div");
   mobileMenuDOM.classList.add("mobile-menu");
   mobileMenuDOM.addEventListener("click", event => {
      event.stopPropagation();
   });
   mobileMenuDOM.append(headerMenu.querySelector("ul").cloneNode(true));
   headerMenu.append(mobileMenuDOM);
};

const openMenu = () => {
   if (mobileMenuDOM) {
   } else {
      createMobileMenu();
   }
   mobileMenuDOM.classList.add("open");
};

const toggleMobileMenu = event => {
   if (isMenuOpen) {
      closeMenu();
   } else {
      openMenu();
   }
   isMenuOpen = !isMenuOpen;
};

iconMobile.addEventListener("click", event => {
     event.stopPropagation();
   // console.log('iconmobile');
   toggleMobileMenu();
});

window.addEventListener("click", () => {
   if (isMenuOpen) {
      toggleMobileMenu();
   }
});

window.addEventListener("resize", event => {
   if (window.innerWidth > 480 && isMenuOpen) {
      toggleMobileMenu();
   }
});