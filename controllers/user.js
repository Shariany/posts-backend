
const Use = require ("../models/user");

const register = async (req, res) => {
    const {email, password, confirmPassword, firstName, lastName} = req.body

    try {
        const existingUser = await UserActivation.findOne({email});

        if (existingUser) return res.status(404).json({message: "User already exists"})
        
        if (password !== confirmPassword) return res.status(400).json({ message:"Password mis-match"})

            const hashedPassword = await bcrypt.hash(password, 12);

            const result = await  User.create({ email, password:hashedPassword, name:'${firstName} ${lastName}'});

            token = jwt.sign({})



     } catch (error) {
        res.status(500).json({ message: error })
     }
    }

    const login = async (req, res) => {
        const {email, password} = req.body
        try {
            const  existingUser = await User.findOne({email})
            if (!existingUser) return res.status(400).json({message: "User "})

            const isPasswordCorect = await  bcrypt.compare(password, existingUser) 
        } catch (error) {
            
        }
    }
module.exports = {
    register,
    login
}