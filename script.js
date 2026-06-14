const bg1 = document.querySelector(".bg1");
const bg2 = document.querySelector(".bg2");
const title = document.querySelector(".title");
const leaves = document.querySelector(".leaf-container");
const chapterTitles = document.querySelectorAll(".title1");
const navigation = document.querySelector(".navigation");
const cloud = document.querySelector(".move");

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

/*cloud*/
cloud.style.opacity = Math.max(0,(progress - 0.7) / 0.3);
});