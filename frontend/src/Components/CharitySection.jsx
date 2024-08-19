import React from 'react';
import styles from '../Styles/CharitySection.module.css';
import charityImage from '../Assets/about2.jpeg';
import mission from '../Assets/missionicon.png';
import vision from '../Assets/visionicon.png';



const CharitySection = () => {
  return (
    <div className={styles.charitySection}>
      <div className={styles.charityContent}>
        <h2>Welcome To Charity</h2>
        <h1>Let Us Come Together To Make A Difference</h1>
        <p>Towards A World Where Young People Regardless Of Gender, Unlock Their Full Potential Through Youth Leadership, Mentorship, And Empowerment, Contributing To A Brighter Future For All.</p>
        <div className={styles.missionVision}>
          <div className={styles.mission}>
          <img src={mission} alt="mission" />
            <h3>Our Mission</h3>
            <p>
              To Empower Young People Of All Genders Through Inclusive Leadership, Mentorship, And Empowerment Programs, Fostering A Culture Of Equality And Collaboration. By Providing Opportunities For Growth And Advocacy,
            </p>
          </div>
          <div className={styles.vision}>
          <img src={vision} alt="vision" />
            <h3>Our Vision</h3>
            <p>
              Working Towards A World Where Young People, Irrespective Of Gender, Unlock Their Full Potential Through Youth Leadership, Mentorship, And Empowerment, Contributing To A Brighter Future For All.
            </p>
          </div>
        </div>
        <div className={styles.progressBars}>
          <div className={styles.progressBar}>
            <span>Donations</span>
            <div className={styles.bar}>
              <div className={styles.fill} style={{ width: '75%' }}></div>
            </div>
            <span>75%</span>
          </div>
          <div className={styles.progressBar}>
            <span>Medical Help</span>
            <div className={styles.bar}>
              <div className={styles.fill} style={{ width: '90%' }}></div>
            </div>
            <span>90%</span>
          </div>
        </div>
      </div>
      <div className={styles.charityImage}>
      <img src={charityImage} alt="Group of people" />
        <div className={styles.imageCaption}>
          <ul>
            <li>Together, We're Going To Make The Future</li>
            <li>Children Where We Are Able To Fulfill All</li>
            <li>Their Requirements To<br></br>Keep Them Safe From Withered World</li>
            <li>We Have Already Stepped Out <br></br>And Start Changing The World</li>
            <li>Keeping Safe Them From War, Inhumanity</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharitySection;
