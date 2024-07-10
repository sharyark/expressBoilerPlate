// routes/todoRoutes.js
import express from 'express';
const router = express.Router();
import { getTodos, createTodo, deleteTodo, updateTodo } from '../controllers/todoController.js';

router.get('/todos', getTodos);
router.post('/todos', createTodo);
router.delete('/todos/:id', deleteTodo);
router.put('/todos/:id', updateTodo);

export default router;
