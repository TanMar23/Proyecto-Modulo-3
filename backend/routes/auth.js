const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('../config/passport');

//Create
router.post('/signup', (req, res, next) => {
  User.register(req.body, req.body.password)
    .then((user) => res.status(201).json({ user }))
    .catch((err) => res.status(500).json({ err }));
});

router.post('/login', passport.authenticate('local'), (req, res, next) => {
  const { user } = req;
  res.status(200).json({ user });
});User

router.get('/logout', (req, res, next) => {
  req.logout();
  res.status(200).json({ msg: 'Logged out' });
});


//Read
router.get('/profile', isAuth, (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => res.status(200).json({ user }))
    .catch((err) => res.status(500).json({ err }));
});


router.get('/user/:id', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id)
    console.log(user);
    res.status(200).json({ user })

  } catch (error) {
    console.log(error); 
  }
})

//Update
router.patch('/user/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const userUpdated = await User.findByIdAndUpdate(id, {...req.body} , { new: true })
    res.status(202).json({ userUpdated })
  } catch(e) {
    res.status(500).json({ e })
  }
})


//Delete
router.delete('/user/:id', (req, res, next) => {
  const { id } = req.params
  User.findByIdAndDelete(id)
    .then(user => res.status(200).json({ user }))
    .catch(error => res.status(500).json({ error }))
})


function isAuth(req, res, next) {
  req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' });
}

module.exports = router;
