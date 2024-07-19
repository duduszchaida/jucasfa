import axios from 'axios';
import './App.css'
import { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import 'primereact/resources/themes/saga-blue/theme.css'; // tema primereact
import 'primereact/resources/primereact.min.css'; // componentes primereact
import 'primeicons/primeicons.css'; // ícones primereact

function App() {
  const eventos = [
    { id: 1, img: "rocha.jpg", title: "3º Rocha" },
    { id: 2, img: "acampacasfa.jpg", title: "1º AcampaCasfa" },
    { id: 3, img: "missa.jpg", title: "7ª Gincana Interna" },
    { id: 4, img: "missa.jpg", title: "Missa do Jucão" },
    { id: 5, img: "missa.jpg", title: "Festa da comunidade" }
];
const itemTemplate = (item) => {
  return (
      <div className="carousel-item">
          <img src={item.img} alt={item.title} />
          <h4>{item.title}</h4>
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
 
  const [evangelho, setEvangelho] = useState('Carregando...');

  useEffect(() => {
    async function fetchEvangelho() {
      try {
        const response = await axios.get('https://liturgiadiaria.site');
        setEvangelho(response.data.evangelho.texto);
      } catch (error) {
        console.error('Erro ao buscar o evangelho:', error);
        setEvangelho('Erro ao carregar o evangelho do dia.');
      }
    }

    fetchEvangelho();
  }, []);


  return (
    <>
      <section className="banner-area">
		<div className="banner-img"></div>
		<h3>Juventude Católica São Francisco de Assis</h3>
		<h1><span>Jucasfa</span></h1><a className="banner-btn" href="https://api.whatsapp.com/send?phone=5545991550933">Mais informações</a>
	</section>
	<section className="about-area" id="about">
		<h3 className="section-title">Sobre <span>Nós</span></h3>
		<ul className="about-content">
			<li className="about-left"></li>
			<li className="about-right">
				<h2>Rimas em 3,2,1, vai</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam excepturi, similique aut nesciunt, illo tenetur deleniti ab soluta nisi impedit ipsam consectetur magni! Atque sunt voluptate fuga, perspiciatis corrupti maiores dignissimos deserunt cupiditate, nihil inventore. Lorem ipsum dolor sit amet</p>
				<p><i className="fa fa-arrow-right"></i> Lorem ipsum dolor sit amet</p>
				<p><i className="fa fa-arrow-right"></i> deleniti ab soluta nisi impedit</p>
				<p><i className="fa fa-arrow-right"></i> maiores dignissimos deserunt cupiditate</p>
				<p><i className="fa fa-arrow-right"></i> illo tenetur deleniti ab soluta nisi</p>
			</li>
		</ul>
	</section>
	<section className="msg-area">
		<div className="msg-content">
			<h2>Evangelho do dia</h2>
      <br />
			<p id="evangelho-texto">{evangelho}</p>
		</div>
	</section>
	
  
  <section className="services-area" id="services">
            <h3 className="section-title">Nossos <span>Eventos</span></h3>
            <Carousel value={eventos} itemTemplate={itemTemplate} numVisible={3} numScroll={1} circular
                         responsiveOptions={responsiveOptions} />
  </section>
	<section className="contact-area" id="contact">
		<h3 className="section-title">Nossos <span>Contatos</span></h3>
		<ul className="contact-content">
			<li>
				<i className="pi pi-map-marker"></i>
				<p>R. Guairacá - Jardim Santa Rosa<br/>
					nº 64, Foz do Iguaçu - PR</p>
			</li>
			<li>
				<i className="pi pi-mobile"></i>
				<p>(45) 99902-3640 - Peixe<br/>
				   (45) 99155-0933 - Paty</p>
			</li>
			<li>
		
				<i className="pi pi-dollar"></i>
			    <p >Pix: (45) 99902-3640</p> 
				<h4>Eduardo H. - Mercado pago</h4>
			</li>
		</ul>
	</section>
    </>
  )
}

export default App
