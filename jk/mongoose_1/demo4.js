// virtual 虚拟属性

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/part10');

var PersonSchema = new mongoose.Schema({
  fristName: String,
  lastName: String
});

PersonSchema.virtual('fullName').get(function() {
  return this.fristName + ' ' + this.lastName;
})

PersonSchema.set('toJSON', {getters: true, virtual: true});

var Person = mongoose.model('Person', PersonSchema);

var person = new Person({
  fristName: '柯文',
  lastName: '蔡曼曼'
})

console.log('user fullName: ', person.fullName);
console.log('user: ', person);
console.log('JSON: ', JSON.stringify(person));