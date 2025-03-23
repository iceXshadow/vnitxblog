import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
        email: {
            type: String, 
            required: true,
            unique: true,
        }, 
        userName: {
            type: String, 
            default: "",
        },
        password: {
            type: String, 
            required: true,
            minlength: 6,
        },
        avatar: {
            type: String,
            default: "",
        },
    },
    { timestamps: true }
);

// Generate random funny username
userSchema.pre('save', function(next) {
    if (!this.userName) {
        const adjectives = ['Happy', 'Silly', 'Dancing', 'Jumping', 'Sleepy', 'Hungry', 'Clever', 'Witty'];
        const nouns = ['Panda', 'Unicorn', 'Penguin', 'Dragon', 'Potato', 'Ninja', 'Pirate', 'Robot'];
        const randomNum = Math.floor(Math.random() * 1000);
        
        const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
        const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
        
        this.userName = `${randomAdjective}${randomNoun}${randomNum}`;
    }
    next();
});

const User = mongoose.model("User", userSchema);

export default User;