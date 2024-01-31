import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ShowDetails = (props) => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  const fetchShowDetails = async () => {
    props.setProgress(10);
    const url = `https://api.tvmaze.com/shows/${id}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      props.setProgress(100);
      setShow(data);
    } catch (error) {
      console.error('Error fetching show details:', error);
      props.setProgress(100);
    }
  };

  useEffect(() => {
    fetchShowDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className="container mt-5">  
      {show && (
        <div className="card"><div className="card-body">
            <h5 className="card-title">{show.name}</h5>
            <p className="card-text"><b>country :</b> {show.network.country.name}</p>
            <p className="card-text"><b>officialsite :</b> {show.officialSite}</p>
            <p className="card-text"><strong>Summary</strong><br/>{show.summary}</p>
            <button
              className="btn btn-success"
              onClick={() => {
                // Open the form for booking movie ticket
                alert(`Booking for ${show.name}`);
              }}
            >
              Book Movie Ticket
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowDetails;
