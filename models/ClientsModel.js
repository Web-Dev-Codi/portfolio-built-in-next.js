import mongoose from 'mongoose';

// Client DB Schema 
const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a text field']
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

const Client = mongoose.model('Client', clientSchema);


export default Client;