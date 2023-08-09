import React, { useState } from 'react'
import image from '../../assets/no-image-found.jpg'
import styles from './add-book.module.css'

function AddBook() {
  const [ title, setTitle ] = useState('');
  const [ slug, setSlug ] = useState('');

  const addBook = async (e) => {
    e.preventDefault();
    console.table([title, slug])
    
    try {
      const resp = await fetch('/api/books', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title,
          slug: slug,
        }),
      });
      console.log(resp)

      // if (resp.ok) {
      //   setTitle(''),
      //   setSlug('');
      // } else {
      //   console.log('failed to submit data.')
      // }

    } catch (error) {
      console.log(error)
    }
  };

  return (
    <form className="bookdetails" onSubmit={addBook}>
          <div>
            <label>Upload Thumbnail</label>
            <img src={image} alt="preview image" />
            <input 
            
            type="file" accept="image/gif, image/jpeg, image/png" />
          </div>
          <div>
            <div>
              <label>Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div>
              <label>Slug</label>
              <input
                type="text"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
              />
            </div>
            
            {/* <div>
              <label>Stars</label>
              <input
                type="text"
                value={stars}
                onChange={(e) => setStars(e.target.value)}
              />
            </div>

            <div>
              <label>Description</label>
              <textarea
                rows="4"
                cols="50"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div>
              <label>Categories (comma-seperated)</label>
              <input
                type="text"
                value={categories}
                onChange={handleCategoryChange}
              />
            </div> */}

            <input type="submit" />
          </div>
        </form>
  )
}

export default AddBook
