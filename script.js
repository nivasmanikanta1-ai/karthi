const form = document.getElementById("appointmentForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const department = document.getElementById("department").value;
  const date = document.getElementById("date").value;

  if (!name || !phone || !department || !date) {
    message.textContent = "Please fill in all appointment details.";
    return;
  }

  message.textContent =
    "Thank you, " + name + ". Your appointment request has been received.";

  form.reset();
});
