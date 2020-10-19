const express = require('express');
const router = express.Router();

//Models
const Book = require('../models/Book');


router.post('/new', function(req, res, next) {
  const book = new Book({
    title: "Udemy",
    published: false,
    comments: [
      {message: "Çok güzel bir kitap."},
      {message: "Ben pek beğenmedim."}
    ],
    meta: {
      votes: 12,
      favs: 5
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

module.exports = router;
