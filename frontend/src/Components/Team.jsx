
import React from 'react';
import '../Styles/Team.css';

const Team = () => {
  const teamMembers = [
    {
      name: 'Scott Peters',
      title: 'Founder & CEO',
      image: 'https://placehold.co/150x150?text=Scott',
    },
    {
      name: 'Dan Hughes',
      title: 'COO',
      image: 'https://placehold.co/150x150?text=Dan',
    },
    {
      name: 'Jack Hartman',
      title: 'VP, Client Partner',
      image: 'https://placehold.co/150x150?text=Jack',
    },
    {
      name: 'Ryan Johnson',
      title: 'UI Engineer',
      image: 'https://placehold.co/150x150?text=Ryan',
    },
    {
      name: 'Ryan Johnson',
      title: 'UI Engineer',
      image: 'https://placehold.co/150x150?text=Ryan',
    },
    {
      name: 'Ryan Johnson',
      title: 'UI Engineer',
      image: 'https://placehold.co/150x150?text=Ryan',
    },
  ];

  return (
    <div className="team-container">
      <h2 className="headingg" >Meet Our Team</h2>
      <h2 className="headingg" >YOUTH SPACE AFRIKA (YoSA) BOARD OF ADVISORS</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.image} alt={member.name} />
            <h3 className="temp">{member.name}</h3>
            <p className="teamp">{member.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
