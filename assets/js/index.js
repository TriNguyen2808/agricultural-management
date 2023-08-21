// $(document).ready(function() {
//     $(".scroll-button.left").click(function() {
//       $(".content").css("transform", "translateX(-50%)");
//     });
  
//     $(".scroll-button.right").click(function() {
//       $(".content").css("transform", "translateX(0)");
//     });
//   });
  // var btnSearch = document.querySelector('.search-button')

  // btnSearch.addEventListener('click', function(){
  //   this.parentElement.classList.toggle('open')
  //   this.previousElementSibling.focus();
  // })
  // const carousel = document.querySelector(".carousel"),
  // firstImg = carousel.querySelectorAll("img")[0],
  // arrowIcons = document.querySelectorAll(".wrapper i");
  
  // let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;
  
  // const showHideIcons = () => {
  //     // showing and hiding prev/next icon according to carousel scroll left value
  //     let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
  //     arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
  //     arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
  // }
  
  // arrowIcons.forEach(icon => {
  //     icon.addEventListener("click", () => {
  //         let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
  //         // if clicked icon is left, reduce width value from the carousel scroll left else add to it
  //         carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
  //         setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
  //     });
  // });
  
  // const autoSlide = () => {
  //     // if there is no image left to scroll then return from here
  //     if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;
  
  //     positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
  //     let firstImgWidth = firstImg.clientWidth + 14;
  //     // getting difference value that needs to add or reduce from carousel left to take middle img center
  //     let valDifference = firstImgWidth - positionDiff;
  
  //     if(carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
  //         return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
  //     }
  //     // if user is scrolling to the left
  //     carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
  // }
  
  // const dragStart = (e) => {
  //     // updatating global variables value on mouse down event
  //     isDragStart = true;
  //     prevPageX = e.pageX || e.touches[0].pageX;
  //     prevScrollLeft = carousel.scrollLeft;
  // }
  
  // const dragging = (e) => {
  //     // scrolling images/carousel to left according to mouse pointer
  //     if(!isDragStart) return;
  //     e.preventDefault();
  //     isDragging = true;
  //     carousel.classList.add("dragging");
  //     positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
  //     carousel.scrollLeft = prevScrollLeft - positionDiff;
  //     showHideIcons();
  // }
  
  // const dragStop = () => {
  //     isDragStart = false;
  //     carousel.classList.remove("dragging");
  
  //     if(!isDragging) return;
  //     isDragging = false;
  //     autoSlide();
  // }
  
  // carousel.addEventListener("mousedown", dragStart);
  // carousel.addEventListener("touchstart", dragStart);
  
  // document.addEventListener("mousemove", dragging);
  // carousel.addEventListener("touchmove", dragging);
  
  // document.addEventListener("mouseup", dragStop);
  // carousel.addEventListener("touchend", dragStop);
    // Nông nghiệp
    const rightbtn = document.querySelector('#right')
    const leftbtn = document.querySelector('#left')
    const imgNuber = document.querySelectorAll('.vegitems')
    let index = 0
  
    rightbtn.addEventListener("click", function(){
      index = index + 1
      if (index > imgNuber.length-1){
            index = 0
      } 
      document.querySelector(".vegSlider").style.right = index * 100 + "%"
    })
    leftbtn.addEventListener("click", function(){
      index = index -1 
      if (index < 0) {
        index = imgNuber.length-1
      }
      document.querySelector(".vegSlider").style.right= index * 100 + "%"
    })
           // BACK TO TOP
           var showBackTop = 300;
           $(document).ready(function() {
               $(window).scroll(function() {
                   if($(this).scrollTop() >= showBackTop){
                       $('.backtop').fadeIn();
                   } else {
                       $('.backtop').fadeOut();
                   }
               });
               $('.backtop').click(function(){
                   $('html, body').animate({scrollTop: 0 }, 800);
               });
           });
      
  
    // Lâm nghiệp 
    const rightbtntwo = document.querySelector('#righttwo')
    const leftbtntwo = document.querySelector('#lefttwo')
    const imgNubertwo = document.querySelectorAll('.vegitemstwo')
    let indextwo = 0
  
    rightbtntwo.addEventListener("click", function(){
      indextwo = indextwo + 1
      if (indextwo > imgNubertwo.length-1){
            indextwo = 0
      } 
      document.querySelector(".vegSlidertwo").style.right = indextwo * 100 + "%"
    })
    leftbtntwo.addEventListener("click", function(){
      indextwo = indextwo -1 
      if (indextwo < 0) {
        indextwo = imgNubertwo.length-1
      }
      document.querySelector(".vegSlidertwo").style.right= indextwo * 100 + "%"
    })
  
    // Thủy sản
    const rightbtnthree = document.querySelector('#rightthree')
    const leftbtnthree = document.querySelector('#leftthree')
    const imgNuberthree = document.querySelectorAll('.vegitemsthree')
    let indexthree = 0
  
    rightbtnthree.addEventListener("click", function(){
      indexthree = indexthree + 1
      if (indexthree > imgNuberthree.length-1){
            indexthree = 0
      } 
      document.querySelector(".vegSliderthree").style.right = indexthree * 100 + "%"
    })
    leftbtnthree.addEventListener("click", function(){
      indexthree = indexthree -1 
      if (indexthree < 0) {
        indexthree = imgNuberthree.length-1
      }
      document.querySelector(".vegSliderthree").style.right= indexthree * 100 + "%"
    })
  