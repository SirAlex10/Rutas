import React, { useState } from 'react';
import moment from 'moment';
import Modal from 'react-modal';
import RouteList from './RouteList';
import '../assets/Home.css';
import image1 from '../assets/WhatsApp Image 2023-11-30 at 7.32.01 PM.jpeg'
import image1_1 from '../assets/Barcelona-Unillanos.png'
import image2 from '../assets/Rochela-Unillanos.png'
import image2_1 from '../assets/Unillanos-Rochela.png'
import image3 from '../assets/Porfia-Unillanos.png'
import image3_1 from '../assets/Unillanos-Porfia.png'
import image4 from '../assets/Viva-Unillanos.png'
import image4_1 from '../assets/Unillanos-Viva.png'
import image5 from '../assets/Covisan-Unillanos.png'
import image5_1 from '../assets/Unillanos-Covisan.png'
import image6 from '../assets/Villacentro-Unillanos.png'
import image6_1 from '../assets/Unillanos-Villacentro.png'
import image7 from '../assets/LaGrama-Unillanos.png'
import image7_1 from '../assets/Unillanos-LaGrama.png'
import image8 from '../assets/Postobon-Unillanos.png'
import image8_1 from '../assets/Unillanos-Postobon.png'
import image9 from '../assets/Terminal-Unillanos.png'
import image9_1 from '../assets/Unillanos-Terminal.png'
import logo from '../assets/logo.png'

Modal.setAppElement('#root');

function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedRouteDetails, setSelectedRouteDetails] = useState({});

  const routeImages = {
    'Reliquia': image1,
    'Porfía': image3,
    'Viva': image4,
    'Covisan': image5,
    'Villacentro': image6,
    'La Grama': image7,
    'Postobon': image8,
    'La Rochela': image2,
    'Terminal' : image9,
  };
  const routeImages2 = {
    'Reliquia': image1_1,
    'Porfía': image3_1,
    'Viva': image4_1,
    'Covisan': image5_1,
    'Villacentro': image6_1,
    'La Grama': image7_1,
    'Postobon': image8_1,
    'La Rochela': image2_1,
    'Terminal' : image9_1,
  };

  //solo Reliquia y rochela tiene las imagenes de ellas

  const isTimePassed = (time) => {
    const now = moment();
    const scheduleTime = moment(time, 'h:mm a');
    return now.isAfter(scheduleTime);
  };

  const routeDetails = {
    'Reliquia': {
      'ida': ['5:10 am', '7:10 am'],
      'vuelta': ['5:00 pm', '6:00 pm'],
      'paraderosIda': ' Reliquia - San Antonio - Kirpas - Villa Melida',
      'paraderosVuelta': '  Villa Melida - Kirpas - San Antonio - Reliquia',
      'TiempoEstimadoIda': '20 minutos',
      'TiempoEstimadoVuelta': '30 minutos',
    },
    'Porfía': {
      'ida': ['5:20 am', '7:10 am', '8:20 am', '11:15 am'],
      'vuelta': ['12:00 pm', '4:00 pm', '5:00 pm ', '6:00 pm'],
      'paraderosIda': ' La Madrid - Porfia - El Saman ',
      'paraderosVuelta': '  El Saman - Porfia - La Madrid ',
      'TiempoEstimadoIda': '28 minutos',
      'TiempoEstimadoVuelta': '31 minutos',
    },
    'Viva': {
      'ida': ['5:20 am', '6:20 am', '7:20 am', '8:20 am', '11:15 am', '1:30 pm'],
      'vuelta': ['11:00 am', '12:00 pm', '4:00 pm', '5:00 pm', '6:10 pm'],
      'paraderosIda': 'Viva - Villabolovar - La vega - Carolina',
      'paraderosVuelta': 'Carolina - La vega - Villabolovar - Viva',
      'TiempoEstimadoIda': '21 minutos',
      'TiempoEstimadoVuelta': '18 minutos',
    },
    'Covisan': {
      'ida': ['5:10  am', '6:10 am', '7:10 am', '8:10 am', '11:15 am', '1:30 pm'],
      'vuelta': ['11:00 am', '12:00 pm', '4:00 pm', '5:00 pm', '6:10 pm'],
      'paraderosIda': 'Covisan - Salitre - Campanario - San Antonio',
      'paraderosVuelta': 'San Antonio - Campanario - Salitre - Covisan',
      'TiempoEstimadoIda': '24 minutos',
      'TiempoEstimadoVuelta': '20 minutos',
      //acá quede
    },
    'Villacentro': {
      'ida': ['5:20 am', '6:20  am', '7:20 am', '8:20 am', '11:15 am', '1:30 pm'],
      'vuelta': ['11:00 am', '12:00 pm', '4:00 pm', '5:00 pm', '6:00 pm'],
      'paraderosIda': 'Villacentro - Octava - Esperanza ',
      'paraderosVuelta': 'Esperanza - Octava - Villacentro ',
      'TiempoEstimadoIda': '18 minutos',
      'TiempoEstimadoVuelta': '19 minutos',
    },
    'La Grama': {
      'ida': ['5:20 am', '6:20 am', '7:20 am', '8:20 am', '11:15 am', '1:30 pm'],
      'vuelta': ['11:00 am', '12:00 pm', '4:00 pm', '5:00 pm', '6:10 pm'],
      'paraderosIda': 'La Rochela - Catumare - Serramonte - Amarilo',
      'paraderosVuelta': 'Amarilo - Serramonte - La Rochela ',
      'TiempoEstimadoIda': '20 minutos',
      'TiempoEstimadoVuelta': '19 minutos',
    },
    'Postobon': {
      'ida': ['5:20 am', '6:20 am', '7:20 am', '8:20 am', '11:15 am', '1:30 pm'],
      'vuelta': ['11:00 am', '12:00 pm', '4:00 pm', '5:00 pm', '6:10 pm'],
      'paraderosIda': 'La Rochela - Catumare - Serramonte - Amarilo',
      'paraderosVuelta': 'Amarilo - Serramonte - La Rochela ',
      'TiempoEstimadoIda': '16 minutos',
      'TiempoEstimadoVuelta': '16 minutos',
    },
    // falta cambiar la informacion de la grama y postobon
    'La Rochela': {
      'ida': ['5:20 am', '6:20 am', '7:20 am', '8:20 am', '11:15 am', '1:30 pm'],
      'vuelta': ['11:00 am', '12:00 pm', '4:00 pm', '5:00 pm', '6:10 pm'],
      'paraderosIda': 'La Rochela - Catumare - Serramonte - Amarilo',
      'paraderosVuelta': 'Amarilo - Serramonte - La Rochela ',
      'TiempoEstimadoIda': '24 minutos',
      'TiempoEstimadoVuelta': '25 minutos',
    },
    'Terminal': {
      'ida': ['5:20 am', '6:20 am', '7:20 am', '8:20 am', '11:15 am', '1:30 pm'],
      'vuelta': ['11:00 am', '12:00 pm', '4:00 pm', '5:00 pm', '6:10 pm'],
      'paraderosIda': 'Frente al Banco W Hato grande',
      'paraderosVuelta': 'Frente al Banco W Hato grande',
      'TiempoEstimadoIda': '24 minutos',
      'TiempoEstimadoVuelta': '25 minutos',
    },
  };

  const openModal = (route) => {
    setSelectedRouteDetails({
      name: route,
      ...routeDetails[route]
    });
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const idaRoutes = Object.keys(routeDetails);
  const vueltaRoutes = Object.keys(routeDetails);

  return (
    <div className="home-container">
      <div className='bg-white p-10 pl-12 pr-12 rounded-lg'>
           
        <header className="home-header text-black text-center">
        <img src={logo} alt="Logo" className='inline relative h-24 left-[-40px]' />
          Rutas Unillanos
        </header>
        <div className="route-container">
          <RouteList routes={idaRoutes} onRouteClick={openModal} />
          {/*    <RouteList title="VUELTA" routes={vueltaRoutes} onRouteClick={openModal} />
  */}        </div>
      </div>

      {/* Modal para mostrar información de la ruta */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Información de la Ruta"
        className="modal"
        overlayClassName="overlay"
      >
        <div className="modal-content">
          <h2 className='modal-title'>Información de la Ruta: {selectedRouteDetails.name}</h2>
          <div className="modal-row flex pb-2">
            <div className="modal-image-container grid  items-center" >
              <img
                src={routeImages[selectedRouteDetails.name]}
                alt="Salida"
                className="modal-route-image" />
            </div>
            <div className='modal-schedule'>
              <p className='text-black'>Horarios de salida (Ruta Barrio):</p>
              <ul>
                {selectedRouteDetails.ida?.map((time, index) => (
                  <li key={index} className={isTimePassed(time) ? 'time-passed' : 'time-upcoming'}>
                    {time}
                  </li>
                ))}
              </ul>
              <span className='text-black'>Tiempo estimado: {selectedRouteDetails.TiempoEstimadoIda}</span>
              {/* Sección de paraderos para la ida */}
              <div className="modal-paraderos">
                <p className='text-black'>Paraderos (Ruta Barrio):
                  <span className='text-black'>{selectedRouteDetails.paraderosIda}</span></p>
              </div>
            </div>

          </div>
          <div className="modal-row flex pb-2">
            <div className="modal-image-container grid  items-center">
              <img
                src={routeImages2[selectedRouteDetails.name]}
                alt="Regreso"
                className="modal-route-image" />
            </div>
            <div className='modal-schedule'>
              <p className='text-black'>Horarios de regreso (Universidad a Barrio):</p>
              <ul>
                {selectedRouteDetails.vuelta?.map((time, index) => (
                  <li key={index} className={isTimePassed(time) ? 'time-passed' : 'time-upcoming'}>
                    {time}
                  </li>
                ))}
              </ul>
              <span className='text-black'>Tiempo estimado: {selectedRouteDetails.TiempoEstimadoVuelta}</span>
              {/* Sección de paraderos para la vuelta */}
              <div className="modal-paraderos">
                <p className='text-black'>Paraderos (Universidad a Barrio):
                  <span className='text-black'>{selectedRouteDetails.paraderosVuelta}</span></p>
              </div>
            </div>
          </div>
          <button className='modal-close-button' onClick={closeModal}>Cerrar</button>
        </div>
      </Modal>
    </div>
  );
}

export { Home };
