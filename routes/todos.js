import { Router } from 'express';
import { index } from '../controllers/todos.js';
const router = Router();

router.get('/',index);

export { router };


// const todos = [
//   {
//     id: 1,
//     title: 'Learn Node.js',
//     description: 'Read the Node.js documentation and complete tutorials.',
//     completed: false,
//   },
//   {
//     id: 2,
//     title: 'Buy Groceries',
//     description: 'Purchase milk, bread, eggs, and vegetables.',
//     completed: false,
//   },
//   {
//     id: 3,
//     title: 'Workout',
//     description: 'Go to the gym for a 1-hour workout session.',
//     completed: true,
//   },
//   {
//     id: 4,
//     title: 'Clean the House',
//     description: 'Vacuum the living room and clean the kitchen.',
//     completed: false,
//   },
//   {
//     id: 5,
//     title: 'Pay Bills',
//     description: 'Pay electricity and internet bills.',
//     completed: true,
//   },
// ];