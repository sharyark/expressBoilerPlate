// controllers/todoController.js
import Todo from '../models/Todo.js';

const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.render('todos/index', { todos });
    } catch (err) {
        console.error('Error fetching todos:', err);
        res.status(500).send('Server Error');
    }
};

const createTodo = async (req, res) => {
    try {
        await Todo.create(req.body);
        res.redirect('/todos');
    } catch (err) {
        console.error('Error creating todo:', err);
        res.status(500).send('Server Error');
    }
};

const deleteTodo = async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.redirect('/todos');
    } catch (err) {
        console.error('Error deleting todo:', err);
        res.status(500).send('Server Error');
    }
};

const updateTodo = async (req, res) => {
    try {
        await Todo.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/todos');
    } catch (err) {
        console.error('Error updating todo:', err);
        res.status(500).send('Server Error');
    }
};

export { getTodos, createTodo, deleteTodo, updateTodo };
