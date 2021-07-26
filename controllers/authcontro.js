
const User = require ('../model/User')
const bcrypt = require('bcryptjs');

exports.signup = async (req, res)=> {

    // signup validation
const foundEmail = await User.findOne({email:req.body.email})
if(foundEmail) 
return res.status(400).send('email already exists');

else if (
    !req.body.name ||!req.body.email || !req.body.password 
) {
    res.json('All fields need to be filled')
}

// hashing password
const salt = await bcrypt.genSalt(12);
const hashedPassword = await bcrypt.hash(req.body.password, salt);


const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword
})
console.log(req.body)
try {
 const savedUser = await user.save();
 res.json(savedUser)
 console.log(savedUser)
} catch (err) {
 res.status(400).send(err);

};


};

// signin

// exports.signup = async (req, res) => {
//     console.log(req)
//     const {name, email, password } = req.body


//     const hashedPassword = await bcrypt.hash(password, 12);
//     console.log(hashedPassword)
    


// }

exports.signin = async (req, res)=> {
    console.log(req.body)
    const user = await User.findOne({email:req.body.email})
    if(!user) return res.status(400).send('Email does not exist');

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) 
    return res.status(400).send('invalid password');

    res.send('logged in')

}