const express = require("express");
const router = express.Router();
const TodoAdvanced = require("../models/todoDatabase");
router.use(express.urlencoded({ extended: true }));

router.post("/add-todo", async (req, res) => {
  const { desc: desc, category: category, date: date } = req.body;
  TodoAdvanced.create({
    todoName: desc,
    category: category,
    date: date,
  });
  res.redirect("/");
});
router.get("/delete-todo", async (req, res) => {
  TodoAdvanced.deleteMany({ checkedState: "true" }).catch(e =>
    console.log("error in deleting ")
  );
  res.redirect("/");
});
router.get("/check/", async (req, res) => {
  const id = req.query.id;
  const state = req.query.state;
  console.log(state);
  await TodoAdvanced.findByIdAndUpdate(
    id,
    { checkedState: state },
  ).then(docs=> { console.log("Updated User : ", docs);}).catch(err =>{console.log(err);});
  res.redirect('/')
});
router.get("/", async (req, res) => {
  const data =TodoAdvanced.find({}).then(data => data);
  res.render("app", { todo_list: Array.from(data) });
});
module.exports = router;
