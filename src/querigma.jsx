import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import YouTube from 'react-youtube';
import 'primereact/resources/themes/saga-blue/theme.css'; // tema primereact
import 'primereact/resources/primereact.min.css'; // componentes primereact
import 'primeicons/primeicons.css'; // ícones primereact
import './querigma.css'

function Querigma() {
  
  const [mainVideoId, setMainVideoId] = useState('rQhy1ziljcU'); // ID do vídeo principal do YouTube

  const videos = [
    { id: 'rQhy1ziljcU', title: '1 - As Sagradas Escrituras' },
    { id: 'TfdnhMqnlXM', title: '2 - Simbolismo' },
    { id: 'SGgvzye6kkA', title: '2.2 - Simbolismo dos números' },
    { id: 'SRycTwhVuQU', title: '3 - Iconografia' },
    { id: 'qaPpjYKfANw', title: '3.2 - Iconografia' },
    { id: 'xf5D9VJaYcc', title: '4 - Criação' },
    { id: 's7dY3dyTtnQ', title: '4.2 - Sobre a obra dos seis dias' }

   
  ];

  const opts = {
    height: '585',
    width: '960',
   
  };
  const optsmob = {
    height: '290',
    width: '340',
    
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
      <h2 className='videomob padding-mob'> Querigma </h2>
      
      <div className="main-video xl:col-7  mtquerigma videodesktop">
        <YouTube videoId={mainVideoId} opts={opts} className='ml-5' />
      </div>
      <div className="main-video col-12 mt-5 videomob">
        <YouTube videoId={mainVideoId} opts={optsmob} className='w-full'  />
      </div>
      <div className="side-carousel col-6 xl:col-2 mtquerigma p-2 videodesktop ml-auto">
        <Carousel value={videos} itemTemplate={itemTemplate} numVisible={7} numScroll={1} orientation="vertical"  /> 
      </div>
      <div className="side-carousel col-12 xl:col-2 videomob p-2">
        <Carousel value={videos} itemTemplate={itemTemplate} numVisible={2} numScroll={1}  /> 
      </div>
    </div>
  );
}

export default Querigma;
