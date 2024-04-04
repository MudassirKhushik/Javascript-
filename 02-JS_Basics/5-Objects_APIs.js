const course={
    name:"Javascript",
    price:"999",
    courseInstructor:"Mudassir Khushik"
}

console.log(course.courseInstructor);

const {courseInstructor: instructor} = course
// console.log(courseInstructor);
console.log(instructor);