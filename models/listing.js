const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listeningSchema = new Schema({
    title:
    {
        type:String,
        required:true
    },
    description:
    {
        type:String,
        required:true
    },
    image:
    { filename:{
            type:String,
            default:"listeningimage",
        },
        url:{
            type:String,
            default:"https://twocontinents.com/attraction/img-worlds-of-adventure",
        }
    },
    price:Number,
    location:String,
    country:String,
});
const Listing = mongoose.model("Listing",listeningSchema);
module.exports = Listing;