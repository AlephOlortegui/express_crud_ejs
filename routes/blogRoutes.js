const {Router} = require('express')
const router = Router();
const {
    blog_index, 
  blog_details, 
  blog_create_get, 
  blog_create_post, 
  blog_delete
} = require('../controllers/blogController')

router
    .route('/')
    .get(blog_index)
    .post(blog_create_post)

router.route('/create').get(blog_create_get)
    
router.route('/:id')
    .get(blog_details)
    .delete(blog_delete)

module.exports = router