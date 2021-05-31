/* 
  New: 
    Write the file as is and then possibly execute a shell script to install 
    requrirements which are npm and nodejs (Depenedencies: Express, Mongoose, bcryptjs)
    -- May leave an arbitrary option for the user to add but some dependencies are mandatory for 
    this application to work.
*/


// OLD: Causes errors --Cannot find package mongoose.
// Without nodejs and or npm packages: express and mongoose
// const mongoose = require("mongoose");
// module.exports = ({ uri, danger, success }) => {
//    mongoose.connect(uri, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true,
//       useFindAndModify: false,
//     });
//     console.log(success || "Connected to database.");
//   };


