import React, { useEffect, useRef, useState } from 'react';
import './TitleCards.css';
import { Link } from 'react-router-dom';
import nowPlaying from '../../constants/nowPlaying';
import upcoming from '../../constants/upComing';
import topRated from '../../constants/topRated';
import popular from '../../constants/popular';


const TitleCards = ({ title, category }) => {
  const cardsRef = useRef();
  const [apiData, setApiData] = useState([]);


  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };


  useEffect(() => {
    cardsRef.current.addEventListener('wheel',handleWheel)
    if (category === 'upcoming') {
      setApiData(upcoming.results);
    } else if (category === 'top_rated') {
      setApiData(topRated.results);
    } else if (category === 'popular') {
      setApiData(popular.results);
    } else {
      setApiData(nowPlaying.results);
    }
  }, [category]);

  return (
    <div className="titlecards">
      <h2>{title ? title : 'Popular on Netflix'}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => (
          <Link to={`/player/${encodeURIComponent(card.original_title)}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt="" />
            <p>{card.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
