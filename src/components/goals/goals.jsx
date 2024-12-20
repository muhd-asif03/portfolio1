import React from 'react';
import './Goals.css';

const Goals = () => {
  const shortTermGoals = [
    'Create a project in any language',
    'Prepare for academics',
    'Upskill in new languages',
    'Develop excellent communication, teamwork, and leadership skills to perform well in group discussions and interviews.',
    'Improve healthy diet',
  ];

  const longTermGoals = [
    'Become a full-stack developer',
    'Travel and explore more',
    'Travel to other countries',
    'Obtain certifications in areas such as web design, cloud computing, or data analysis to make my profile more competitive',
  ];

  return (
    <div>
      <div>
        <h1 className="title">Goals</h1>
      </div>

      <div className="goals-page">
        <div className="goals-section">
          <h2 className="section-title">Short-Term Goals</h2>
          <ul className="goals-list">
            {shortTermGoals.map((goal, index) => (
              <li key={index} className="goal-item">
                <span>&#8226; </span>
                <label htmlFor={`short-${index}`}>{goal}</label>
              </li>
            ))}
          </ul>
        </div>

        <div className="goals-section">
          <h2 className="section-title">Long-Term Goals</h2>
          <ul className="goals-list">
            {longTermGoals.map((goal, index) => (
              <li key={index} className="goal-item">
                <span>&#8226; </span>
                <label htmlFor={`long-${index}`}>{goal}</label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Goals;
