const express = require('express');
const router = express.Router();
const Retires = require('../models/myplan')


//Index
router.get('/', (req, res)=>{
  Retires.find((err, foundRetires)=>{
    res.json(foundRetires);
  });
});

//Create
router.post('/', (req, res)=>{
  console.log(req.body);
  Retires.create(req.body, (err, createdRetires)=>{
    res.json(createdRetires);
  });
});

//Delete
router.delete('/:id', (req, res)=>{
  Retires.findByIdAndRemove(req.params.id, (err, deletedRetires)=>{
    res.json(deletedRetires);
  })
})

//Update
router.put('/:id', (req, res)=>{
  Retires.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedRetires)=>{
    res.json(updatedRetires);
  });
});



module.exports = router;
