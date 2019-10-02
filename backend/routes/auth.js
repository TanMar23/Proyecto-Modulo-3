const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('../config/passport');
const CentrosAcopio = require('../models/CentrosAcopio')

router.post('/signup', (req, res, next) => {
  User.register(req.body, req.body.password)
    .then((user) => res.status(201).json({ user }))
    .catch((err) => res.status(500).json({ err }));
});

router.post('/login', passport.authenticate('local'), (req, res, next) => {
  const { user } = req;
  res.status(200).json({ user });
});

router.get('/logout', (req, res, next) => {
  req.logout();
  res.status(200).json({ msg: 'Logged out' });
});

router.get('/profile', isAuth, (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => res.status(200).json({ user }))
    .catch((err) => res.status(500).json({ err }));
});

router.get('/centers', async (req, res) => {
  try {
    const places = await CentrosAcopio.find()
    console.log(places);
    res.status(200).json({ places })

  } catch (error) {
    console.log(error); 
  }
})


router.get('/center/:id', async (req, res) => {
  try {
    const place = await CentrosAcopio.findById(req.params.id)
    console.log(place);
    res.status(200).json({ place })

  } catch (error) {
    console.log(error); 
  }
})


function isAuth(req, res, next) {
  req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' });
}

module.exports = router;
