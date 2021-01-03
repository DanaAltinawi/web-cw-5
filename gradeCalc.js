function submit() {
let Quizes= parseInt(document.getElementById("Quizes").value)
let Midterm= parseInt(document.getElementById("Midterm").value)
let FinalTest= parseInt(document.getElementById("FinalTest").value)
let Oral= parseInt(document.getElementById("Oral").value)

let total= parseInt(Quizes + Midterm + FinalTest + Oral)

// 2. :تقوم الآلة الحاسبة بإجراء الحسابات اللازمة لحساب مجموع درجاتك بحيث

// 90 - 100                  A
// أكبر من أو يساوي 80       B
// أكبر من أو يساوي 70       C
// أكبر من أو يساوي 60       D
// عدا ذلك                   F

// ثم يظهر مجموعك النهائي على الصفحة
// A, B, C, D or F
// مع درجتك بالأرقام

// -->

// <!-- 💡 تلميحات -->

// <!--
// 1. سوف تستخدم value. لأخذ القيمة من الحقل
// 2. لا تنسوا onClick

// -->
console.log(total);
        if (total>=90 && total<=100)
        {
          document.getElementById("final_grade").innerText="A"
          document.getElementById("total_grades").innerText= total

        } else if (total>=80 && total<=90) {

            document.getElementById("final_grade").innerText="B"
            document.getElementById("total_grades").innerText=total      
        } else if (total>=70 && total <=80) {

            document.getElementById("final_grade").innerText="C"
            document.getElementById("total_grades").innerText=total
        }
        else if (total>=60 && total <=70) {

            document.getElementById("final_grade").innerText="D"
            document.getElementById("total_grades").innerText=total
        }
        else
        {
          document.getElementById("final_grade").innerText= "F"
          document.getElementById("total_grades").innerText=total 
        }
    }