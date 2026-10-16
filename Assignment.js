let marks = 90;
let bonus = 5;

marks+=bonus;

let grade;

if (marks >= 90) {
  
    grade = "A"
}
else if (marks >= 70) {

     grade = "B"
}
else if (marks>= 50 ) {

     grade = "C"
}

else {
     grade = "F"
}

// Pass or Fail using Ternary Operator//

let result = marks >= 50 ? "Pass" : "Fail"

// Remakrs using Switch

let remark;

switch(grade) {
  case "A":
     remark = "Excellent"
     break;
   
   case "B":
     remark = "Good"
     break;

   case "C":
     remark = "Average"
     break;

    case "F":
      remark = "Needs Improvement"

    default:
      remark = "Invalid Grade"
    
}

// Print Results
console.log("Marks :", marks);
console.log("Grade:", grade);
console.log("Result:", result);
console.log("Remark:", remark);

// Logical operator for extra message//
if (marks >=90 && bonus > 0) {

    console.log("High Marks with Bonus");
}