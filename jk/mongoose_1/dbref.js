var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/part10');

var User = mongoose.model('User', {   //定义数据模型
  username: String
});

var News = mongoose.model('News', {
  title: String,
  author: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  }
});

var user = new User({
  username: 'Keven'
});

var news = new News({
  title: 'Congratulation!',
  author: user
})

user.save(function(err){
  if(err) {
    return console.log('save user failed: ', err);
  }

  news.save(function(err){
    if(err) {
      return console.log('save news failed: ', err);
    }

    News.find().populate('author').exec(function(err, doc){
      console.log('after populate: ', err, doc);
    });
  })
})