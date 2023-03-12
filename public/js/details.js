const trashcan = document.querySelector('button.delete');
        trashcan.addEventListener('click', (e) => {
          const endpoint = `/blogs/${trashcan.dataset.doc}`;
          fetch(endpoint, {
            method: 'DELETE',
          })
          .then(response => response.json())
          .then(data => window.location.href = data.redirect)
          .catch(err => console.log(err));
    });


    /*
          window.location.href = data.redirect
          redirect is the JSON sent from the server "blogController.js"
        */