const router = require('express').Router();
const passport = require('passport');


//auth login 
router.get('/signIn',(req,res)=> {
    res.render('signIn');
});

//auth logout 
// router.get('/logout', (req,res) => {
//     //handles with passport 
//     res.send('logging out');
// })

//auth with google
router.get('/google',passport.authenticate('google',{
    scope:['profile']
}));

module.exports=router; 
 
