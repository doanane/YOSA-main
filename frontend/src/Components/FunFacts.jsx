// src/FunFacts.js
import React from 'react';
import CountUp from 'react-countup';
import '../Styles/FunFacts.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const FunFacts = () => {
  const facts = [
    { id: 1, icon: 'handshake', number: 4597, label: 'People Rised' },
    { id: 2, icon: 'users', number: 8945, label: 'Volunteer' },
    { id: 3, icon: 'dove', number: 10, label: 'Poor People Saved', suffix: 'M' },
    { id: 4, icon: 'globe', number: 100, label: 'Country Member' },
  ];

  return (
    <div className="fun-facts-container">
      <h2>Our Fun Facts</h2>
      <h1>We Believe That We Can Save <br></br>More Lifes With You</h1>
      <div className="facts">
        {facts.map(fact => (
          <div key={fact.id} className="fact">
            <div className="fact-icon">
              <i className={`fas fa-${fact.icon}`}></i>
            </div>
            <div className="fact-number">
              <CountUp start={0} end={fact.number} duration={10} suffix={fact.suffix || '+'} />
            </div>
            <div className="fact-label">{fact.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FunFacts;
