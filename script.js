// 🎵 پخش موسیقی

function playMusic(){

    let music = document.getElementById("music");

    music.play();

}



// 🎁 باز کردن هدیه

function openGift(){

    let gift = document.getElementById("gift");

    gift.classList.remove("hidden");

    fireworks();

}



// 🎈 ساخت بادکنک

let colors = [

"#ff4d6d",
"#ffd166",
"#06d6a0",
"#118ab2",
"#c77dff",
"#ff99c8"

];


function createBalloon(){

    let balloon=document.createElement("div");

    balloon.className="balloon";


    balloon.style.left =
    Math.random()*100+"vw";


    balloon.style.background =
    colors[
    Math.floor(Math.random()*colors.length)
    ];


    balloon.style.animationDuration =
    (6+Math.random()*6)+"s";


    document.body.appendChild(balloon);



    setTimeout(()=>{

        balloon.remove();

    },12000);


}



setInterval(createBalloon,700);





// 💖 ساخت قلب


function createHeart(){

    let heart=document.createElement("div");

    heart.className="heart";


    heart.innerHTML="❤";


    heart.style.left =
    Math.random()*100+"vw";


    heart.style.animationDuration =
    (5+Math.random()*5)+"s";


    document.body.appendChild(heart);



    setTimeout(()=>{

        heart.remove();

    },10000);


}



setInterval(createHeart,500);






// 🎊 کاغذرنگی


function confetti(){


for(let i=0;i<120;i++){


let c=document.createElement("div");


c.style.position="fixed";

c.style.width="10px";

c.style.height="10px";


c.style.background=
colors[
Math.floor(Math.random()*colors.length)
];


c.style.left=
Math.random()*100+"vw";


c.style.top="-20px";


c.style.borderRadius="50%";


c.style.transition="5s";


document.body.appendChild(c);



setTimeout(()=>{


c.style.transform=
"translateY(110vh) rotate(720deg)";


},100);



setTimeout(()=>{

c.remove();

},6000);


}


}



setTimeout(confetti,1500);






// 🎆 آتش بازی


function fireworks(){


for(let i=0;i<80;i++){


let fire=document.createElement("div");


fire.style.position="fixed";


fire.style.width="6px";

fire.style.height="6px";


fire.style.background=
colors[
Math.floor(Math.random()*colors.length)
];


fire.style.left="50%";

fire.style.top="40%";


fire.style.borderRadius="50%";


document.body.appendChild(fire);



let x=
(Math.random()-0.5)*600;


let y=
(Math.random()-0.5)*600;



setTimeout(()=>{


fire.style.transform=
`translate(${x}px,${y}px)`;


fire.style.opacity="0";


fire.style.transition="1.5s";


},50);



setTimeout(()=>{

fire.remove();

},2000);



}


}



// اجرای اولیه آتش بازی

setTimeout(fireworks,2000);
function playMusic() {
    const music = document.getElementById("music");
    music.play();
}
