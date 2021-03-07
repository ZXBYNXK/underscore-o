import { connect } from "mongoose";
export default ({ uri, danger, success }) => {
   connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log(success || "Connected to database.");
  };
