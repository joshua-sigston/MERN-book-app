import React, { useEffect, useState } from 'react'
//Router
import { Link, useParams } from 'react-router-dom';

function Book() {
  const [ data, setData ] = useState([]);
  const slug = useParams();
  useEffect(() => {
    
    const fetchData = async () => {
      try {  
        const resp = await fetch(`/api/books/${slug.slug}`);
        
        if (!resp.ok) {
          throw new Error('Failed to load data.');
        }
        console.log(resp)
        const data = await resp.json();
        setData(data);

        // setIsLoading(false);
      } catch (error) {
        // setError('An error has occurred.')
        // setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  function StarRating({ numberOfStars} ) {
    const stars = [];

    for(let i = 0; i < numberOfStars; i++ ) {
      stars.push(<span key={i}>⭐</span>)
    }

    return <div>Rating: {stars}</div>
  };

  return (
    <section>
      <Link to={'/books'}>Back to Books</Link>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <div className="bookdetails">
        <div>
          <img src={`http://localhost:3000/uploads/${data?.thumbnail}`}
          alt={data?.title} />
          <Link to={`/editbook/${data.slug}`}>Edit</Link>
        </div>

        <div>
          <h1>{data?.title}</h1>
          <p>{data?.description}</p>
          <StarRating stars={data?.stars} />

          <p>Category</p>
          <ul>
            {data?.category?.map((item, index)=> (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Book
