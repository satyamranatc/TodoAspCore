let TaskForm = document.getElementById("TaskForm");

TaskForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  let Task = {
    Id: e.target[0].value,

    Title: e.target[1].value,

    TaskDescription: e.target[2].value,

    Level: e.target[3].value,
  };
  let Res = await axios.post("http://localhost:5288/api/Tasks", Task);
  console.log(Res);
});
