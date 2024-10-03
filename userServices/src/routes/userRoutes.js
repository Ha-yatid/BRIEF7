// src/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const {
  createUser,
  getUsers,
  getUserById,
  updateUser
} = require('../controllers/userController');

router.route('/users')
  .post(createUser)
  .get(getUsers);

router.route('/users/:id')
  .get(getUserById)
  .put(updateUser);

module.exports = router;
