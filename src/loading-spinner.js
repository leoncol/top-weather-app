export { createSpinner, deleteSpinner };

function createSpinner() {
  const spinner = document.createElement("div");
  spinner.className = "loader";
  const textBox = document.querySelector(".text-box");
  textBox.prepend(spinner);
}

function deleteSpinner() {
  const spinner = document.querySelector(".loader");
  spinner.remove();
}
