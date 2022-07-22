const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

mongoose.connection.on('open', (ref) => {
    console.log('Connected to MongoDB');
})
mongoose.connection.on('error', (error) => {
    console.log('MongoError:', error);
})

