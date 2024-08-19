import React from 'react';
import '../Styles/Members.css';

const TeamMemberCards = () => {
  const teamMembers = [
    {
      name: 'ANNA DEAN',
      role: 'React engineer',
      imgSrc: 'https://placehold.co/150x150?text=Anna+Dean',
      bgColor: '#F8BBD0',
    },
    {
      name: 'CHRIS MEZY',
      role: 'Data engineer',
      imgSrc: 'https://placehold.co/150x150?text=Chris+Mezy',
      bgColor: '#BBDEFB',
    },
    {
      name: 'LESLIE SCHNIDER',
      role: 'Backend developer',
      imgSrc: 'https://placehold.co/150x150?text=Leslie+Schnider',
      bgColor: '#E1BEE7',
    },
    {
      name: 'JIM BRICKTON',
      role: 'AI specialist',
      imgSrc: 'https://placehold.co/150x150?text=Jim+Brickton',
      bgColor: '#FFF9C4',
    },
  ];

  return (
    <div className="team-member-cards">
      {teamMembers.map((member, index) => (
        <div key={index} className="card" style={{ backgroundColor: member.bgColor }}>
          <img src={member.imgSrc} alt={member.name} className="member-image" />
          <h3 className="member-name">{member.name}</h3>
          <p className="member-role">{member.role}</p>
        </div>
      ))}
    </div>
  );
};
export default TeamMemberCards;