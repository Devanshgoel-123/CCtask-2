setInterval(function(){
           document.getElementsByClassName("side-tag")[1].click();
},5000);



const hamburger = document.querySelector(".hamburger-menu");
  hamburger.addEventListener("click",() => {
    
    hamburger.classList.toggle("active");
    
  })
  
  $(document).ready(function(){
    $(".hamburger-menu").click(function(){
      $(".hidden-menu").slideToggle(400);
      $(".nav-link").toggleClass("opacity");
      $(".mode-button").toggleClass("opacity",0);
      $(".top").toggleClass("color-switch");
      $(".top-icon").toggleClass("color-switch");
      $(".hidden-menu").toggleClass("back-switch1")
      $(".hidden-menu2").slideToggle(200);
      $(".hidden-menu2").toggleClass("back-switch1")
    });
  });

$

$(document).ready(function(){
    $(".mode-button").click(function(){
       document.body.classList.toggle("dark-mode");
    })
})

function flip1(){
    document.getElementsByClassName("card")[0].getElementsByClassName("one")[0].innerHTML="Foxy Diva Jennifer Lopez wasn't Baking my quiche";
}
function unFlip1(){
    document.getElementsByClassName("card")[0].getElementsByClassName("one")[0].innerHTML="Aa"
}
function flip2(){
    document.getElementsByClassName("card")[3].getElementsByClassName("two")[0].innerHTML="Jim quickly realized that the beautiful gowns are expensive";
}
function unFlip2(){
    document.getElementsByClassName("card")[3].getElementsByClassName("two")[0].innerHTML="Aa"
}
function flip3(){
    document.getElementsByClassName("card")[6].getElementsByClassName("three")[0].innerHTML="Six javelins thrown by the quick savages whizzed forty paces beyond the mark.";
}
function unFlip3(){
    document.getElementsByClassName("card")[6].getElementsByClassName("three")[0].innerHTML="Aa"
}
function flip4(){
    document.getElementsByClassName("card")[9].getElementsByClassName("four")[0].innerHTML="Few black taxis drive up major roads on quiet hazy nights.";
}
function unFlip4(){
    document.getElementsByClassName("card")[9].getElementsByClassName("four")[0].innerHTML="Aa"
}
function flip5(){
    document.getElementsByClassName("card")[1].getElementsByClassName("five")[0].innerHTML="Twelve ziggurats quickly jumped a finch box";
}
function unFlip5(){
    document.getElementsByClassName("card")[1].getElementsByClassName("five")[0].innerHTML="Aa"
}
function flip7(){
    document.getElementsByClassName("card")[7].getElementsByClassName("seven")[0].innerHTML="My girl wove six dozens plaid jackets before she quit.";
}
function unFlip7(){
    document.getElementsByClassName("card")[7].getElementsByClassName("seven")[0].innerHTML="Aa"
}
function flip8(){
    document.getElementsByClassName("card")[10].getElementsByClassName("eight")[0].innerHTML="The quick brown fox jumps over the lazy dog.";
}
function unFlip8(){
    document.getElementsByClassName("card")[10].getElementsByClassName("eight")[0].innerHTML="Aa"
}
function flip9(){
    document.getElementsByClassName("card")[2].getElementsByClassName("nine")[0].innerHTML="Jim quickly realized that the beautiful gowns are expensive";
}
function unFlip9(){
    document.getElementsByClassName("card")[2].getElementsByClassName("nine")[0].innerHTML="Aa"
}
function flip10(){
    document.getElementsByClassName("card")[5].getElementsByClassName("ten")[0].innerHTML="Bored?Craving a pub quick fix?Why,just come to Royal Oak!";
}
function unFlip10(){
    document.getElementsByClassName("card")[5].getElementsByClassName("ten")[0].innerHTML="Aa"
}
function flip11(){
    document.getElementsByClassName("card")[8].getElementsByClassName("eleven")[0].innerHTML="The explorer was frozen in his big kayak just after making queer discoveries";
}
function unFlip11(){
    document.getElementsByClassName("card")[8].getElementsByClassName("eleven")[0].innerHTML="Aa"
}
function flip12(){
    document.getElementsByClassName("card")[11].getElementsByClassName("twelve")[0].innerHTML="The July sun caused a fragment of black pine wax to ooze on the velvet quilt";
}
function unFlip12(){
    document.getElementsByClassName("card")[11].getElementsByClassName("twelve")[0].innerHTML="Aa"
}

$( window ).on('scroll', function(){

    let scrollTop = $(this).scrollTop();
    
    if(scrollTop>1500 && scrollTop<3000){
        $("#two" ).css({
            transform: 'translateY('+  ( -.1 * scrollTop ) +'px)',
          });
          $("#three" ).css({
            transform: 'translateY('+  ( -.05 * scrollTop ) +'px)',
          });
          $("#four" ).css({
            transform: 'translateY('+  ( -.07 * scrollTop ) +'px)',
          });
    }
  });

window.addEventListener("scroll",function (){
    let image0=$(".image-scroll")[0];
    let image1=$(".image-scroll")[1];
    let image2=$(".image-scroll")[2];
    let image3=$(".image-scroll")[3];
    let image4=$(".image-scroll")[4];
    let image5=$(".image-scroll")[5];
    
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
   
    if(scrollTop>0){
    image0.style.opacity=1-scrollTop/500;
    image1.style.opacity=1-scrollTop/500;
    image2.style.opacity=1-scrollTop/500;
    image3.style.opacity=1-scrollTop/500;
    image4.style.opacity=1-scrollTop/500;
    image5.style.opacity=1-scrollTop/500;
}
if(scrollTop<600 || scrollTop===0){
    $(".mode-button").attr("display","none");
}
    if(scrollTop>100 && scrollTop<600){
        $(".navbar").addClass("scroll");
        $(".navbar").addClass("nav-col");
        
    }else{
        $(".navbar").removeClass("scroll");
        
    }
    if(scrollTop<100){
        $(".navbar").removeClass("nav-col");
    }
    if(scrollTop>=600){
        $(".top").html("PP🅐F");
    }else if(scrollTop<600){
        $(".top").html("Pangram Pangram🅐Foundry");
    }
});

$(".list-item").hover(function(){
    if(this.innerHTML==="Editorial Old"){
        $("#animated-text").css("font-family","EditorialOld-Light");
    }else if(this.innerHTML==="Acma"){
        $("#animated-text").css("font-family","preview_acma-semibold");
    }else if(this.innerHTML==="Mori"){
        $("#animated-text").css("font-family","preview_mori-Regular");
    }else if(this.innerHTML==="Right Gothic"){
        $("#animated-text").css("font-family","preview_pprightgothic-medium");
    }else if(this.innerHTML==="Neue Montreal"){
        $("#animated-text").css("font-family","preview_ppneuemontreal-book");
    }else if(this.innerHTML==="Pangram Sans"){
        $("#animated-text").css("font-family","preview_pppangramsans-compactmedium");
    }else if(this.innerHTML==="Pangram sans Rounded"){
        $("#animated-text").css("font-family","preview_pppangramsansrounded-slimmedium");
    }else if(this.innerHTML==="Charlevoix Pro"){
        $("#animated-text").css("font-family","preview_ppcharlevoix-light");
    }else if(this.innerHTML==="Stellar Sans"){
        $("#animated-text").css("font-family","preview_ppstellar-light");
    }else if(this.innerHTML==="Fuji Sans"){
        $("#animated-text").css("font-family","preview_ppfuji-medium");
    }else if(this.innerHTML==="Casa Stencil"){
        $("#animated-text").css("font-family","preview_ppcasa-regular");
    }else if(this.innerHTML==="Right Didone"){
        $("#animated-text").css("font-family","preview_pprightdidone-medium");
    }else if(this.innerHTML==="Writer"){
        $("#animated-text").css("font-family","preview_ppwriter-thin");
    }else if(this.innerHTML==="Right Sans"){
        $("#animated-text").css("font-family","preview_pprightsans-widemedium");
    }else if(this.innerHTML==="Eiko"){
        $("#animated-text").css("font-family","preview_ppeiko-light");
    }else if(this.innerHTML==="Bitmap Fonts"){
        $("#animated-text").css("font-family","preview_ppmondwest-bold");
    }else if(this.innerHTML==="Telegraf"){
        $("#animated-text").css("font-family","preview_pptelegraf-light");
    }else if(this.innerHTML==="Pier Sans"){
        $("#animated-text").css("font-family","preview_pppiersans-regular");
    }else if(this.innerHTML==="Neue World"){
        $("#animated-text").css("font-family","preview_ppneueworld-semicondensedlight");
    }else if(this.innerHTML==="Right Grotesk"){
        $("#animated-text").css("font-family","preview_pprightgrotesk-compactbold");
    }else if(this.innerHTML==="Hatton"){
        $("#animated-text").css("font-family","preview_pphatton-regular");
    }else if(this.innerHTML==="Right Serif"){
        $("#animated-text").css("font-family","preview_pprightserif-medium");
    }else if(this.innerHTML==="Fragment"){
        $("#animated-text").css("font-family","preview_ppfragment-glareregular");
    }else if(this.innerHTML==="Formula"){
           $("#animated-text").css("font-family","preview_ppformula-narrowregular");
    }else if(this.innerHTML==="Editorial New"){
           $("#animated-text").css("font-family","preview_ppeditorialnew-light");
    }else if(this.innerHTML==="Object Sans"){
           $("#animated-text").css("font-family","preview_ppobjectsans-light");
    }else if(this.innerHTML==="Cirka"){
           $("#animated-text").css("font-family","preview_ppcirka-light");
    }else if(this.innerHTML==="Migra"){
           $("#animated-text").css("font-family","preview_ppmigra-medium");
    }else if(this.innerHTML==="Monument Extended"){
           $("#animated-text").css("font-family","preview_ppmonumentextended-regular");
    }else if(this.innerHTML==="Agrandir"){
           $("#animated-text").css("font-family","preview_ppagrandir-grandmedium");
    }else if(this.innerHTML==="Woodland"){
          $("#animated-text").css("font-family","preview_ppwoodland-light");
    }else if(this.innerHTML==="Right Slab"){
           $("#animated-text").css("font-family","preview_pprightslab-medium");
    }else if(this.innerHTML==="Neue Machina"){
           $("#animated-text").css("font-family","preview_ppneuemachina-inktrapregular");
    }else if(this.innerHTML==="Rader"){
           $("#animated-text").css("font-family","preview_pprader-light");
    }else if(this.innerHTML==="Franktion"){
           $("#animated-text").css("font-family","preview_ppsupplysans-light");
    }else if(this.innerHTML==="Supply"){
           $("#animated-text").css("font-family","preview_ppsupplysans-light");
    }else if(this.innerHTML==="Radio grotesk"){
           $("#animated-text").css("font-family","preview_ppradiogrotesk-regular");
    }else if(this.innerHTML==="Gatwick"){
           $("#animated-text").css("font-family","preview_ppgatwick-medium");
    }else if(this.innerHTML==="Grafier"){
           $("#animated-text").css("font-family","preview_ppgrafier-bolddisplay");
    }else if(this.innerHTML==="Gosha Sans"){
           $("#animated-text").css("font-family","preview_ppgoshasans-regular");
    }else if(this.innerHTML==="Chronos Serif"){
        $("#animated-text").css("font-family","preview_ppchronosserif-filled");
    }
})