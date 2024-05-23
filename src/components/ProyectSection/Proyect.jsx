import { useState } from 'react';
import './Proyect.css';

export const Proyect = () => {
  const [showProyect, setShowProyect] = useState(false);
  const proyectStyle = {

  }
  return (
    <div className='proyect-container' style={proyectStyle}>
      <div className="proyect-header">
        <div className='proyect-title'>
          <h4>CRUD de usuarios</h4>
          <p>
            Nov <span className='number'> 2023 </span> -
            Dec <span className='number'> 2024 </span>
          </p>
        </div>
        <div>
        <svg  role='img' onClick={() => setShowProyect(!showProyect)} style={ {width:'20px', height:'20px'}}>
          <use xlinkHref={`/images/svg-elements.svg#row-${showProyect ? 'up' : 'down'}`}></use>
        </svg>
        </div>
      </div>
      <div className='proyect-body' style={ showProyect ? { display: 'block' } : { display: 'none' } }>
        <h5>Descripcion</h5>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, doloribus incidunt possimus reiciendis beatae itaque ipsum necessitatibus eveniet reprehenderit amet vero commodi velit accusamus odio est cumque magni. Iure, nobis.
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium qui rerum nesciunt est aperiam consequatur itaque officia vel! Facere nostrum cumque possimus soluta quisquam eveniet cum sapiente quo, quia libero.
        </p>
      </div>
    </div>
  );
}

export default Proyect;