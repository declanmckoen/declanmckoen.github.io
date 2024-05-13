const education = document.querySelector('.education-container-js');
const techSkills = document.querySelector('.technical-skills-container-js');
const interests = document.querySelector('.interests-container-js');

education.addEventListener('mouseover', () => {
  education.classList.add("education-information");
  education.innerHTML = `2022 <br /> &#x2022 Received International Baccalaureate (IB) Diploma <br /> <br />
    2022-Current <br /> &#x2022 University of Florida <br /> &#x2022 Majoring in Computer Science`;
});

education.addEventListener('mouseout', () => {
  education.classList.remove("education-information");
  education.innerHTML = `Education Timeline
    <img class="education-clipart" src="/images/education-clipart-removebg-preview.png">`;
});

techSkills.addEventListener('mouseover', () => {
  techSkills.classList.add("technical-skills-information");
  techSkills.innerHTML = `
    <p class="technical-skills-item1">Back-End:</p>
    <ul>
      <li>C/C++</li>
      <li>Python</li>
      <li>MATLAB</li>
    </ul>
    <p class="technical-skills-item1">Front-End:</p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>`;
});

techSkills.addEventListener('mouseleave', () => {
  techSkills.classList.remove("technical-skills-information");
  techSkills.innerHTML = `Technical Skills
    <img class="technical-skills-clipart" src="/images/technical-skills-removebg-preview.png">`;
});

interests.addEventListener('mouseover', () => {
  interests.classList.add("interests-information");
  interests.innerHTML = `&#x2022 Articial Intelligence <br /> &#x2022 Machine Learning <br /> &#x2022 Cybersecurity`;
});

interests.addEventListener('mouseout', () => {
  interests.classList.remove("interests-information");
  interests.innerHTML = `Interests
    <img class="interests-clipart" src="/images/interests-removebg-preview.png">`;
});
