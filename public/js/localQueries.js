// Save address to localStorage on form submit
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const input = document.querySelector("input[name='address']");

  // Load saved address when page loads
  const savedAddress = localStorage.getItem("address");
  if (savedAddress && input && !input.value) {
    input.value = savedAddress;
  }

  // Save address when form is submitted
  if (form && input) {
    form.addEventListener("submit", () => {
      localStorage.setItem("address", input.value);
    });
  }
});