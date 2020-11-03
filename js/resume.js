import alpha from "./master.js";

let ht = window.screen.height;
let wt = window.screen.width;

const resumeData = [
      '<img src="assests/resume.jpg" alt="resume" height="1150px" width="800px"/>',
      '<a href="assests/resume.pdf">View/Download as PDF</a> <i class="fas fa-file-pdf"></i> '
];

console.log(ht)

window.onload = alpha(resumeData);