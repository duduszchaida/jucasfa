import axios from 'axios';
import '../App.css';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Carousel } from 'primereact/carousel';
import 'primereact/resources/themes/saga-blue/theme.css'; // tema primereact
import 'primereact/resources/primereact.min.css'; // componentes primereact
import 'primeicons/primeicons.css'; // ícones primereact
import { Button } from 'primereact/button';
import CarnavalContador from './CarnavalContador';

function Principal() {
  
  
  const eventos = [
    { id: 1, img: "quarto-rocha.jpg", title: "4º Rocha", link: "https://drive.google.com/drive/folders/1KZmtEvXLH9WEvxtlLR95_95cCcimamSP" },
    { id: 2, img: "acampacasfa.jpg", title: "1º AcampaCasfa", link: "https://drive.google.com/drive/folders/1Dnw9NdgL--ApPUMGc1e6hBBUAwEyHiGp" },
    { id: 3, img: "gincana-interna.jpeg", title: "7ª Gincana Interna", link: "https://drive.google.com/drive/folders/17HuN8inflvpj2zU5hvCbwiwgIVM3tVVT" },
    { id: 4, img: "niver-jucao.jpg", title: "27º Aniversário do Jucasfa", link: "https://drive.google.com/drive/folders/1HWMoChvujs7Um97_D2eu-4w0rYeWNrcG" },
    { id: 5, img: "gincana-externa.jpg", title: "14ª Gincana Externa", link: "https://www.facebook.com/media/set/?set=a.618685883630514&type=3" },
    { id: 6, img: "rocha.jpg", title: "3º Rocha", link: "https://www.facebook.com/media/set/?set=a.472926738206430&type=3" },
    { id: 7, img: "jovem-noel.jpg", title: "Jovem Noel 2024", link: "https://drive.google.com/drive/folders/1KZmtEvXLH9WEvxtlLR95_95cCcimamSP" }
  ];

  const itemTemplate = (item) => {
    return (
      <div className="carousel-item">
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          <img src={item.img} alt={item.title} />
          <h4>{item.title}</h4>
        </a>
      </div>
    );
  };

  const responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];
  const formatText = (text) => {
    // Remove números e qualquer outra coisa que não seja texto
    return text.replace(/\d+/g, '').trim();
  };
  const [evangelho, setEvangelho] = useState('Carregando...');

useEffect(() => {
    async function fetchEvangelho() {
      try {
        const response = await axios.get('https://liturgia.up.railway.app');
        const texto = response.data.evangelho.texto;
        // Formata o texto antes de definir o estado
        setEvangelho(formatText(texto));
      } catch (error) {
        console.error('Erro ao buscar o evangelho:', error);
        setEvangelho('Erro ao carregar o evangelho do dia.');
      }
    }

    fetchEvangelho();
  }, []);

 
    const [isExpanded, setIsExpanded] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 680 }); 
  
    const toggleExpanded = () => {
      setIsExpanded(!isExpanded);
    };
  
    const maxLength = 125; 
    const shortText = evangelho.slice(0, maxLength);

  return (
    <>
   
      <section id="inicio" className="banner-area">
      
        <div className="banner-img"></div>
        <h3>Juventude Católica São Francisco de Assis</h3>
        <h1><span>Jucasfa</span></h1>
        <a className="banner-btn" href="https://api.whatsapp.com/send?phone=5545991550933">Mais informações</a>
      </section>

      <section className="about-area p-0" id="about">
        <h3 className="section-title text-center text-4xl xl:text-6xl my-5">Sobre <span>Nós</span></h3>
        <ul className="about-content">
          <li className="about-left p-0 xl:col-3 md:col-5 md:mr-3">
            <img className='w-full' src='jucao.png'></img>
          </li>
    
          <li className="about-right xl:col-7 md:col-6">
            <h2>Rimas em 3, 2, 1, vai!!!</h2>
            <p className='text-justify'>Somos o grupo de jovens JUCASFA, fundado em 1997. Nosso grupo é profundamente devoto a São Francisco de Assis, nosso padroeiro, no qual levamos no nome do nosso grupo: Juventude Católica São Francisco de Assis.<br/> Nos reunimos na salinha de catequese da Capela Santa Rosa de Lima, onde cultivamos nossa fé e promovemos a união e o crescimento espiritual dos jovens de nossa comunidade de um jeito jovem e divertido, através de: 
</p>
            <p className='ml-2'><i className="pi pi-arrow-right mr-2"></i>  Gincanas,</p>
            <p  className='ml-2'><i className="pi pi-arrow-right mr-2"></i>  Retiros,</p>
            <p  className='ml-2'><i className="pi pi-arrow-right mr-2"></i>  e muito mais!</p>
            <p className='text-center'>Venha nos conhecer e participar dessa jornada de fé e amizade!</p>
          </li>
        </ul>
      </section>
      <section className="msg-area">
        <div className="msg-content">
          <h2>Evangelho do dia</h2>
          <br />
          <p id="evangelho-texto"> {isMobile && !isExpanded ? `${shortText}...` : evangelho}</p>
          {isMobile && (
          <Button className="w-4 p-1"  severity="secondary" onClick={toggleExpanded} label= {isExpanded ? 'Ver menos' : 'Ver mais'} />
          
            )}
        </div>
      </section>
      <section className="services-area p-0" id="services">
        <h3 className="section-title text-center text-4xl xl:text-6xl my-5">Nossos <span>Eventos</span></h3>
        <Carousel className='w-full' value={eventos} itemTemplate={itemTemplate} numVisible={3} numScroll={1} circular
          responsiveOptions={responsiveOptions} />
      </section>
      <section className="contact-area p-1 xl:p-7 mb-4" id="contact">
       
        <h3 className="section-title text-center text-4xl xl:text-6xl my-5">Nossos <span>Contatos</span></h3>
        <ul className="contact-content">
          <li className='col-4 xl:col-2 p-0 xl:p-3'>
            <i className="pi pi-map-marker text-4xl xl:text-6xl mb-2 xl:mb-4"></i>
            <p className='line-height-2 text-mob xl:text-base p-1 xl:p-3'>R. Guairacá - Jardim Santa Rosa
              nº 64</p>
          </li>
          <li className='col-4 xl:col-2 p-0 xl:p-3'>
            <i className="pi pi-mobile text-4xl xl:text-6xl mb-2 xl:mb-4"></i>
            <p className='line-height-2 text-mob xl:text-base p-1 xl:p-3'>
            Ana Dametto (45)98805-1545        <h4>Coordenadora</h4></p>
              
          </li>
          <li className='col-4 xl:col-2 p-0 xl:p-3'>
            <i className="pi pi-dollar text-4xl xl:text-6xl mb-2 xl:mb-4"></i>
            <p className='line-height-2 text-mob xl:text-base p-1 xl:p-3'>Pix: 07970507956      <h4>Eduarda Dallacort</h4></p>
       
          </li>
        </ul>
      </section>
    </>
  );
}

export default Principal;
