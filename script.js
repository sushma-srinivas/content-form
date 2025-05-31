// Form validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  const message = document.getElementById("formMessage");

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!name || !email.match(emailPattern)) {
    message.style.color = "red";
    message.textContent = "Please enter a valid name and email.";
  } else {
    message.style.color = "green";
    message.textContent = "Form submitted successfully!";
    this.reset();
  }
});

// To-do list functionality
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.onclick = () => li.remove();

  li.appendChild(removeBtn);
  document.getElementById("taskList").appendChild(li);

  taskInput.value = "";
}