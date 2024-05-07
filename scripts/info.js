const education = document.querySelector('.education-container-js');
const techSkills = document.querySelector('.technical-skills-container-js');
const interests = document.querySelector('.interests-container-js');

education.addEventListener('mouseover', () => {
  education.classList.add("education-information");
  education.innerHTML = `2022 <br /> &#x2022 Received IB Diploma <br /> <br />
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
    <div>Back-end: <br /> &#x2022 C++ <br /> &#x2022 Python <br /> &#x2022 MATLAB</div>
    <div>Front-end: <br /> &#x2022 HTML <br /> &#x2022 CSS <br /> &#x2022 JavaScript</div>
    <div></div>`;
});

techSkills.addEventListener('mouseout', () => {
  techSkills.classList.remove("technical-skills-information");
  techSkills.innerHTML = `Technical Skills
    <img class="technical-skills-clipart" src="/images/technical-skills-removebg-preview.png">`;
});

interests.addEventListener('mouseover', () => {
  interests.classList.add("interests-information");
  interests.innerHTML = `&#x2022 Articial Intelligence <br /> &#x2022 Machine Learning <br /> &#x2022 Back-End Web Development`;
});

interests.addEventListener('mouseout', () => {
  interests.classList.remove("interests-information");
  interests.innerHTML = `Interests
    <img class="interests-clipart" src="/images/interests-removebg-preview.png">`;
});
