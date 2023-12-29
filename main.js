var swiper = new Swiper(".popular-content", {
    slidesPerView:1,
    spaceBetween:10,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
      280:{
        slidesPerView:1,
        spaceBetween:10,
      },
      320:{
        slidesPerView:2,
        spaceBetween:10,
      },
      540:{
        slidesPerView:2,
        spaceBetween:10,
      },
      750:{
        slidesPerView:1,
        spaceBetween:15,
      },
      900:{
        slidesPerView:4,
        spaceBetween:20,
      },
    },
  });
  var swiper = new Swiper(".popular-Genre", {
    slidesPerView:1,
    spaceBetween:10,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
      280:{
        slidesPerView:1,
        spaceBetween:10,
      },
      320:{
        slidesPerView:2,
        spaceBetween:10,
      },
      540:{
        slidesPerView:2,
        spaceBetween:10,
      },
      750:{
        slidesPerView:1,
        spaceBetween:15,
      },
      900:{
        slidesPerView:4,
        spaceBetween:20,
      },
    },
  });
//show video
let playButton=document.querySelector(".fa-play");
let video=document.querySelector(".video-container");
let myvideo=document.querySelector("#myvideo");
let closebtn=document.querySelector(".fa fa-times");

playButton.onclick= () => {
  video.classList.add("show-video");
  myvideo.play();
};
closebtn.onclick= () => {
  video.classList.remove("show-video");
  myvideo.pause();
};

 // for theme
 var elements = document.getElementsByClassName("fa-solid fa-sun");

 for (var i = 0; i < elements.length; i++) {
     elements[i].onclick = function () {
         document.body.classList.toggle("light-theme");
     }
 }
 // for front swiper
 document.getElementById('next').onclick = function(){
     let lists = document.querySelectorAll('.item');
     document.getElementById('slide').appendChild(lists[0]);
 }
 document.getElementById('prev').onclick = function(){
     let lists = document.querySelectorAll('.item');
     document.getElementById('slide').prepend(lists[lists.length - 1]);
 }


