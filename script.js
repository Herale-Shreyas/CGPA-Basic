let courses = [];
const submitButton = document.querySelector('#submit-button');
const subjectContainer = document.getElementById('subject-container');
const newButton = document.createElement('button');
const resultContainer = document.getElementById('displayResult');

newButton.classList.add('buttonClick')
newButton.innerText = "Show Results"

let gradeS = ["S", "A", "B", "C", "D", "E", "F"];
let gradeValues = [10, 9, 8, 7, 6, 5, 0];

// const numberOfSub = 0;
submitButton.addEventListener('click', () => {
    const numberOfSub = parseInt(document.querySelector('#credit').value)
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
        creditInput.classList.add('creditInput');

        newDiv.append(creditLabel);
        newDiv.append(creditInput);

        const gradeSelect = document.createElement('select');
        const gradeLabel = document.createElement('label');

        gradeSelect.setAttribute("name", "grade");
        gradeLabel.setAttribute("for", "grade");
        gradeLabel.innerText = ` Grade `;
        gradeSelect.classList.add('gradeSelect');

        optionsForGrades(gradeSelect);

        newDiv.append(gradeLabel);
        newDiv.append(gradeSelect);

        newDiv.classList.add('subjectDiv');
        subjectContainer.append(newDiv);
    }
}

function optionsForGrades (gradeSelect) {

    const defaultOption = document.createElement('option');
    defaultOption.value = "";
    defaultOption.setAttribute('selected', true);
    defaultOption.setAttribute('disabled', true);
    defaultOption.setAttribute('hidden', true);
    defaultOption.text = "No options selected";
    gradeSelect.append(defaultOption);
    for(let i = 0; i<7; i++) {
        const newOption = document.createElement('option');
        newOption.value = gradeValues[i];
        newOption.text = `${gradeS[i]} - Grade`
        gradeSelect.append(newOption);
    }

}

newButton.addEventListener('click' ,() => {
    calculateCGPA();
    resultContainer.style.display = 'block';

})



function calculateCGPA() {
    const creditsOfAll = document.querySelectorAll('.creditInput');
    const gradesOfAll = document.querySelectorAll('.gradeSelect');
    const numberOfSub = creditsOfAll.length
    let ans = 0;
    let totalCredits = 0;

    for(let i = 0; i<numberOfSub; i++) {
        totalCredits += parseInt(creditsOfAll[i].value);
        ans += parseFloat(creditsOfAll[i].value) * parseInt(gradesOfAll[i].value);
    }
    const cgpa = ans / totalCredits;
    document.getElementById('cgpa').textContent = cgpa.toFixed(2);

}

