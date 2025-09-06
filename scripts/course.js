const courses = [
  {
    subject: "WDD",
    number: 130,
    title: "Web Fundamentals",
    credits: 3,
    completed: true
  },
  {
    subject: "WDD",
    number: 131,
    title: "Dynamic Web Fundamentals",
    credits: 3,
    completed: false
  },
  {
    subject: "WDD",
    number: 231,
    title: "Frontend Development",
    credits: 3,
    completed: false
  },
  {
    subject: "CSE",
    number: 110,
    title: "Introduction to Programming",
    credits: 2,
    completed: true
  }
];

const courseCards = document.querySelector("#course-cards");
const totalCredits = document.querySelector("#total-credits");

function renderCourses(courseList) {
  courseCards.innerHTML = "";
  let credits = 0;

  courseList.forEach(course => {
    const card = document.createElement("div");
    card.classList.add("course-card");
    if (course.completed) card.classList.add("completed");

    card.innerHTML = `
      <h3>${course.subject} ${course.number}</h3>
      <p>${course.title}</p>
      <p>Credits: ${course.credits}</p>
      <p>Status: ${course.completed ? "Completed ✅" : "In Progress ⏳"}</p>
    `;
    courseCards.appendChild(card);
    credits += course.credits;
  });

  totalCredits.textContent = `Total credits displayed: ${credits}`;
}

document.querySelector("#all").addEventListener("click", () => renderCourses(courses));
document.querySelector("#wdd").addEventListener("click", () => renderCourses(courses.filter(c => c.subject === "WDD")));
document.querySelector("#cse").addEventListener("click", () => renderCourses(courses.filter(c => c.subject === "CSE")));

renderCourses(courses);
