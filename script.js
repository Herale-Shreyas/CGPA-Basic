let courses = [];
const submitButton = document.querySelector('#submit-button');
const subjectContainer = document.getElementById('subject-container');
const newButton = document.createElement('button');
newButton.classList.add('buttonClick')
newButton.innerText = "Show Results"

submitButton.addEventListener('click', () => {
    const numberOfSub = parseInt(document.querySelector('#credit').value);

    addSubjects(numberOfSub);
    
    subjectContainer.append(newButton);
    subjectContainer.style.display = 'block';
    submitButton.classList.add('disableButton'); // to be revoked
    submitButton.disabled = true; // to be revoked
})

function addSubjects(num) {
    for(let i = 0; i<num; i++) {
        const creditInput = document.createElement('input');
        const creditLabel = document.createElement('label');
        const newDiv = document.createElement('div');

        creditInput.setAttribute("name", "credit");
        creditLabel.setAttribute("for", "credit");
        creditLabel.innerText = `Credits `;

        newDiv.append(creditLabel);
        newDiv.append(creditInput);

        const gradeSelect = document.createElement('select');
        const gradeLabel = document.createElement('label');

        gradeSelect.setAttribute("name", "grade");
        gradeLabel.setAttribute("for", "grade");
        gradeLabel.innerText = ` Grade `;

        optionsForGrades(gradeSelect);

        newDiv.append(gradeLabel);
        newDiv.append(gradeSelect);

        newDiv.classList.add('subjectDiv');
        subjectContainer.append(newDiv);
    }
}

function optionsForGrades (gradeSelect) {

/* <div id="grades">
    <label for="grade">Grade:</label>
    <select id="grade" name="grade">
        <option value="10.0">S</option>
        <option value="9.0">A</option>
        <option value="8.0">B</option>
        <option value="7.0">C</option>
        <option value="6.0">D</option>
        <option value="5.0">E</option>
     </select>
</div> */


}

// function calculateCGPA() {
//     const grade = parseFloat(document.getElementById('grade').value);
//     const credit = parseInt(document.getElementById('credit').value);

//     if (isNaN(credit) || credit <= 0) {
//         alert('Please enter a valid credit hour.');
//         return;
//     }

//     courses.push({ grade, credit });

//     updateCoursesList();
//     updateCGPA();
// }

// function updateCoursesList() {
//     const coursesList = document.getElementById('courses-list');
//     coursesList.innerHTML = '';

//     courses.forEach((course, index) => {
//         const listItem = document.createElement('li');
//         listItem.textContent = `Course ${index + 1}: Grade ${course.grade}, Credit ${course.credit}`;
//         coursesList.appendChild(listItem);
//     });
// }

// function updateCGPA() {
//     const totalCredits = courses.reduce((total, course) => total + course.credit, 0);
//     const totalGradePoints = courses.reduce((total, course) => total + course.grade * course.credit, 0);

//     const cgpa = totalGradePoints / totalCredits;

//     document.getElementById('cgpa').textContent = cgpa.toFixed(2);
// }
