const express = require('express');
const router = express.Router();

//Models
const Book = require('../models/Book');


router.post('/new', function(req, res, next) {
  const book = new Book({
    title: "Üçüncü",
    published: false,
    comments: [
      {message: "Çok güzel bir kitap."},
      {message: "Ben pek beğenmedim."}
    ],
    meta: {
      votes: 12,
      favs: 7
    }
  });
  book.save((err, data)=>{
    if(err){
      console.log(err);
    }
    res.json(data);
  })
});

router.get('/search', (req, res) =>{
  Book.find({published: true}, 'title comments', (err, data) =>{
    if(err){
      console.log(err);
    }
    
    res.json(data);
  });
});

router.get('/searchOne', (req, res) =>{
  Book.findOne({title: "Udemy"}, (err, data) =>{
    if(err) console.log(err);

    res.json(data);
  });
});

router.get('/findById', (req, res) =>{
  Book.findById('5f8d978a214520229e6162c5', (err, data) =>{
    if(err) console.log(err);

    res.json(data);
  });
});

router.put('/update', (req, res) =>{
  Book.update({published: false}, {published: true}, (err, data) =>{
    if(err) console.log(err);

    res.json(data);
  });
});

router.get('/sort', (req, res)=>{
  Book.find({}, (err, data)=>{
    res.json(data);
  }).sort({'meta.favs': 1});
});

//limit and skip
router.get('/limitandskip', (req, res)=>{
  Book.find({}, (err, data)=>{
    res.json(data);
  }).skip(2)
  .limit(1);
});

//aggregate->kümeleme
router.get('/aggregate', (req, res)=>{
  Book.aggregate([
    {
      $match: {
        //published: true
      }
    },
    /*{
      $group: {
        _id: "$category",
        adet: {$sum: 1}
      }
    },*/
    {
      $project: {
        title: 1,
        meta: 1
      }
    }
  ], (err, data)=>{
    res.json(data);
  });
});

router.get('/aggregate-lookup', (req, res)=>{
  Book.aggregate([
    {
      $lookup: {
        from: 'users',
        localField: ''
      }
    }
  ], (err, data)=>{
    res.json(data);
  });
});

module.exports = router;
