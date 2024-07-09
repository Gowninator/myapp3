import React from 'react';
import Link from 'next/link';


const Lommeregner: React.FC = () => {
  return (
      <div>
      <div style={{ display: 'flex', alignItems: 'left', gap: '10px' }}>
          <Link href="/">
            <button className='HKnap'>Home</button> 
          </Link>
      </div>
<p></p>
      
      
      <h1>Dimisonering af ventilation rør & kanaler</h1>
      <p>Denne side er ikke helt færdig endnu, men her er en lille fulg</p>
      <div className="animal" style={{ fontSize: '30px', marginBottom: '20px' }}>
        {/* Fuglefigur */}
        \  &nbsp;(o> <br />
          &nbsp;\_)) <br />
          &nbsp;-"- 
        </div>
      













    </div>
  );
}

export default Lommeregner;
