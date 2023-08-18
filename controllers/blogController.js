const Blog = require("../models/blog");

const blog_index = async (req, res) => {
    try {
        const blogs = await Blog.find().sort({createdAt: -1})
        //console.log(blogs) // [{},{},{}...] if we have posts otherwise []
        res.render('index',{myTitle: 'All Blogs', blogs})
    } catch (err) {
        console.log(err)
    }
}

const blog_details = async (req, res) => {
    try {
        const id = req.params.id;
        const blog = await Blog.findById(id)
        if(!blog){
            throw Error('No blog found')
        }
        return res.render('details', {myTitle: 'Blog Details', blog})
    } catch (err) {
        console.log(err.message)
        res.status(404).render('404', {myTitle: '404'})
    }
}

const get_one_blog = async (req,res) => {
    try {
        const id = req.params.id;
        const blog = await Blog.findById(id)
        if(!blog){
            throw Error('No user found')
        }
        return res.render('edit', {myTitle: 'Edit Blog', blog})
    } catch (err) {
        console.log(err.message)
        return res.status(404).render('404', {myTitle: '404'})
    }
}

const patch_one_blog = async (req,res) => { 
    try {
        const prevBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {new: true})
        console.log(prevBlog)
        res.redirect('/blogs')

    } catch (err) {
        console.error(err);
        res.status(500).send('Error updating user');
    }
}

const blog_create_get = (req, res) => {
    res.render('create', {myTitle: 'Create a new Blog', blog:null})
}

const blog_create_post = async (req, res) => {
    try {
        //console.log(req.body) //an object {title: '', snippet,body}
        await Blog.create(req.body) //const blog = new Blog(req.body) then blog.save()
        res.redirect('/blogs')
    } catch (err) {
        console.log(err)
    }
}

const blog_delete = async (req, res) => {
    try {
        const id = req.params.id;
        await Blog.findByIdAndDelete(id)
        res.json({ redirect: '/blogs' });
    } catch (err) {
        console.log(err)
    }
}

const deleteAll = async (req,res) => { 
    try {
        await Blog.deleteMany({}) // {empty object} means delete ALL
        return res.redirect('/')
    
      } catch (err) {
        return res.status(500).json({error: 'Server Error'});
      }
}

module.exports = {
    blog_index, 
  blog_details, 
  blog_create_get, 
  blog_create_post, 
  blog_delete,
  get_one_blog,
  patch_one_blog,
  deleteAll
}