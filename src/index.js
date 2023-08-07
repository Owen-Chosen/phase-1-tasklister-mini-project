document.addEventListener("DOMContentLoaded", () => {

  const list = document.querySelector ("#list");

  list.style.padding = "20px";
  //list.style.alignItems = "center";

  const form = document.querySelector ("#create-task-form");

  form.addEventListener ('submit', (e) => {
    e.preventDefault();
    let inputText = e.target.querySelector("#new-task-description").value;
    if (inputText != "") {
      const li = document.createElement("li");
      li.style.listStyleType = "none"
      const btn = document.createElement ("button");
      li.textContent = inputText;
      btn.textContent = "x"; btn.className = "button";
      const ul = document.querySelector("#tasks");
      ul.append(li);
      li.append(btn);
      li.style.paddingLeft = "10px";
      li.style.paddingRight = "10px";
      btn.style.position = "relative";
      btn.style.width = "25px";
      btn.style.height = "20px";
      btn.style.marginBottom = "7px";
      btn.style.marginLeft = "15px";

      form.reset();
    }
  })

  
  const tasks = document.querySelector ("#tasks");

  tasks.addEventListener ('click', (e) => {
    if (e.target.className) {
      e.target.parentNode.remove();
    }
  });
});