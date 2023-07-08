import { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Star.css';
const possibleRates = [1, 2, 3, 4, 5];

function Star() {
  const [selectedRate, setSelectedRate] = useState(0);
  const [hoveredRate, setHoveredRate] = useState(0);
  
return(
 
        <div className="card">
          <div className="stars">
            {possibleRates.map(rate => <i
              key={rate}
              className={"fas fa-star fa-sm" 
              + ((rate <= selectedRate) ? ' in-rate ' : '')
              + ((rate <= hoveredRate) ? ' in-hover' : '')}
              onClick={() => setSelectedRate(rate)}
              onMouseEnter={() => {setHoveredRate(rate); setSelectedRate(null);}}
              onMouseLeave={() => setHoveredRate(null)}
              >
            </i>)}
            <p>Ratings:{selectedRate}</p>

              </div>
          </div>
  );
}
export default Star;