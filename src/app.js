//part 2
function element_selector(css_selector){
    const select_element = document.querySelector(css_selector)
    return select_element
}
console.log(element_selector())
//part 3
const students = [
    { name: "Tasha", grades: [ 80, 67, 75, 62 ] },
    { name: "Tuvok", grades: [ 90, 88, 91, 92 ] },
    { name: "Dax", grades: [ 88, 90, 89, 85 ] },
    { name: "Neelix", grades: [ 60, 54, 48, 50 ] }
  ]
  

function check_stu_grade(){
    const studentsScholarship = []
  for (const st of students) {
      let total = st.grades.reduce((a,b) => a+b,0) / st.grades.length;
    if(total >= 80){
        const ob = {name: st.name, gradeAvg: total}
        studentsScholarship.push(ob)
    }
  }
  return studentsScholarship
}

console.log(check_stu_grade())

//part 4

function darkmode(){
    const dark_mode = document.querySelector('.light-theme')
    dark_mode.classList.add('dark-theme')
}
darkmode()