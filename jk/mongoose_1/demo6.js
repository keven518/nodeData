var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/part10');

var BookSchema = new mongoose.Schema({      //声明一个数据模型
  name: String,
  isbn: Number
})

BookSchema.statics.findByISBN = function(isbn, cb){   //声明一个静态方法
  this.findOne({isbn: isbn}, function(err, doc){
    cb(err, doc);
  });
};

BookSchema.methods.print = function(){    //声明一个实例方法
  console.log('Book Information: ');
  console.log('\tTitle: ', this.name);
  console.log('\tISBN: ', this.isbn);
  console.log('\tthis: ', this);
}

var Book = mongoose.model('Book_kv', BookSchema);

var book = new Book({
  name: 'MEAN Web Development',
  isbn: 9787100
});


book.save(function(err){
  if(err) {
    return console.log('save book failed', err);
  }

  Book.findByISBN(9787100, function(err, doc){
    console.log('findByISBN, err, doc', err, doc);
  });

  book.print();
})

