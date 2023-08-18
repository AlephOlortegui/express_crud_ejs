const {Router} = require('express')
const router = Router();
const {
    blog_index, 
  blog_details, 
  blog_create_get, 
  blog_create_post, 
  blog_delete,
  get_one_blog,
  patch_one_blog,
  deleteAll
} = require('../controllers/blogController')

// Set the route from most specific to the most general route

router
    .route('/edit/:id')
    .get(get_one_blog)
    .post(patch_one_blog)//.patch(patch_one_blog)

router.route('/create').get(blog_create_get)

router.route('/deleteAll').get(deleteAll)
    
router.route('/:id')
    .get(blog_details)
    .delete(blog_delete)

router
    .route('/')
    .get(blog_index)
    .post(blog_create_post)

module.exports = router

/*Honestly I do not know it just worked when 
    I switch from PATCH to POST method
    enven in the from HTML element I had to switch
    methods too.
*/