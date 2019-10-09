const router = require('express').Router();
const CentrosAcopio = require('../models/CentrosAcopio')
const User = require('../models/User')
const Contribution = require('../models/Contribution')


//CENTERS
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
  CentrosAcopio.create(req.body)
  .then(newCenter => res.status(201).json({ newCenter }))
  .catch(err => res.status(500).json({ err }))
})



//CONTRIBUTIONS

router.post('/add-contribution', (req, res, next) => {
  Contribution.create(req.body)
  .then(newContribution => res.status(201).json({ newContribution }))
  .catch(err => res.status(500).json({ err }))
})


router.get('/contribution-list', async (req, res, next) => {
  try {
    const contributions = await Contribution.find()
    console.log(contributions);
    res.status(200).json({ contributions })

  } catch (error) {
    console.log(error); 
  }
})

// router.get('/contribution/:id', async (req, res, next) => {
//   try {
//     const contribution = await Contribution.findById(req.params.id)
//     console.log(contribution);
//     res.status(200).json({ contribution })

//   } catch (error) {
//     console.log(error); 
//   }
// })


router.delete('/contribution/:id', (req, res, next) => {
  const { id } = req.params
  Contribution.findByIdAndDelete(id)
    .then(contribution => res.status(200).json({ contribution }))
    .catch(error => res.status(500).json({ error }))
})



router.get('/levelup/:id', async (req, res, next) => {
  try{
    const { id } = req.params
    console.log('id',id)
    const details=id.split("-")
    console.log(details[0],details[1])
    await User.findById(details[0],function (err,user){
      if(Number(details[1]) === user.pin){
        user.level += 1
        user.pin = null
      }
      else{
        return res.status(204).json({message: 'Pin no encontrado'})
      }
      user.save()
     })
    return res.status(200).json({message: 'subiste de nivel'})
  } catch (error){
    console.log(error)
  }
})

router.post('/levelup', async (req, res, next) => {
  try{
    const { id,pin } = req.body
    console.log(id,pin)
    await User.findById(id,function (err,user){
      user.pin = pin
      user.save() 
    })
    res.status(200).json({message: 'Info recibida'})
  } catch (error){
    console.log(error)
  }
})


module.exports = router;
