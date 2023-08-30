const express = require('express');
const router = express.Router();

router.get('/ejs',(req,res) => {
    res.render('tamplate',{data:"test data"});
});

module.exports = router;