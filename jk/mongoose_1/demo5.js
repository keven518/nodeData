// virtual 虚拟属性

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/part10');

var BookSchema = new mongoose.Schema({
  isbh: {
    type: Number,
    unique: true,    //唯一索引
    default: 1234
  },
  name: {
    type: String,
    index: true,     //辅助索引
    default: 'js编程艺术'
  }
});

var Book = mongoose.model('Book', BookSchema);

var book = new Book();

book.save(function(err){
  if(err) console.log('err: ', err);
  console.log('book: ', book);
})


