import { useState } from 'react';
import { AcademicDate } from './AcademicDate';
import './BackgroundSection.css'

export const BackgroundSection = () => {

  const AcademicCalendar = [
    {
      id: 1,
      title: 'Ing. Cibernética Electronica',
      startDate: 2019,
      endDate: 2024,
      description: (
        <>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente doloribus reprehenderit suscipit nihil at sunt fugit ab? Eligendi fuga repellat veniam quod enim a dolores est dolore, officia ipsum corporis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente doloribus reprehenderit suscipit nihil 
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente doloribus reprehenderit suscipit nihil at sunt fugit ab? Eligendi fuga repellat veniam quod enim a dolores est dolore, officia ipsum corporis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente doloribus reprehenderit suscipit nihil 
          </p>
        </>
      )
    },{
      id: 2,
      title: 'Tec. Operador de Microcomputadoras',
      startDate: 2006,
      endDate: 2018,
      description: (
        <>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente doloribus reprehenderit suscipit nihil at sunt fugit ab? Eligendi fuga repellat veniam quod enim a dolores est dolore, officia ipsum corporis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente doloribus reprehenderit suscipit nihil 
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente doloribus reprehenderit suscipit nihil at sunt fugit ab? Eligendi fuga repellat veniam quod enim a dolores est dolore, officia ipsum corporis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente doloribus reprehenderit suscipit nihil 
          </p>
        </>
      )
    },{
      id: 3,
      title: 'Tec. Diseño Gráfico',
      startDate: 2006,
      endDate: 2018,
      description: (
        <>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente doloribus reprehenderit suscipit nihil at sunt fugit ab? Eligendi fuga repellat veniam quod enim a dolores est dolore, officia ipsum corporis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente doloribus reprehenderit suscipit nihil 
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente doloribus reprehenderit suscipit nihil at sunt fugit ab? Eligendi fuga repellat veniam quod enim a dolores est dolore, officia ipsum corporis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente doloribus reprehenderit suscipit nihil 
          </p>
        </>
      )
    },{
      id: 4,
      title: 'Br. Ciencias y letras',
      startDate: 2006,
      endDate: 2018,
      description: (
        <>
          <p>
            asdklamsdlkamsdlkasdjknasdk
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente doloribus reprehenderit suscipit nihil at sunt fugit ab? Eligendi fuga repellat veniam quod enim a dolores est dolore, officia ipsum corporis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente doloribus reprehenderit suscipit nihil 
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente doloribus reprehenderit suscipit nihil at sunt fugit ab? Eligendi fuga repellat veniam quod enim a dolores est dolore, officia ipsum corporis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente doloribus reprehenderit suscipit nihil 
          </p>
        </>
      )
    },
  ]

  const handleOnClick = (id) => {
    setIdDate(id)
  }

  const [idDate, setIdDate] = useState(1);
  const descriptionItem = AcademicCalendar.find(item => item.id === idDate);

  return (
    <section className='background-container' id='timeline'>
      <h3>Academic background</h3>
      <div className='background-body'>
        <div className='time-line'>
          <div className='academic-date-container'>
          {AcademicCalendar.map((item) => (
            <AcademicDate 
              key={item.id} 
              item={item}
              selected={item.id === idDate ? 'selected' : ''}
              changeSelected={handleOnClick}/>
          ))} 
          </div>
        </div>
        <div className='description'>
          <div key={descriptionItem.id}>
            {descriptionItem.description}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BackgroundSection;