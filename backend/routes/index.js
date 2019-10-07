const router = require('express').Router();
const CentrosAcopio = require('../models/CentrosAcopio')

router.get('/centers', async (req, res, next) => {
  try {
    const places = await CentrosAcopio.find()
    console.log(places);
    res.status(200).json({ places })

  } catch (error) {
    console.log(error); 
  }
})


router.get('/center/:id', async (req, res, next) => {
  try {
    const place = await CentrosAcopio.findById(req.params.id)
    console.log(place);
    res.status(200).json({ place })

  } catch (error) {
    console.log(error); 
  }
})


router.get('/centers/:categoryCenter', async (req, res, next) => {
  try {
    const { categoryCenter } = req.params
    const centersInCategory = await CentrosAcopio.find({ tipoResiduo: String(categoryCenter).toUpperCase() })
    console.log(centersInCategory);
    res.status(200).json({ centersInCategory })

  } catch (error) {
    console.log(error); 
  }
})


router.post('/create-new', (req, res, next) => {
  console.log(req.body)
  CentrosAcopio.create(req.body)
  .then(newCenter => res.status(201).json({ newCenter }))
  .catch(err => res.status(500).json({ err }))
})


module.exports = router;
