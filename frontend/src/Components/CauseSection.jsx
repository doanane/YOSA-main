import React from 'react';
import'../Styles/CauseSection.css';
import image1 from'../Assets/medical.jpeg';
import image2 from '../Assets/food.jpeg';
import image3 from '../Assets/education.jpeg';
import image4 from '../Assets/wework.jpeg';




const DonationCard = ({ image, category, title, description, progress, raised, goal }) => (
  <div className="donation-card">
    <img src={image} alt={title} className="donation-card-image" />
    <div className="donation-card-content">
      <h3 className="donation-card-category">{category}</h3>
      <h2 className="donation-card-title">{title}</h2>
      <p className="donation-card-description">{description}</p>
      <div className="donation-card-progress-bar">
        <div style={{ width: `${progress}%` }} className="donation-card-progress"></div>
      </div>
      <div className="donation-card-stats">
        <span>Raised: ${raised}</span>
        <span>Goal: ${goal}</span>
      </div>
    </div>
    <button className="donation-card-button">Donate Now</button>
  </div>
);

const causes = () => {
  const cardsData = [
    {
      image: image1,
      category: 'Medical',
      title: 'Donate For Treatment And Medicine',
      description: 'Funds Go Towards Surgeries, Treatments, And Doctor Visits. Provides Life-Saving Medications And Essential Drugs',
      progress: 60,
      raised: 3000,
      goal: 10000,
    },
    {
      image: image2,
      category: 'Homeless',
      title: 'Children We Work With',
      description: 'Provides Secure And Comfortable Housing. Many Children Lack A Safe Place To Live.',
      progress: 85,
      raised: 8500,
      goal: 10000,
    },
    {
      image: image3,
      category: 'Education',
      title: 'Help For Education',
      description: 'Help Us Provide Educational Opportunities To Homeless Children. Many Children Without Homes Miss Out On The Chance To Go To School.',
      progress: 90,
      raised: 9000,
      goal: 10000,
    },
    {
      image: image4,
      category: 'Food',
      title: 'Help For Food',
      description: 'Help Us Provide Nutritious Meals To Homeless Children. Many Children Go Hungry Every Day, Lacking Access To Food For Healthy Growth And Development.',
      progress: 75,
      raised: 1500,
      goal: 2000,
    },
  ];

  return (
    <div className="donation-cards-section">
      <h2 className='heading'>Latest Causes</h2>
      <h1 className="section-heading">Find The Popular Cause And Donate Them</h1>
      <div className="donation-cards-grid">
        {cardsData.map((card, index) => (
          <DonationCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default causes;
