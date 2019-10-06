import React from 'react';
import { Link } from 'react-router-dom'

function Home() {
  return (
 <div>
    <div className="columns">
      <div className="column is-7">
        <p>Quienes somos?</p>
        <p>Por que green finder?</p>
        <p>Como funciona?</p>
      </div>
      <div className="column is-5">
                        
        <button className='button is-large is-success'> 
          <Link to={'/centers'}>Centros</Link>
        </button>
        <button className='button is-large is-success'>
          <Link to={'/level'}>Nivel</Link> 
        </button>
        <button className='button is-large is-success'>
          <Link to={'/rewards'}>Recompensas</Link>
        </button>
        
      </div>
    </div>
 </div>
  );
}

export default Home;
