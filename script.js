const gradeList = {
  'A+': 10,
  'A': 9,
  'B+': 8,
  'B': 7,
  'C+': 6,
  'C': 5,
  'D+': 4,
  'E': 0,
  'F': 0,
  'I': 0,
  'X': 0
};

const listTotal = [];
const listCredit = [];
const listGrade = [];

function renderSubjectList(){
  let subjectListHTML = ''

  for (let i = 0; i < listTotal.length; i++){
    const html = `
    <div>
    <p>Subject: ${i+1}</p>
    <div id="small-screen-marks">
    <p>${listCredit[i]}</p>
    <p>${listGrade[i]}</p>
    <p>${listTotal[i]}</p>
    </div>
    <button onclick= "
    listTotal.splice(${i}, 1);
    listGrade.splice(${i}, 1);
    listCredit.splice(${i}, 1);
    renderSubjectList();">Delete</button>
    </div>`;
    subjectListHTML += html;
  }

  document.querySelector(".js-subject-list-container").innerHTML = subjectListHTML;
}


function calculateTotal(){
  const creditElement = document.querySelector(".js-credit");
  const credit = Number(creditElement.value);
  listCredit.push(credit);
  console.log(listCredit)

  const gradeElement = document.querySelector(".js-grade");
  const grade = gradeElement.value.toUpperCase();
  listGrade.push(grade);
  console.log(listGrade)

  const total = credit * gradeList[grade];
  listTotal.push(total)
  console.log(listTotal)

  creditElement.value = "";
  gradeElement.value = "";

  renderSubjectList();
}

function calculateCGPA(){
  let creditSum = 0, totalSum = 0;
  for(let i = 0; i< listCredit.length; i++){
    creditSum += listCredit[i];
    totalSum += listTotal[i];
  }
  const CGPA = totalSum / creditSum;
  alert(`Your CGPA: ${CGPA.toFixed(2)}`);
}
