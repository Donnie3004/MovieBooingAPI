import mongoose from "mongoose";

const moviesSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  casts:{
    type:[String],
    required:true
  },
  trailerURL: {
    type:String,
    required: true
  },
  language: {
    type: String,
    required: true,
    default: "English"
  },
  releaseDate: {
    type:String,
    required:true
  },
  director: {
    type:String,
    required:true
  },
  releaseStatus:{
    type:String,
    required:true,
    default: "Released"
  }
}, {timestamps:true});

const movieModel = mongoose.model("Movie", moviesSchema);

export default movieModel;