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

const statsLink = 'https://camo.githubusercontent.com/9e1f51206c26725a2141f301d771fa3403836640b8c7e4ca17cc439d7edac0aa/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f77616b6174696d653f757365726e616d653d736e65687361676172616a70757426636f756e745f707269766174653d747275652673686f775f69636f6e733d74727565267468656d653d676f7468616d266c616e67735f636f756e743d35';

const messages = [
      'Hey there 👋',
      'I\'m Sneh Sagar <i class="fas fa-male"></i>',
      'I am currently an undergraduate student at <a target="_blank" href="https://kiit.ac.in/">KIIT University</a>, Bhubaneswar. ' +
      '<br>Checkout my <a href="/education.html">Education</a> <i class="fas fa-user-graduate"></i>',
      'Here are some of my <a href="/skills.html">Skills</a> <i class="fas fa-tools"></i>',
      'I love to write optimized code.<br>' +
      'Checkout my <a href="/projects.html">Projects</a> ' +
      '& <a href=\"' + statsLink + '\">weekly coding stats</a> <i class="fas fa-laptop-code"></i>',
      'I\'m currently looking for Internships and Full time roles.<br>' +
      ' You can contact me at <a href="mailto:snehsagarajput@gmail.com">snehsagarajput@gmail.com</a> <i class="fas fa-envelope"></i>',
      'Checkout my <a href="/assests/resume.pdf">Resume</a> <i class="fas fa-file"></i>',
      '<a target="_blank" href="https://www.linkedin.com/in/snehsagarajput/"><i class="fab fa-linkedin">&nbspLinkedin</i></a><br>' +
      '<a target="_blank" href="https://github.com/snehsagarajput"><i class="fab fa-github">&nbspGithub</i></a>',
      getCurrentTime(),
      '👀 S.'
];

window.onload = alpha(messages, 20);




