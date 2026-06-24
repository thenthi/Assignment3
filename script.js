/* SELECT ELEMENTS */
const bg1 = document.querySelector(".bg1");
const bg2 = document.querySelector(".bg2");
const bg3 = document.querySelector(".bg3");
const titles = document.querySelectorAll(".title");
const chapterTitles = document.querySelectorAll(".title1");
const chapter2Titles = document.querySelectorAll(".title2");
const chapter3Titles = document.querySelectorAll(".title3");
const chapter4Titles = document.querySelectorAll(".title4");
const leaves = document.querySelector(".leaf-container");
const navigation = document.querySelector(".navigation");
const cloud = document.querySelector(".move");
const plane = document.querySelector(".moveplane");
const chapter1 = document.querySelector("#chapter1");
const chapter2 = document.querySelector("#chapter2");
const chapter3 = document.querySelector("#chapter3");
const chapter4 = document.querySelector("#chapter4");
const chapter1btn = document.querySelector(".chapter1-btn");
const chapter2btn = document.querySelector(".chapter2-btn");
const chapter3btn = document.querySelector(".chapter3-btn");

window.addEventListener("scroll", () => {
const scrollY = window.scrollY;

/* In the Intro section, I created a scroll-based zoom-in effect inspired by *Inside the Mind of Samuel Day*. 
As the user scrolls down the page, the `scrollY` value is used to track the current scroll position and calculate a changing `scale` value, 
causing the background image to gradually enlarge and creating the feeling of moving deeper into the story. 
At the same time, the opacity of the intro titles decreases based on the scroll position, allowing the text to slowly fade out before transitioning to Chapter 1. 
I used ChatGPT to help build this JavaScript logic and explain the function of each line of code, which helped me better understand how `scrollY`, `scale`, and `opacity` work together to create a smooth and engaging transition between sections. */

/* INTRO SECTION
   Road zoom + title fade */
/* zoom road */
const scale = Math.min(2,1 + scrollY * 0.001);
bg1.style.transform = `scale(${scale})`;
/* title */
titles.forEach(title => {
    title.style.opacity = Math.max(0,1 - scrollY/400);
});

/* In the Chapter 1 Appear section, I used a reveal effect with `clip-path` to create the feeling of a door gradually opening and inviting users into the first chapter of the story.
I was inspired by tutorials on YouTube and took notes in my own way before experimenting with the effect in my project. 
During the development process, I also used ChatGPT to help me understand concepts such as `scrollY`, `progress`, `opacity`, and how the formulas work, then adapted the code to better fit my design. 
The `progress` variable is calculated from the user's scroll position and is used to gradually fade out the Intro section through changes in opacity. 
Meanwhile, `revealProgress` controls the `clip-path` value, allowing Chapter 1 to appear as a thin line in the centre of the screen before expanding outward to both sides. 
Finally, elements such as the chapter title, navigation bar, clouds, plane, and Explore button gradually fade in based on the `progress` value, creating a smooth transition between the Intro and Chapter 1 sections. */


/* CHAPTER 1 APPEAR */

/* bg2 transition */
const progress = Math.min(1,Math.max(0,(scrollY - 600) / 400));
bg1.style.opacity = 1 - progress;
/* leaf transition */
leaves.style.opacity = 1 - progress;

/* reveal */
const revealProgress = Math.min(1, Math.max(0, (scrollY - 1200) / 600));
const reveal = 49.5 - revealProgress * 49.5;

chapter1.style.clipPath = `inset(0 ${reveal}% 0 ${reveal}%)`;
navigation.style.clipPath = `inset(0 ${reveal}% 0 ${reveal}%)`;

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

/* In the transition from Chapter 1 to Chapter 2, I used the `transitionProgress` variable to track the user's scroll position and control the transition effects. 
Similar to the previous section, I used `Math.min()` and `Math.max()` to keep values within a suitable range. 
These values gradually fade out (`opacity`) and move (`translateY`) the Chapter 1 elements, including the title, clouds, plane, and background, upward off the screen. 
At the same time, the Chapter 2 background (`bg3`) moves up from below, creating the feeling of a new scene appearing. I also used `chapter2Progress` to gradually reveal the Chapter 2 title and Explore button. 
In addition, the chapter titles change position dynamically as the user scrolls, matching the interaction concept I presented earlier. During this process, I used ChatGPT to help refine parts of the code and explain how the variables and formulas work, which helped me better understand and adapt the effects for my project. */

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

/* chapter 1 move out */
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

/* In the transition from Chapter 2 to Chapter 3, I wanted users to feel like they were moving into a new chapter rather than simply changing the background. 
Initially, my idea was to reposition the chapters as the user scrolled, but I later decided to shrink Chapter 2 into a card before revealing Chapter 3 to create a more engaging transition. 
I used ChatGPT to help generate the initial code and explain the meaning of the variables, then adjusted the code based on my own understanding. 
Similar to the previous sections, I continued using `Math.min()` and `Math.max()` to limit values based on the user's scroll position. 
The `chapter3Progress` variable tracks the transition progress, while `chapter2CardProgress` and `chapterSlideProgress` are used to shrink and slide Chapter 2 to the left. 
At the same time, Chapter 3 enters from the right with a zoom and fade-in effect, creating a smoother and more dynamic transition. The Chapter 3 title and Explore button also gradually appear as the user scrolls, reinforcing the feeling of continuing the journey through the story. */

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
const chapter3X = 120 - chapterSlideProgress * 120;

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

/* In the transition from Chapter 3 to Chapter 4, I used the `chapter4Progress` variable to track the user's scroll position and control the transition effect. 
Similar to the previous sections, I continued using `Math.min()` and `Math.max()` to keep values between 0 and 1, ensuring the animation remains smooth and controlled. 
The `translateY()` function moves Chapter 4 from above the screen into view, creating the feeling of a new chapter gradually entering the story. 
At the same time, the `opacity` value increases based on `chapter4Progress`, allowing the chapter to fade in smoothly. 
I also applied the same effect to the Chapter 4 titles, making them gradually appear while moving slightly into position. 
Since this transition uses a similar structure to the previous chapters, I adapted parts of my earlier code and used ChatGPT to help check for errors and confirm that the animation logic was working correctly. */

/* CHAPTER 3 → CHAPTER 4 */

/* bg5 transition */
const chapter4Progress = Math.min (1, Math.max(0,(scrollY - 7350) / 1800));

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

/* To enhance the feeling of loneliness and emotional difficulty in Chapter 2, I created a rain effect using HTML Canvas and JavaScript. 
Since Canvas had been briefly introduced in class, I wanted to experiment with it in my project by drawing animated raindrops. 
I learned the basic technique from YouTube tutorials and adapted it to fit my design. 
The code uses `getContext("2d")` to draw directly onto the canvas and stores the position and speed of each raindrop in an array. 
The `createRaindrop()` function generates new raindrops with random positions and speeds, while `drawRaindrop()` is responsible for rendering them on the screen. 
Inside the `drawScene()` function, the raindrops are continuously updated to create the illusion of falling rain. 
I also used `requestAnimationFrame()` to redraw the scene smoothly and efficiently. 
As I had never worked with Canvas before, I used ChatGPT to help me understand the logic behind the code and troubleshoot issues before adapting it to suit my project. */

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