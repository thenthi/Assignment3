/* SELECT ELEMENTS */
const bg1 = document.querySelector(".bg1");
const bg2 = document.querySelector(".bg2");
const bg3 = document.querySelector(".bg3");
const titles = document.querySelectorAll(".title");
const chapterTitles = document.querySelectorAll(".title1");
const chapter2Titles = document.querySelectorAll(".title2");
const leaves = document.querySelector(".leaf-container");
const navigation = document.querySelector(".navigation");
const cloud = document.querySelector(".move");
const plane = document.querySelector(".moveplane");
const chapter1 = document.querySelector("#chapter1");
const chapter2 = document.querySelector("#chapter2");
const chapter3 = document.querySelector("#chapter3");
const chapter3Titles = document.querySelectorAll(".title3");
const chapter4 = document.querySelector("#chapter4");
const chapter4Titles = document.querySelectorAll(".title4");
const chapter1btn = document.querySelector(".chapter1-btn");
const chapter2btn = document.querySelector(".chapter2-btn");
const chapter3btn = document.querySelector(".chapter3-btn");

window.addEventListener("scroll", () => {
const scrollY = window.scrollY;


/* INTRO SECTION
   Road zoom + title fade */

/* zoom road */
const scale = Math.min(2,1 + scrollY * 0.001);
bg1.style.transform = `scale(${scale})`;

/* title */
titles.forEach(title => {
    title.style.opacity = Math.max(0,1 - scrollY/400);
});

/* CHAPTER 1 APPEAR */

/* bg2 transition */
const progress = Math.min(1,Math.max(0,(scrollY - 600) / 400));
bg1.style.opacity = 1 - progress;


/* reveal */
const revealProgress = Math.min(1, Math.max(0, (scrollY - 1200) / 600));
const reveal = 49.5 - revealProgress * 49.5;

chapter1.style.clipPath = `inset(0 ${reveal}% 0 ${reveal}%)`;
navigation.style.clipPath = `inset(0 ${reveal}% 0 ${reveal}%)`;


/* leaf transition */
leaves.style.opacity = 1 - progress;

/* chapter fade in */
chapterTitles.forEach(title =>{
    title.style.opacity = Math.max(0,(progress - 0.7) / 0.3);
});

/* navigation fade in */
navigation.style.opacity = Math.max(0,(progress - 0.7) / 0.3);

/* cloud */
cloud.style.opacity = Math.max(0,(progress - 0.7) / 0.3);

/* plane */
plane.style.opacity = Math.max(0,(progress - 0.7) / 0.3);

/* button */
chapter1btn.style.opacity = Math.max(0,(progress - 0.7) / 0.3);

/* CHAPTER 1 → CHAPTER 2 */

/* bg3 transition */
const transitionProgress = Math.min(1,Math.max(0,(scrollY - 2500) / 800));
const chapter1Opacity = Math.max(0,(progress - 0.7) / 0.3) * Math.max(0,1 - transitionProgress * 2);
const chapter2Progress = Math.max(0,(transitionProgress - 0.75) / 0.25);

bg2.style.opacity = progress * (1 - transitionProgress);

chapterTitles.forEach(title => {
    title.style.opacity = chapter1Opacity;
    title.style.transform = `translate(
        -50%,
        ${-transitionProgress * 100}px
)`;

});


chapter1.style.transform = `translateY(
    ${-transitionProgress * 100}vh
)`;

/* cloud move out */

cloud.style.transform = `translateY(
    ${-transitionProgress * 100}vh
)`;

/* plane move out */

plane.style.transform = `translateY(
    ${-transitionProgress * 100}vh
)`;
    

/* chapter 2 background move in */
bg3.style.transform = `translateY(
    ${(1 - transitionProgress) * 100}vh)`;
    

/* chapter 2 title fade in */
chapter2Titles.forEach(title => {
    title.style.opacity = chapter2Progress;
    title.style.transform = `translate(
        -50%,
        ${30 - chapter2Progress * 30}px
)`;
});

chapter2btn.style.opacity = chapter2Progress;
chapter2btn.style.transform = `translate(
        -50%,
        ${30 - chapter2Progress * 30}px
)`;

/* CHAPTER 2 → CHAPTER 3 */

/* bg 4 transition */
const chapter3Progress = Math.min(1,Math.max(0,(scrollY - 4500) / 1800));

//hold full screen
let chapter2CardProgress = 0;

if(chapter3Progress > 0.3) {
    chapter2CardProgress =
    (chapter3Progress - 0.3) / 0.3;
}

chapter2CardProgress =
Math.min(chapter2CardProgress,1);

//zoom out to card
const chapter2Scale =
1 - chapter2CardProgress * 0.4;

//chapter slide
let chapterSlideProgress = 0;

if(chapter3Progress > 0.6) {
    chapterSlideProgress =
    (chapter3Progress - 0.6) / 0.2;
}

chapterSlideProgress =
Math.min(chapterSlideProgress,1);

chapter2.style.transform = `translateX(
    ${-chapterSlideProgress * 120}vw)
    scale(${chapter2Scale}
)`;

/* chapter 3 appear */
chapter3.style.visibility = "visible";
chapter3.style.opacity = chapterSlideProgress;

/* chapter 3 card from right */
const chapter3X =
120 - chapterSlideProgress * 120;

/* chapter 3 zoom */
let chapter3ZoomProgress = 0;

if(chapter3Progress > 0.85) {
    chapter3ZoomProgress =
    (chapter3Progress - 0.85) /0.15;
}

chapter3ZoomProgress = Math.min(chapter3ZoomProgress,1);

/* smooth zoom */
const smoothZoom = Math.pow(chapter3ZoomProgress,2);

const chapter3Scale = 0.6 + smoothZoom * 0.4;

chapter3.style.transform = `translateX(
    ${chapter3X}vw)
    scale(${chapter3Scale}
)`;

/* chapter3Titles */
chapter3Titles.forEach(title => {
    title.style.opacity = chapter3ZoomProgress;
});

/* chapter3button */
chapter3btn.style.opacity = chapter3ZoomProgress;

/* CHAPTER 3 → CHAPTER 4 */

/* bg5 transition */
const chapter4Progress = Math.min (1, Math.max(0,(scrollY - 7500) / 1800));

/* chapter 4 go down from top */
chapter4.style.transform = `translateY(
      ${(-100 + chapter4Progress * 100)}vh
)`;

/* fade */
chapter4.style.opacity = chapter4Progress;

/* chapter4Titles */
chapter4Titles.forEach(title => {
    title.style.opacity = chapter4Progress;
    title.style.transform = `translate(
        -50%,
        ${-30 + chapter4Progress * 30}px
)`;

});

/* rain canvas */
canvas.style.opacity = transitionProgress;

});

/* canvas rainy */
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
//creat rain drop position
let raindrops = [];
function createRaindrop() {
    const x = Math.random() * canvas.width;
    const y= 0;
    const speed = Math.random() *50;
    return {x,y, speed}
}
//draw rain drop
function drawRaindrop(raindrop){
    ctx.beginPath();
    ctx.moveTo(raindrop.x, raindrop.y);
    ctx.lineTo(raindrop.x, raindrop.y + 10);
    ctx.strokeStyle = "white";
    ctx.lineWidth = 3;
    ctx.stroke();
}
//update rain drop position
function drawScene() {
    ctx.clearRect (0,0, canvas.width, canvas.height);
    if (Math.random() < 20) {
        raindrops.push(createRaindrop());
    }
    for(let i = 0; i < raindrops.length; i++) {
        const raindrop = raindrops[i];
        raindrop.y += raindrop.speed;
        if(raindrop.y > canvas.height) {
            raindrops.splice(i, 1);
        }
        drawRaindrop(raindrop);
    }
    requestAnimationFrame(drawScene)
}
drawScene();