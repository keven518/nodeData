var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/part10');

var OrderSchema = new mongoose.Schema({      //声明一个数据模型
  count: {
    type: Number,
    required: true,
    max: 1000,
    min: 10
  },
  status: {
    type: String,
    enum: ['created', 'success', 'failed']
  },
  desc: {
    type: String,
    match: /book/g,
    validate: function(desc) {
      return desc.length >= 10;
    } 
  }
});

var Order = mongoose.model('Order', OrderSchema);

var order = new Order({
  count: 100,
  status: 'success',
  desc: 'g book'
});
// order.count = 10000;

order.save(function(err){
  if(err) {
    return console.log('save failed: ', err);
  }

  console.log('save success');
})