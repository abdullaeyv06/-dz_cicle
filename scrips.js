// let students = [{
//     name: "Alsafir",
//     age: 17,
//     gender: "M"
// },
// {
//     name: "Radmir",
//     age: 10,
//     gender: "F"
// }, {
//     name: "Jahongir",
//     age: 17,
//     gender: "M"


// }, {
//     name: "Bexruz",
//     age: 19,
//     gender: "M"
// }]
// // let age = students.reduce((a,b) => {
// //  return a + b.age
// // } , 0) 
// // age=age/students.length 
// // console.log(age); 

// // let m = 0
// // let f = 0
// // for(let i = 0; i<students.length;i++) {
// //     switch (students[i].gender) {
// //         case "M":
// //             m++;
// //             break; 
// //             case"F":
// //     f++;
// //         default:
// //             break;
// //     }
// // } 
// // console.log(m);
// // console.log(f);


// // console.log(m); 
// // console.log(f);
// //  if (students.gender ==="M") {
// //     m.push(students.gender)
// //  } else {
// //     f.push(students.gender)
// //  } 
// //  console.log(m); 
// //  console.log(f); 



// let student = [
//     {
//         name: "Hasan",
//         age: "2008-07-28",
//         gender: 'm'
//     },
//     {
//         name: "Alsafir",
//         age: "2008-10-13",
//         gender: 'm'
//     },
//     {
//         name: "Allayor",
//         age: "2008-06-24",
//         gender: 'w'
//     },
//     {
//         name: "Radmir",
//         age: "2007-04-28",
//         gender: 'w'
//     },
//     {
//         name: "Jaxongir",
//         age: "2006-09-03",
//         gender: 'm'
//     },
//     {
//         name: "Bexruz",
//         age: "2020-11-27",
//         gender: 'w'
//     },
//     {
//         name: "Alibek",
//         age: "2006-04-12",
//         gender: 'm'
//     },
//     {
//         name: "Bexruz",
//         age: "2009-11-27",
//         gender: 'w'
//     },
//     {
//         name: "Alibek",
//         age: "2012-04-12",
//         gender: 'm'
//     },
// ]  
//  let min = 0

//   for(let i = 0; i<student.length; i ++) {

//     let age = new Date().getFullYear() - new Date(student[i].age).getFullYear() 
//     if (age < 15) {
//         min.push([i].age)
//     } else {

//     }
//   console.log(min);
// } 





// let products = [
//     {
//         name: "tvorog",
//         type: "milk",
//         price: 100
//     },
//     {
//         name: "apple",
//         type: "fruit",
//         price: 5000
//     },
//     {
//         name: "govyadina",
//         type: "meat",
//         price: 99999
//     },
//     {
//         name: "yogurt",
//         type: "milk",
//         price: 8000
//     },
//     {
//         name: "banan",
//         type: "fruit",
//         price: 20000
//     },
//     {
//         name: "kuryatina",
//         type: "meat",
//         price: 45000
//     },
//     {
//         name: "sir",
//         type: "milk",
//         price: 16000
//     },
// ]
 
// let max = {price:0}
// let min = products[0]

// for (let product of products) {
//  if (product.price > max.price) {
//    max = product
//  }  
//  if (product.price < min.products) {
    
//  }
// } 
// console.log(max); 
// console.log(min);




// let categories = [
//     {
//         name: "meat",
//         arr: [],
//         amount: 0,
//         total: 0
//     },
//     {
//         name: "milk",
//         arr: [],
//         amount: 0,
//         total: 0
//     },
//     {
//         name: "fruit",
//         arr: [],
//         amount: 0,
//         total: 0
//     },
// ]
 

// let max = 0
// let min = 0

 
// for (product of products) {
//     let name = product.type
//     let price = product.price
//     for (category of categories) {
//         let type = category.name
//         if (name === type) {
//             category.amount++
//             category.arr.push(name)
//             category.total = category.total + price
//             if (category.total > max) {
//                 max ==category.total
//             } else {
//                 min.push
//             }
//         }


//     }
// }  




// console.log(min);
// console.log(max);
// console.table(categories);


















// let arr = [1,2,3,4,5,6,7,8,9,10] 

// let maximum = 0
// let minimum = arr[0]

//  for(let num of arr) {
//     if (num > maximum) {
//          maximum = num
//     } 
//     if (num < minimum) {
//         minimum = num
//     }
//  } 
//  console.log(maximum , minimum); 


let students = [
    {
        name: "Hasan",
        age: "2008",
        gender: 'm'
    },
    {
        name: "Alsafir",
        age: "2008",
        gender: 'm'
    },
    {
        name: "Allayor",
        age: "2008",
        gender: 'w'
    },
    {
        name: "Radmir",
        age: "2007",
        gender: 'w'
    },
    {
        name: "Jaxongir",
        age: "2006",
        gender: 'm'
    },
    {
        name: "Bexruz",
        age: "2007",
        gender: 'w'
    },
    {
        name: "Alibek",
        age: "2006",
        gender: 'm'
    },
    {
        name: "Bexruz",
        age: "2009",
        gender: 'w'
    },
    {
        name: "Alibek",
        age: "2012",
        gender: 'm'
    },
]   


let max = ""  
let max_age = {most:0}

 for(let student of students) {
    if (student.name.length > max.length) {
        max = student.name
    } 
       if (new Date ().getFullYear()  -student.age && student.age > max_age.most ) {
        max_age.most = student 
        
    }
  
 }  


// students.filter(item=> {
//     if (item.name.length > max.length) {
//          max=item.name
//     }
// })


// students.sort(item=> {
//     if (item.name.length > max.length) {
//          max=item.name
//     }
// })

// students.map(item=> {
//     if (item.name.length > max.length) {
//          max=item.name
//     }
// })

// students.(item=> {
//     if (item.name.length > max.length) {
//          max=item.name
//     }
// })

 console.log(max); 
 console.log(max_age);