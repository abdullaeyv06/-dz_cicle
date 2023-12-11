let students = [{
    name: "Alsafir",
    age: 17,
    gender: "M"
},
{
    name: "Radmir",
    age: 10,
    gender: "F"
}, {
    name: "Jahongir",
    age: 17,
    gender: "M"


}, {
    name: "Bexruz",
    age: 19,
    gender: "M"
}]
// let age = students.reduce((a,b) => {
//  return a + b.age
// } , 0) 
// age=age/students.length 
// console.log(age); 

let m = 0
let f = 0
for(let i = 0; i<students.length;i++) {
    switch (students[i].gender) {
        case "M":
            m++;
            break; 
            case"F":
    f++;
        default:
            break;
    }
} 
console.log(m);
console.log(f);


// console.log(m); 
// console.log(f);
//  if (students.gender ==="M") {
//     m.push(students.gender)
//  } else {
//     f.push(students.gender)
//  } 
//  console.log(m); 
//  console.log(f);
