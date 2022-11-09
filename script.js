// // $(document).ready(function(){
//     $(" .next-btn").click(function(e){
//         e.preventDefault()
//     //   console.log("Butona basildi")
//     $("img").attr("src","/svgs/img3.jpg")
//     });
//     $(".previous-btn").click(function(e){
//         e.preventDefault()
//         $("img").attr("src","/svgs/img7.jpg")
//     })
//   });

// const nextBtn = document.querySelector(".next-btn");
// var img = document.querySelector("img")
// var imgAttr= img.getAttribute("src")
// const prevBtn = document.querySelector(".previous-btn");
// function Kosul (){
   
//      console.log(imgAttr)
//     setInterval(function(){
//        console.log("calisti")
//   if(imgAttr ==="/svgs/img2.jpg"){
//    imgAttr="/svgs/img4.jpg"
//   }else{
//     imgAttr ==="/svgs/img7.jpg"
//   }
  
//     },3000)

    
//   }

/*gece modu*/ (function(window, document, undefined) {
    "use strict";
    var nightMode = document.cookie.indexOf("nightMode=true") !== -1;
    var lightMode = document.cookie.indexOf("nightMode=false") !== -1;
    if (nightMode) {
      document.documentElement.className += " night-mode";
    }
    const userPrefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const userPrefersLight =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches;
    //Önceden lihtmode seçilmemiş ise
    if (!lightMode) {
      if (userPrefersDark) {
        //Cihaz koyu mod kullanıyor ise
        document.documentElement.className += " night-mode";
      }
    }
  })(window, document);
  (function(window, document, undefined) {
    "use strict";
    var nav = document.querySelector(".theme-mode");
    //HTML .theme-mode class butonu ekle
    nav.innerHTML +=
      '<span id="night-mode"><a role="button" title="nightMode" href="javascript:void(0);">🌓</a></span>';
    var nightMode = document.querySelector("#night-mode");
    nightMode.addEventListener(
      "click",
      function(event) {
        event.preventDefault();
        document.documentElement.classList.toggle("night-mode");
        if (document.documentElement.classList.contains("night-mode")) {
          //nightMode cookie etkinleştir
          return (document.cookie =
            "nightMode=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/; secure;");
        }
        //nightMode cookie etkisizleştir
        document.cookie =
          "nightMode=false; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/; secure;";
      },
      false
    );
  })(window, document);
  /*gece modu*/





