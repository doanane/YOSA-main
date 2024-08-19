import React, { useState } from 'react';
import '../Styles/HomeScreen.css';
import communityGathering from '../Assets/aboutt.jpeg';
import donationEvent from '../Assets/about1.jpeg';
import FunFacts from '../Components/FunFacts';
import CauseSection from '../Components/CauseSection';
import Navbar from '../Components/Navbar';
import Donate from '../Components/Donate';
import Registration from '../Components/Registration';
import CharitySection from '../Components/CharitySection';
import News from '../Components/News';

const HomeScreen = () => {
  const [showDonationForm, setShowDonationForm] = useState(false);
  const [showVolunteerForm, setShowVolunteerForm] = useState(false);

  const handleDonateClick = () => {
    setShowDonationForm(true);
    setShowVolunteerForm(false);
  };

  const handleVolunteerClick = () => {
    setShowVolunteerForm(true);
    setShowDonationForm(false);
  };

  const showForms = showDonationForm || showVolunteerForm;

  return (
    <div className="HomeScreen">
      {!showForms && <Navbar />}
      {!showForms && (
        <div className="hero">
          <div className="hero-content">
            <h1>Helping Each Other Can Make World Better</h1>
            <p>
              We Seek Out World Changers And <br />Difference Makers Around The Globe<br />
              And Equip Them To Fulfill Their Unique Purpose.
            </p>
            <div className="hero-buttons">
              <button onClick={handleDonateClick}>Donate Now</button>
              <button onClick={handleVolunteerClick}>Volunteer With Us</button>
            </div>
          </div>
        </div>
      )}

      {showDonationForm && <Donate />}
      {showVolunteerForm && <Registration />}

      {!showForms && (
        <>
          <div className="support-section">
            <div className="images">
              <img
                src={communityGathering}
                alt="Community gathering under trees"
                className="image image1"
              />
              <img
                src={donationEvent}
                alt="People receiving awards"
                className="image image2"
              />
            </div>
            <div className="content">
              <h2>About Us</h2>
              <h1>Your Support Is Really Powerful.</h1>
              <p>
                Working Towards A World Where Young People, Irrespective Of Gender,
                Unlock Their Full Potential Through Youth Leadership, Mentorship,
                And Empowerment, Contributing To A Brighter Future For All.
              </p>
              <button className="read-more">Read More</button>
            </div>
          </div>
          <CharitySection />
          <FunFacts />
          <CauseSection />
          <News />
        </>
      )}
    </div>
  );
};

export default HomeScreen;
