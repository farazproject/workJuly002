const express = require('express');


const router = express.Router();
// Connect to the database

const { createUser } = require('../controllers/createUserController');

// Define the route for creating a user
router.post('/create', createUser);


const { updateUser } = require('../controllers/createUserController');
// Define the route for updating a user
router.put('/update/:id', updateUser);

const { getUserById } = require('../controllers/createUserController');
// Define the route for getting a user by ID
router.get('/get/:id', getUserById);

const { getAllUsers } = require('../controllers/createUserController');
// Define the route for getting all users 
router.get('/getall', getAllUsers);

const { deleteUser } = require('../controllers/createUserController');
// Define the route for deleting a user
router.delete('/delete/:id', deleteUser);


module.exports = router;