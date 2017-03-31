var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/part10');

var ResellerSchama = new mongoose.Schema({
  address: String
});

ResellerSchama.post('save', function (next) {
  console.log('this is ResellerSchama post save middleware');
});

ResellerSchama.pre('save', true, function(next, done){
  console.log('this is ResellerSchama pre save middleware');
  next();
  done();
})

var Reseller = mongoose.model('Reseller', ResellerSchama);

var reseller = new Reseller({
  address: '103st, People Rode'
})

reseller.save();