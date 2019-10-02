import React from 'react';
import { Link } from 'react-router-dom'

function Home() {
  return (
 <div>
    <div className="columns">
      <div className="column is-7">
        Centros de Acopio
      </div>
      <div className="column is-5">
                        
        <button className='button is-large is-success'> 
          <Link to={'/centers'}>Centros</Link>
        </button>
        <button className='button is-large is-success'>Nivel</button>
        <button className='button is-large is-success'>Recompensas</button>
      </div>
    </div>
 </div>
  );
}

export default Home;
