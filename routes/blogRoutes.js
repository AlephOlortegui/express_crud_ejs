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

/*
   1 Why did I use GET request to make a delete action?
   2 why did I use POST request to make a patch action?

  1  index.ejs has an anchor tag
        <a href="" > trash icon 
    
    Let's turn to Express js Docs they define Routing:
    
    Routing refers to determining how an ***app responds to a client
    requests to a particular ENDPOINT***, which is a URI or path
    and a specific HTTP request method

    SO THAT anchor tag should go to an specific URI
    localhost:PORT/delete/:id
    as the definition before says the app should respond
    to a what? in my case to a GET request 
    now in my Controller I extract that ID and so on.

  2 Honestly I do not know it just worked when 
    I switch from PATCH to POST method
    enven in the from HTML element I had to switch
    methods too.
*/