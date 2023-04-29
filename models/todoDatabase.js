const mongoose = require("mongoose");
const todoAdvancedSchema = new mongoose.Schema({
  todoName: String,
  category: String,
  checkedState:{
    type:Boolean,
    default: false
  },
  date: String,
});
module.exports = TodoAdvanced = mongoose.model("TodoAdvanced", todoAdvancedSchema);
