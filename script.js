const bg1 = document.querySelector(".bg1");
const bg2 = document.querySelector(".bg2");
const bg3 = document.querySelector(".bg3");
const title = document.querySelector(".title");
const chapterTitles = document.querySelectorAll(".title1");
const chapter2Titles = document.querySelectorAll(".title2");
const leaves = document.querySelector(".leaf-container");
const navigation = document.querySelector(".navigation");
const cloud = document.querySelector(".move");
const plane = document.querySelector(".moveplane");
const chapter2 = document.querySelector("#chapter2");
const chapter3 = document.querySelector("#chapter3");
const chapter3Titles = document.querySelectorAll(".title3");

window.addEventListener("scroll", () => {
const scrollY = window.scrollY;

/* zoom road */
const scale = Math.min(2,1 + scrollY * 0.001);
bg1.style.transform = `scale(${scale})`;

/* title */
title.style.opacity = Math.max(0, 1 - scrollY / 400);

/* bg transition */
const progress = Math.min(1,Math.max(0,(scrollY - 600) / 400));
    bg1.style.opacity = 1 - progress;
    bg2.style.opacity = progress;

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

/* bg3 transition */
const transitionProgress = Math.min(1,Math.max(0,(scrollY - 2200) / 800));
const chapter1Opacity =Math.max(0,(progress - 0.7) / 0.3) *Math.max(0,1 - transitionProgress * 2);
const chapter2Progress = Math.max(0,(transitionProgress - 0.75) / 0.25);

bg2.style.opacity = progress * (1 - transitionProgress);

chapterTitles.forEach(title => {
    title.style.opacity =chapter1Opacity;
    title.style.transform = `translate(
        -50%,
        ${-transitionProgress * 120}px
)`;

});

cloud.style.opacity =chapter1Opacity;

cloud.style.transform = `translateY(
    ${-transitionProgress * 80}vh
)`;

plane.style.opacity =chapter1Opacity;

plane.style.transform = `translateY(
    ${-transitionProgress * 100}vh
)`;

bg2.style.transform = `translateY(
    ${-transitionProgress * 50}vh
)`;

bg3.style.transform = `translateY(
    ${(1 - transitionProgress) * 100}vh)`;

chapter2Titles.forEach(title => {
    title.style.opacity =chapter2Progress;
    title.style.transform = `translate(
        -50%,
        ${30 - chapter2Progress * 30}px
)`;
});

/*bg 4 transition */
const chapter3Transition = Math.min(
    1,
    Math.max(
        0,
        (scrollY - 3500) / 1200
    )
);

/* giữ nguyên màn hình */

const holdPhase =
Math.max(
    0,
    (chapter3Transition - 0.2) / 0.3
);

/* thu nhỏ card */

const scalePhase =
Math.min(
    1,
    holdPhase
);

const cardScale =
1 - scalePhase * 0.4;

/* card đứng yên một chút rồi mới trượt */

const slidePhase =
Math.max(
    0,
    (chapter3Transition - 0.7) / 0.15
);

chapter2.style.transform = `
translateX(${-slidePhase * 120}vw)
scale(${cardScale})
`;

chapter3.style.visibility = "visible";
chapter3.style.opacity = slidePhase;

/* card chapter 3 */

const chapter3X =
120 - Math.min(slidePhase,1) * 120;

/* zoom cuối */

const zoomPhase =
Math.max(
    0,
    (chapter3Transition - 0.95) / 0.05
);

const chapter3Scale =
0.6 + zoomPhase * 0.4;

chapter3.style.transform = `
translateX(${chapter3X}vw)
scale(${chapter3Scale})
`;

chapter3Titles.forEach(title => {

    title.style.opacity =
        zoomPhase;


});

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
