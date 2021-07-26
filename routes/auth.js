const express = require('express')

const router = express.Router();
const authcontroller = require('../controllers/authcontro')


// router.get('/register', (req, res)=> {
//     res.send('register');
// })

router.post('/signup', authcontroller.signup);
router.post('/signin', authcontroller.signin);






module.exports = router;