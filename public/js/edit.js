const form = document.querySelector('.create-blog form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const url = form.action
    console.log(url) // localhost:3000/blogs
    

   /*  fetch(url, {method: 'PATCH'})
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err)) */
})