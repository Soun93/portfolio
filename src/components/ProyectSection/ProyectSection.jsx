import { useState } from 'react';
import Pagination from '../CommonComponents/Pagination';
import Proyect from './Proyect';
import './ProyectSection.css';

export const ProyectSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <section className='proyect-section'>
      <h3>Proyectos</h3>
      <Proyect />
      <Proyect />
      <Proyect />

      <Pagination postsPerPage={2} totalPosts={10} paginate={paginate}/>

    </section> 
  );
}

export default ProyectSection;