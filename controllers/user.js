const express = require('express')
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const router = express.Router()
router.post('/auth/register', async (req, res) => {
    const { username, password } = req.body
    const existingUser = await User.findOne({ username })
    if (existingUser) {
        res.status(400).json({ msg: 'You already have an account' })
    }
    const hashedPassword = bcrypt.hash(password, 10)
    // const user = new User({username,password})


})
router.post('/auth/login', async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username })
    if (!user) {
        res.status(400).json({ msg: 'There is no user with that' })
    }
})