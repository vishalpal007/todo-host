const asyncHandler = require("express-async-handler")
const Todo = require("../modals/Todo")


exports.addTodo = asyncHandler(async (req, res) => {
    await Todo.create(req.body)
    res.json({ message: "Todo Create Success" })
})


exports.getTodo = asyncHandler(async (req, res) => {
    const result = await Todo.find()
    res.json({ message: "Todo Fetch Success", result })
})


exports.deleteTodo = asyncHandler(async (req, res) => {
    const { id } = req.params
    await Todo.findByIdAndDelete(id)
    res.json({ message: "Todo Delete Success" })
})


exports.updateTodo = asyncHandler(async (req, res) => {
    const { id } = req.params
    console.log(req.body);
    await Todo.findByIdAndUpdate(id, req.body)
    res.json({ message: "Todo Update Success" })
})