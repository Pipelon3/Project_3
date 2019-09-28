// modules
const router = require('express').Router();
const path = require('path');


///passport 
router.get('/signIn', (req, res) => {
  console.log('hit signin')
  res.sendFile(path.join(__dirname, '../../public/signIn.html'));
});

router.get('/malls', (req, res) => {
  console.log('hit signin')
  res.sendFile(path.join(__dirname, '../../public/malls.html'));
});

// bathroom 
router.get('/bathroom', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/bathroom.html'));
});

module.exports = router;