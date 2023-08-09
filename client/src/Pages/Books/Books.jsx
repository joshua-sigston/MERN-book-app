import React, { useState, useEffect } from 'react';

//Router
import { Link } from 'react-router-dom';

function Books() {
  const [ data, setData ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ error, setError ] = useState(null);
  const [ category, setCategory ] = useState('');

  useEffect(() => {
    let url
    const fetchData = async () => {
      try {

        category ? url = `/api/books?category=${category}` : url = '/api/books'
        
        const resp = await fetch(url);
        console.log(resp)
        if (!resp.ok) {
          throw new Error('Failed to load data.');
        }

        const data = await resp.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setError('An error has occurred.')
        setIsLoading(false);
      }
    };
    fetchData();
  }, [category]);

  const content = !isLoading ? data.map((item) => (
      <li key={item._id}>
        <Link to={`/books/${item.slug}`}>
          <img
            src={`http://localhost:3000/uploads/${item.thumbnail}`}
            alt={item.title}
          />
          <h3>{item.title}</h3>
        </Link>
      </li>
    )) 
    : <h3>Loading....</h3>
  
  const errorOccurred = <h3>{error}</h3>

  return (
    <section>
      <div className="filters">
        <label>Categories</label>
        <select onChange={(e)=> setCategory(e.target.value)}>
          <option value="">All</option>
          <option value="romance">Romance</option>
          <option value="science">Science</option>
          <option value="crime">Crime</option>
          <option value="food">Food</option>
          <option value="adventure">Adventure</option>
          <option value="thriller">Thriller</option>
          <option value="fiction">Fiction</option>
          <option value="other">other</option>
        </select>
      </div>
      {!error ? content : errorOccurred}
    </section>
  );
}

export default Books;
