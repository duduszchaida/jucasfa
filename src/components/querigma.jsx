import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import YouTube from 'react-youtube';
import 'primereact/resources/themes/saga-blue/theme.css'; // tema primereact
import 'primereact/resources/primereact.min.css'; // componentes primereact
import 'primeicons/primeicons.css'; // ícones primereact
import '../querigma.css'

function Querigma() {
  
  const [mainVideoId, setMainVideoId] = useState('dQw4w9WgXcQ'); // ID do vídeo principal do YouTube

  const videos = [
    { id: 'dQw4w9WgXcQ', title: 'Video 1' },
    { id: 'k85mRPqvMbE', title: 'Video 2' },
    { id: '3JZ_D3ELwOQ', title: 'Video 3' }
   
  ];

  const opts = {
    height: '585',
    width: '960',
    playerVars: {
      autoplay: 1,
    },
  };

  const itemTemplate = (item) => {
    return (
      <div className="carousel-item-querigma" onClick={() => setMainVideoId(item.id)}>
        <img src={`https://img.youtube.com/vi/${item.id}/0.jpg`} alt={item.title} />
        <h4>{item.title}</h4>
      </div>
    );
  };


  return (
    <div className="querigma-page">
      <div className="main-video">
        <YouTube videoId={mainVideoId} opts={opts} className='ml-5' />
      </div>
      <div className="side-carousel">
        <Carousel value={videos} itemTemplate={itemTemplate} numVisible={3} numScroll={1} orientation="vertical"  />
        
      </div>
    </div>
  );
}

export default Querigma;
