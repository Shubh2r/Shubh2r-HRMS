const users = [
  { role: "HR", username: "Shubham", password: "Shubh2r@4324" },
  { role: "Employee", username: "emp001", password: "emp@123" }
];

function login() {
  const role = document.getElementById("role").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("error-msg");

  const user = users.find(u => u.role === role && u.username === username && u.password === password);

  if (user) {
    if (role === "HR") {
      window.location.href = "hr_dashboard.html";
    } else {
      localStorage.setItem("employee", username);
      window.location.href = "employee_dashboard.html";
    }
  } else {
    errorMsg.textContent = "Invalid credentials!";
  }
}
