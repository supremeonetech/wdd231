const courses = [
  { code: "WDD130", name: "Web Fundamentals", credits: 3, completed: true },
  { code: "WDD131", name: "Web Development I", credits: 3, completed: true },
  { code: "WDD231", name: "Web Frontend Development I", credits: 3, completed: false },
  { code: "CSE110", name: "Programming Basics", credits: 2, completed: false }
];

const container = document.getElementById("courses");
const totalCredits = document.createElement("p");

function displayCourses(list) {
  container.innerHTML = "";
  let creditSum = 0;

  list.forEach(course => {
    const div = document.createElement("div");
    div.classList.add("course");
    if (course.completed) div.classList.add("completed");

    div.innerHTML = `<h3>${course.code} - ${course.name}</h3>
                     <p>Credits: ${course.credits}</p>`;

    container.appendChild(div);
    creditSum += course.credits;
  });

  totalCredits.textContent = `Total Credits: ${creditSum}`;
  container.appendChild(totalCredits);
}

displayCourses(courses);