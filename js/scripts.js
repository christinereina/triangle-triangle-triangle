$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    event.preventDefault();
    const side1 = parseInt($("input#side1").val());
    const side2 = parseInt($("input#side2").val());
    const side3 = parseInt($("input#side3").val());
    let result;


if (side1 === side2 && side2 === side3) {
alert("equilateral")
} else if (side1 === side2 || side2 === side3 || side3 === side1) {
alert("isosceles")
} else if (side1 !== side2 && side2 !== side3 && side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
alert("scalene");
} else {
alert("not a triangle");
  }
})
  })

// } else if (side1 === side2 || side2 === side3 || side3 === side1) {
// return("isosceles");
// } else if (side1 != side2 && side2 != side3 && side3 != side1) {
// return("scalene");
// } else if (side1 + side2 <= side2) || side2 + side3 <= side1 || side3 + side1 <= side2){
// return("not a triangle");
// }

// });
// });