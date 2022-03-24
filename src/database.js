const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/peopledb')
  .then(db => console.log('DB is connected'))
  .catch(err => console.log(err))

