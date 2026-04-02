const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const  Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validatereview, isLoggedIn, isreviewAuthor} = require("../middleware.js");


//Reviews
router.post("/", isLoggedIn,validatereview, wrapAsync(async(req,res)=>{
   let listing = await Listing.findById(req.params.id);
   let newreview = new Review(req.body.review);
   newreview.author = req.user._id;
   listing.reviews.push(newreview);


   await newreview.save();
   await listing.save();
   req.flash("success","New Review created!");
   res.redirect(`/listings/${listing._id}`);
}));
// delete review
router.delete("/:reviewId",isLoggedIn,isreviewAuthor,wrapAsync(async(req,res)=>{
  let {id,reviewId} = req.params;
   await Listing.findByIdAndUpdate(id,{$pull: {reviews: reviewId} });
   await Review.findByIdAndDelete(reviewId);
   req.flash("success","Review Deleted!");
   res.redirect(`/listings/${id}`);
}));

module.exports=router;