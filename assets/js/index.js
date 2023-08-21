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
  