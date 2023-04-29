const checkBox = document.querySelectorAll(
  "input[data-checkedState=true]"
);
console.log(checkBox);
const checkBoxArray = Array.from(checkBox);
for (let checkBox of checkBoxArray) {
  checkBox.checked = true;
}
document.addEventListener("click", e => {
  if (e.target.matches("input[type=checkbox]")) {
    const parent = e.target.closest("a[data-todo-check-target]");
    const currentCheckBox = e.target;
    currentCheckBox.dataset.checkedState = e.target.checked;
    const id =currentCheckBox.dataset.id;
    const state = currentCheckBox.dataset.checkedState;
    console.log(state)
    parent.href = `/check/?id=${id}&state=${state}`;
    parent.click();
  }
});
