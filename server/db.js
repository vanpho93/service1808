const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

const WordSchema = new Schema({
    en: { type: String, unique: true, trim: true, minlength: 1 },
    vn: { type: String, trim: true, minlength: 1 }
});

const Word = mongoose.model('words', WordSchema);

mongoose.connect('mongodb://localhost/mean1808', { useMongoClient: true });

module.exports = Word;