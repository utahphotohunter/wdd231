// js for student home page

// mobile menu toggle

const toggle = document.querySelector(".nav-icon");
const mobileMenu = document.querySelector(".mobile-nav");

toggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
});


// classes section

const allCourses = document.getElementById("course-all");
const cseCourses = document.getElementById("course-cse");
const wddCourses = document.getElementById("course-wdd");
const courseList = document.getElementById("software-courses");
const creditCount = document.getElementById("credit-count");

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

function createCourseCards(list) {
    list.forEach(course => {
        let card = document.createElement("li");
        card.textContent = course.title;
        if (course.completed == true) {
            card.classList.add("complete");
        } else {
            card.classList.add("incomplete");
        }
        courseList.appendChild(card);
    });
}


// array displayed on initial page load
createCourseCards(courses);
const creditSum = courses.reduce(function (acc, course) {
        return acc + course.credits
    }, 0);
creditCount.textContent = creditSum;


allCourses.addEventListener("click", () => {
    courseList.innerHTML = "";
    allCourses.classList.add("current");
    cseCourses.classList.remove("current");
    wddCourses.classList.remove("current");
    createCourseCards(courses);
    const creditSum = courses.reduce(function (acc, course) {
        return acc + course.credits
    }, 0);
    creditCount.textContent = creditSum;
});

cseCourses.addEventListener("click", () => {
    courseList.innerHTML = "";
    allCourses.classList.remove("current");
    cseCourses.classList.add("current");
    wddCourses.classList.remove("current");
    let cseList = courses.filter(course => course.subject == "CSE")
    createCourseCards(cseList);
    const creditSum = cseList.reduce(function (acc, course) {
        return acc + course.credits
    }, 0);
    creditCount.textContent = creditSum;
});

wddCourses.addEventListener("click", () => {
    courseList.innerHTML = "";
    allCourses.classList.remove("current");
    cseCourses.classList.remove("current");
    wddCourses.classList.add("current");
    let wddList = courses.filter(course => course.subject == "WDD")
    createCourseCards(wddList);
    const creditSum = wddList.reduce(function (acc, course) {
        return acc + course.credits
    }, 0);
    creditCount.textContent = creditSum;
});


// footer

const copyrightYear = document.querySelector("#currentyear");
const modifiedDate = document.querySelector("#lastModified");

let lastModified = document.lastModified;
let date = new Date(lastModified);
let year = date.getFullYear();
copyrightYear.textContent = year;
modifiedDate.textContent = date;