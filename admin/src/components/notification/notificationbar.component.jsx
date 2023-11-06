import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './notification.styles.css';
import React, { useState } from 'react';

const Notificationbar = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      text: 'You have a new message from Amit- Swapy',
      timestamp: '2 minutes ago',
    },
    {
      id: 2,
      text: 'Bug report in Saiyedfarhan.com',
      timestamp: '1 hour ago',
    },
    {
      id: 3,
      text: 'Deadline for Swapy is due tomorrow',
      timestamp: '1 hour ago',
    },
  ]);

  const deleteNotification = (id) => {
    // Filter out the notification with the specified ID
    const updatedNotifications = notifications.filter((notification) => notification.id !== id);
    setNotifications(updatedNotifications);
  };

  return (
    <div className="container-fluid m-auto">
      <div className="notificationbar-wrapper mt-5 mb-5">
        <h3>Notifications</h3>
        <ul className="notifications-list">
          {notifications.map((notification) => (
            <div className='cards-basic notification-card'>
              <li key={notification.id} className="notification-item">
                <div className="notification-text">{notification.text}</div>
                <div className="notification-timestamp">{notification.timestamp}</div>
              </li>
              <div className="notification-close" onClick={() => deleteNotification(notification.id)}>
                  <FontAwesomeIcon icon="fa-solid fa-circle-xmark" />
                </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Notificationbar;