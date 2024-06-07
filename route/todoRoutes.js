const { getTodo, addTodo, updateTodo, deleteTodo } = require("../controller/todoController")

const router = require("express").Router()

router
    .get("/", getTodo)
    .post('/', addTodo)
    .delete("/:id", deleteTodo)
    .put("/:id", updateTodo)


module.exports = router