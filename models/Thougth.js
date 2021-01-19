// linking mongoose
const { Schema, model } = require('mongoose');
// linking reaction model
const reactionSchema = require('./Reaction');
// linking date formatting helper
const dateFormat = require('../utils/dateFormat');

// creating thought schema structor
const thoughtSchema = new Schema(
    {
        // thought text doc
        thoughtText: {
            type: String, 
            required: true,
            minlength: 1,
            maxlength: 280
        },
        //creation doc
        createdAt:{
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        // username doc
        username: {
            type: String,
            required: true
        },
        // reactions array/ calling reaction schema
        reactions: [reactionSchema] 
    },
    {
    // setting data to json
        toJSON: {
            getters: true
        },
        id: false
    }
);

// creating reaction virtual

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
  });

// creating thought model
const Thought = model('Thought', thoughtSchema);

// exporting module
module.exports = Thought;