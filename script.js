"use strict";

const reviews = [
  {
    id: 1,
    name: "Michael Dam",
    job: "software  engineer",
    image: `http://127.0.0.1:8080/css/img4.jpg`,
    text: ` I’m a software engineer in Santa Barbara, CA with a passion for computer science, 
    electrical engineering and embedded systems technology.I earned a Bachelor’s degree in Mechanical 
    Engineering.`,
  },
  {
    id: 2,
    name: "Matila",
    job: "web designer",
    image: `http://127.0.0.1:8080/css/img2.jpg`,
    text: `Hello! My name is Matila
    I’m a web designer and front-end web developer with over 20 years of professional experience in the design industry.
    and then a Master’s degree in Electrical Engineering from the University of California.`,
  },
  {
    id: 3,
    name: "Jonas",
    job: "Machine learning engineer",
    image: `http://127.0.0.1:8080/css/img3.jpg`,
    text: `Passionate machine learning engineer with 4+ years of experience in predictive 
    modeling and data mining. Excited to implement statistical machine learning solutions for 
    Macro Globe. At Stack Intellect, implemented demand forecasting models improving forecast 
    accuracy by 34%.`,
  },
  {
    id: 4,
    name: "Sarah",
    job: "web developer",
    image: `http://127.0.0.1:8080/css/img1.jpg`,
    text: `  I’m a web developer. I spend my whole day, practically every day,
    experimenting with HTML, CSS, and JavaScript; dabbling with Python and
    Ruby.`,
  },
];
// console.log(reviews.length);
const author = document.querySelector(".heading_name");
const img = document.querySelector(".review-img");
const job = document.querySelector(".heading_profession");
const info = document.querySelector(".paragraph_info");
const btn_next = document.querySelector(".btn_next");
const btn_prev = document.querySelector(".btn_prev");
const suprise = document.querySelector(".btn_secondary-suprise");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  reveal();
});

const reveal = function () {
  const item = reviews[currentItem];
  img.src = item.image;
  job.textContent = item.job;
  author.textContent = item.name;
  info.textContent = item.text;
};

btn_next.addEventListener("click", function () {
  console.log(currentItem);
  if (currentItem < reviews.length - 1) {
    currentItem++;
    reveal();
  } else {
    currentItem = 0;
    reveal();
  }
});

btn_prev.addEventListener("click", function () {
  if (currentItem > 0) {
    currentItem--;
    reveal();
  } else {
    currentItem = reviews.length - 1;
    reveal();
  }
});
suprise.addEventListener("click", function () {
  currentItem = Math.abs(Math.floor(Math.random() * reviews.length));
  reveal();
});
