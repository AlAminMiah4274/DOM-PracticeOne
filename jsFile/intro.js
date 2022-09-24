// added color to all h1 tags of the section
const allHeadings = document.getElementsByClassName('headings');
for (const heading of allHeadings) {
    heading.style.color = 'blue';
}

// brought the heading text to the center
const headContainer = document.querySelector('#head-container');
headContainer.style.textAlign = 'center';

// added a section to the main using innerText 
const mainContainer = document.getElementById('mian-container');

const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = '6. Stronger Analytical Thinking Skills';
h1.style.color = 'blue';
section.appendChild(h1);

const p = document.createElement('p');
p.innerText = 'If you are still wondering what other benefits of reading regularly are, consider this! One of the most amazing benefits of reading every day is that it can improve your analytical skills. Reading mystery novels helps you develop skills that can assist you in problem-solving. While reading a novel, the disclosure is pretty slow, and your mind is forced to predict or make guesses. Upon disclosure, you get to connect the dots. It’s fun to make your brain smarter and enhance your analytical skills.';
section.appendChild(p);

mainContainer.appendChild(section);

// added another section to the main using innerHTML
const sectionTwo = document.createElement('section');
const h1Two = document.createElement('h1');
h1Two.innerText = '7. Improves Focus and Concentration';
h1Two.style.color = 'blue';
sectionTwo.appendChild(h1Two);

const pTwo = document.createElement('p');
pTwo.innerText = 'One of the worst things that technology has done is make us lazy. Almost everything is available with ease. We hardly make an effort to focus on solving issues or concentrate on bringing about any improvement. Want food? Just open your phone and order via the app! Want Clothes? Again use an app and try on attires virtually! You can see where we are going with this. You can agree that we even tend to get lazy and don’t even put an effort to remember things. Simply put a reminder on the phone, and that’s it!';
sectionTwo.appendChild(pTwo);

mainContainer.appendChild(sectionTwo);