const course={
    name:"Javascript",
    price:"999",
    courseInstructor:"Mudassir Khushik"
}

console.log(course.courseInstructor);

const {courseInstructor: instructor} = course
// console.log(courseInstructor);
console.log(instructor);

// JSON file structure
// It can be in object as well as in array form
// {
//     "name":"Mudassir Khushik",
//     "coursename":"Javascript",
//     "price":"free"
// }