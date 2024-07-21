import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import netflix_spinner from '../../assets/netflix_spinner.gif';
import './Player.css';

const YOUTUBE_API_KEY = 'AIzaSyDe-p5p1NTh6cRmO4TV9vkaeXd4bgbZJ3E'; 

const Player = () => {
  const { movieTitle } = useParams();
  const [videoData, setVideoData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            part: 'snippet',
            q: `${movieTitle} trailer`,
            key: YOUTUBE_API_KEY,
            maxResults: 1,
            type: 'video'
          }
        });

        if (response.data.items.length > 0) {
          const video = response.data.items[0];
          setVideoData({
            videoId: video.id.videoId,
            title: video.snippet.title,
          });
        }
      } catch (error) {
        setError('Error fetching trailer.');
        console.error('Error fetching trailer:', error);
      }
    };

    fetchTrailer();
  }, [movieTitle]);

  return (
    <div className="player">
      {error && <p className="error">{error}</p>}
      {videoData ? (
        <div>
          <iframe
            className="video-frame"
            src={`https://www.youtube.com/embed/${videoData.videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Movie Trailer"
          ></iframe>
          <div className="video-details">
            <h3>{videoData.title}</h3>
          </div>
        </div>
      ) : (
        <div className="login-spinner">
          <img src={netflix_spinner} alt="Loading" />
        </div>
      )}
    </div>
  );
};

export default Player;
