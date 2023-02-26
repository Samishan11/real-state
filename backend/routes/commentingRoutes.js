const express = require('express');

const { postReview, showComments, likeComment, myReviews } = require('../controller/commentingController');
const { verifyUser } = require('../middleware/auth');
const router = express.Router()

router.route('/post-review/:propertyId').post(verifyUser, postReview)
router.route('/show-comments/:propertyId').get(verifyUser, showComments)
router.route('/my-reviews').get(verifyUser, myReviews)
router.route('/like-comment').put(verifyUser, likeComment)

module.exports = router;