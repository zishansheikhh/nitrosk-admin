import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Projecttimeline from './project-timeline.component';

import './projects.styles.css';

const Project = () => {
  const [paymentStatus, setPaymentStatus] = useState('Full');
  const [projectStatus, setProjectStatus] = useState('Ongoing');
  const [message, setMessage] = useState('');
  
  const handlePaymentStatusChange = (event) => {
    setPaymentStatus(event.target.value);
  };

  const handleProjectStatusChange = (event) => {
    setProjectStatus(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., sending a message to the client or updating project details
  };

  return (
    <div className="container-fluid m-auto">
      <div className="project-details-wrapper">
        <div>
          <h2>TMS -The Musical SwaMi</h2>
          <div className="client-info">
            <p><FontAwesomeIcon icon="fa-regular fa-user" /> Swapnil Mishra</p>
            <p><FontAwesomeIcon icon="fa-regular fa-envelope" /> client@example.com</p>
            <p><FontAwesomeIcon icon="fa-solid fa-phone" /> +1234567890</p>
          </div>
          <div className="project-description">
            <h3>Project Description</h3>
            <h4>Project Overview:</h4>
            <ul>
              <li>Our project involves the development of a website for a passionate piano musician dedicated to teaching the art of playing the piano. The website will serve as a platform to connect with aspiring musicians, showcase the musician's expertise, and promote piano lessons. It aims to create an engaging online presence that reflects the musician's brand and values.</li>
              <h4>Key Features:</h4>
              <li>Interactive Lessons: The website will offer a range of interactive piano lessons suitable for beginners to advanced players. Users can access video tutorials, sheet music, and practice exercises.</li>
              <li>Booking System: Students can book lessons directly through the website. The system will allow for easy scheduling and rescheduling, ensuring a seamless experience.</li>
              <li>Personalized Learning: Tailored lesson plans for each student, ensuring a personalized learning experience.</li>
              <li>Branding: The website will be designed to reflect the musician's brand identity – a blend of elegance, expertise, and a deep love for music. The use of high-quality visuals and carefully chosen typography will create a visually appealing and harmonious brand presence.</li>
              <li>SEO Optimization: Implementing on-page and off-page SEO techniques to improve search engine rankings. This will include optimizing content for relevant keywords, improving website speed, and building backlinks.</li>
              <li>Responsive Design: The website will be fully responsive, ensuring an optimal user experience across various devices, including smartphones and tablets.</li>
              <h4>Color Palette:</h4>
              <p>The color palette selected for the website embodies the essence of piano music and the musician's brand:</p>
              <div className='color-pallet-wrapper'>
                <div className='color-box primary-brand-bg'>Vampire Black</div>
                <div className='color-box secondary-brand-bg'>Spiderman Blue</div>
                <div className='color-box cta-brand-bg'>Spiderman Red</div>
              </div>
            </ul>
          </div>
          <Projecttimeline />
        </div>

        <hr />

        <div>
          <div className="status-update">
            <label>Project Status:</label>
            <select value={projectStatus} onChange={handleProjectStatusChange}>
              <option value="Ongoing">Ongoing</option>
              <option value="Finished">Finished</option>
              <option value="Pending">Pending</option>
              <option value="Stopped">Stopped</option>
            </select>
          </div>
          <div className="payment-status">
            <label>Payment Status:</label>
            <select value={paymentStatus} onChange={handlePaymentStatusChange}>
              <option value="Full">Full</option>
              <option value="Partial">Partial</option>
            </select>
          </div>
          <div className="message-box d-flex al-item-cen">
            <label className='mr-3'>Message to Client:</label>
            <textarea
              rows="4"
              value={message}
              onChange={handleMessageChange}
              placeholder="Enter your message..."
              className='mr-2'
            ></textarea>
            <button className="submit-button btn" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;