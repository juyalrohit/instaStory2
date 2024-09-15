let arr = [
    {
        your_story:"Instagram-Stories-feed-Front copy.png",
        name:"Your Story"
    },
   { dp:"https://th.bing.com/th?id=OIP.HaVZSiQ-8T8W24jG8b3NbQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    story:"https://cdna.artstation.com/p/assets/images/images/037/096/232/large/abdulbasit-img-20180203-130748.jpg?1619477801",
    name:"RoronoaZoro"
   },
   {dp:"https://empireadda.com/wp-content/uploads/2023/04/Narendra-modi-1.jpg",
    story:"https://i.ytimg.com/vi/GTl6O3ECZ5A/oardefault.jpg?sqp=-oaymwEkCJgDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLCAZTpukj7dj183ygJVx8FNwSSb5g",
    name:"NarendraModi"

   },
   {
    dp:"https://assets.telegraphindia.com/telegraph/2023/Oct/1697430512_rahul-gandhi.jpg",
    story:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/201811/rahul_modi_lookalike.jpeg?size=690:388",
    name:"RahulGandhi"
   }
   ,
   {
    dp:"https://th.bing.com/th/id/OIP.hcCxjmMPsjXJ7RdWDktZPgHaEK?w=285&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    story:"https://th.bing.com/th/id/OIP.Syvu69cp5tMkXkxmoqUL1QHaE7?rs=1&pid=ImgDetMain",
    name:"RobertPattinson"
   }
   ,
   {
    dp:"https://th.bing.com/th/id/OIP.BmoEWs2frW3hqMcFIohUEQHaFj?w=227&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    story:"https://th.bing.com/th/id/OIP.7l8jq0HmVjsnTstA8Jgb-wHaE8?w=255&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    name:"Joeroot"

   }

];
var clutter = ``;

arr.forEach(function(element,idx){
    if(idx==0){
        clutter += `<div class="stories ">
        <div class="your_story"> <img id="${idx}" src="${element.your_story}" alt="${element.name}">   </div>
         <h6  >${element.name}</h6>
     </div>`
  
    }
    else{
    clutter += `<div class="stories rohit">
                      <div class="dp"> <img id="${idx}" src="${element.dp}" alt="${element.name}">   </div>
                       <h6>${element.name}</h6>
                   </div>`
                
    }
});


let stories  = document.querySelector(".stories_container");
stories.innerHTML = clutter;

let container = document.querySelector("#container");

stories.addEventListener('click', function(event) {
    if (event.target.tagName === 'IMG' && event.target.id!='0') {  // Ensure that only images trigger the event
        const idx = event.target.id;
        document.querySelector("#full-screen").style.display = "block";
        document.querySelector("#full-screen").style.backgroundImage = `url(${arr[idx].story})`;
        container.style.display = "none";

        setTimeout(function() {
            document.querySelector("#full-screen").style.display = "none";
            container.style.display = "block";
        }, 2000);
    }
});

let total_likes = document.getElementById("total_likes");
let count = 0;

let photo = document.getElementById("levi");
let like = document.querySelector(".ri-heart-3-fill");
let heart  = document.querySelector("#like");

photo.addEventListener("dblclick",function(event){
    like.style.transform = "translate(-50%,-50%) scale(1)";
    like.style.opacity = "1";
    heart.className  = `ri-heart-3-fill`;
    heart.style.color = "red";
    total_likes.innerHTML = "";
   

    setTimeout(function(){
        like.style.transform = "translate(-50%,-50%) scale(1)";
        like.style.opacity = "0";
        
    },1000)
})

let flag = 0;
heart.addEventListener('click',function(){
    if(flag==0){
    heart.className  = `ri-heart-3-fill`;
    heart.style.color = "red";
    total_likes.innerHTML = "";
    flag = 1;
    }
    else{
        heart.className  = `ri-heart-3-line`;
        heart.style.color = "black";
        total_likes.innerHTML = "";
        flag = 0 ;
    }
})

var flag2 = false;

let more = document.querySelector(".more-btn");
let tag = document.querySelector(".hidden");
more.addEventListener('click',function(){
   if(flag2==false){
      tag.style.opacity="1";
      more.textContent=".";
      flag2=true;
   }
   else{
       tag.style.opacity="0";
       more.textContent = "more";
       flag2=false;

   }
});

let flag3 = true;

let book_mark = document.querySelector('.ri-bookmark-line');
book_mark.addEventListener('click',()=>{
    if(flag){
    book_mark.className = "ri-bookmark-fill";
    flag = false;
    }
    else{
        book_mark.className = "ri-bookmark-line";
        flag = true;
    }
    
});
  


