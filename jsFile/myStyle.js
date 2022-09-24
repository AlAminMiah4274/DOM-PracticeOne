// styled all the section
const allSections = document.querySelectorAll('section');
for (const section of allSections) {
    section.style.border = '2px solid black';
    section.style.marginTop = '10px';
    section.style.paddingLeft = '5px';
    section.style.borderRadius = '10px'
    section.style.backgroundColor = 'lightgray';
}