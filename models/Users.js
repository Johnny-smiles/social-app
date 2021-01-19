// requiring mongoose
const { Schema, model } = require('mongoose');

// creating new Schema
const userSchema = new Schema(
    {
        // user name creation
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        // email creation 
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must match an email address!'],
        },
        // thougths array
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            },
        ],
        // friends array
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref:'User',
            },
        ],
    },
    // virtual object
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// creating virtual to count number of friends 
userSchema.virtual('freindCount').get(function () {
    return this.friends.length;
}); 

//creating user model 
const User = model('User', userSchema);

// exporting to app
module.exports = User; 