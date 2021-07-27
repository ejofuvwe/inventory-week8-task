const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require ('../model/User')

// exports.signup = async (req, res)=> {
//     // signup validation
// const foundEmail = await User.findOne({email:req.body.email})
// if(foundEmail) 
// return res.status(400).send('email already exists');

// else if (
//     !req.body.name ||!req.body.email || !req.body.password 
// ) {
//     res.json('All fields need to be filled')
// }

// // hashing password
// const salt = await bcrypt.genSalt(12);
// const hashedPassword = await bcrypt.hash(req.body.password, salt);


// const user = new User({
//     name: req.body.name,
//     email: req.body.email,
//     password: hashedPassword
// })
// console.log(req.body)
// try {
//  const savedUser = await user.save();
//  res.json(savedUser)
//  console.log(savedUser)
// } catch (err) {
//  res.status(400).send(err);

// };


// };

exports.signup = async (req, res, next) => {
    try {
    const {name, email, password } = req.body
    const hashedPassword = await bcrypt.hash(password, 12);
    await User.create({
        name ,
        email,
        password: hashedPassword
    })

    res.status(201).json({
        status: 'success',
        message: 'Signup successful!'
    })
        
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            error: err
        })
    }
    next()
}

exports.signin = async (req, res)=> {
    console.log(req.body)
    const user = await User.findOne({email:req.body.email})
    if(!user) {
        return res.status(400).json({
            status: 'fail',
            message: 'Email does not exist'
        });
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password);

    if(!validPassword) {
        return res.status(401).json({
            status: 'fail',
            message: 'Incorrect credentials!'
        });
    }

    // sign user in and send jwt token
   

    res.status(200).json({
        status: 'success',
        token,
        data: user
    })

}