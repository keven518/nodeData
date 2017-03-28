// setter 修饰符

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/part10');

var User = mongoose.model('User', {
  nickname: {
    type:String,
    trim: true        //去空格的修饰符
  },
  blog: {
    type: String,
    set: function(url){
      if(!url) return url;

      if(0 === url.indexOf('http://') && 0 !== url.indexOf('https://'))
        url = 'http://' + url;

      return url;
    }
  }
});

var user = new User({
  nickname: "    Kv    ",
  blog: '51zovan.com'
});

console.log('user', user)