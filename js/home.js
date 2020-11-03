import alpha from "./master.js";


const getCurrentTime = () => {
      var date = new Date();
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var current = hours + (minutes * .01);
      var smile = ' <i class="fas fa-smile-beam"></i>';
      if (current >= 5 && current < 19) return 'Have a nice day' + smile;
      if (current >= 19 && current < 22) return 'Have a nice evening' + smile;
      if (current >= 22 || current < 5) return 'Have a good night <i class="fas fa-moon"></i>';
}

const messages = [
      'Hey there 👋',
      'I\'m Sneh Sagar <i class="fas fa-male"></i>',
      'I am currently an undergraduate student at <a target="_blank" href="https://kiit.ac.in/">KIIT University</a>, Bhubaneswar.' +
      '<br>Checkout my <a href="/education.html">Education</a> <i class="fas fa-user-graduate"></i>',
      'Here are some of my <a href="/skills.html">Skills</a> <i class="fas fa-tools"></i>',
      'I love to write optimized code.<br>' +
      'Checkout my <a href="/projects.html">Projects</a> <i class="fas fa-laptop-code"></i>',
      'I\'m currently looking for Internships and Full time roles.<br>' +
      ' You can contact me at <a href="mailto:snehsagarajput@gmail.com">snehsagarajput@gmail.com</a> <i class="fas fa-envelope"></i>',
      'Checkout my <a href="/resume.html">Resume</a> <i class="fas fa-file"></i>',
      '<a target="_blank" href="https://www.linkedin.com/in/snehsagarajput/"><i class="fab fa-linkedin">&nbspLinkedin</i></a><br>' +
      '<a target="_blank" href="https://github.com/snehsagarajput"><i class="fab fa-github">&nbspGithub</i></a>',
      getCurrentTime(),
      '👀 S.'
];

window.onload = alpha(messages);




