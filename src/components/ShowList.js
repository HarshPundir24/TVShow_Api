import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ShowList = (props) => {
  const [shows, setShows] = useState([]);

  const fetchShows = async () => {
    props.setProgress(10);
    const url = 'https://api.tvmaze.com/search/shows?q=all';
    try {
      const response = await fetch(url);
      const data = await response.json();
      props.setProgress(100);
      setShows(data);
    } catch (error) {
      console.error('Error fetching shows:', error);
      props.setProgress(100);
    }
  };

  useEffect(() => {
    fetchShows();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        {shows.map((show) => (
          <div className="col-md-4 my-3" key={show.show.id}>
            <div className="card">
              <img src={show.show.image?.medium || 'placeholder-image-url'} className="card-img-top" alt={show.show.name}/>
              <div className="card-body">
                <h5 className="card-title"><b>Name : </b> {show.show.name}</h5>
                <p className="card-text"><b>Language : </b> {show.show.language}</p>
                <p className="card-text"><b>Type : </b> {show.show.type}</p>
                <p className="card-text"><b>Genres : </b> {show.show.genres.join(', ')}</p>
                <p className="card-text"><b>Rating average : </b> {show.show.rating.average?show.show.rating.average:'null'}</p>
                <Link to={`/show/${show.show.id}`} className="btn btn-primary">
                  summary
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowList;
