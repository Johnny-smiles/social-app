// linking mongoose
const { Schema, model } = require('mongoose');
// linking reaction model
const reactionSchema = require('./Reaction');
// linking helper date format
const dateFormat = require('../utils/dateFormat');

const thoughtSchema = new Schema(
    {
        // creating text doc
        thoughtText: {
            type: String,
            required: 'You need to leave a thought!',
            minlength: 1,
            maxlenght: 280
        },
        // creating creation doc
        createdAt: {
            type: Date, 
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        //creating usernae doc
        username: {
            type: String,
            requried: true
        },
        // creating reactions array
        reactions: [reactionSchema]
    },
    //converting data into json
    {
        toJSON: {
            getters: true
        },
        id: false
    }
);

// creating virtual 
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reaction.length;
});
// creating model
const Thought = model('Thought', thoughtSchema);

// exporting thought to app
module.exports = Thought;