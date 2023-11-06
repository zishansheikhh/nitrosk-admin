import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './projects.styles.css';

const ProjectTimeline = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [taskDetails, setTaskDetails] = useState('');

  const handleAddTaskClick = () => {
    setIsFormVisible(true);
  };

  const handleCreateTask = () => {
    // Handle the creation of the task here
    // You can add your logic to save the task details
    console.log('Task Name:', taskName);
    console.log('Start Date:', startDate);
    console.log('Due Date:', dueDate);
    console.log('Task Details:', taskDetails);

    // Clear the form and hide it
    setTaskName('');
    setStartDate('');
    setDueDate('');
    setTaskDetails('');
    setIsFormVisible(false);
  };

  return (
    <div className="project-timeline">
      <h3>Project Timeline</h3>
      <ul className="timeline-list">
        {/* Existing timeline items */}
        <li>
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <p className="timeline-date">2023-01-15</p>
            <p className="timeline-task">Task 1: Project Kick-off</p>
          </div>
        </li>
        <li>
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <p className="timeline-date">2023-02-10</p>
            <p className="timeline-task">Task 2: Design Phase</p>
          </div>
        </li>
        <li>
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <p className="timeline-date">2023-03-30</p>
            <p className="timeline-task">Task 3: Development</p>
          </div>
        </li>
        <li>
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <p className="timeline-date">2023-04-20</p>
            <p className="timeline-task">Task 4: Testing & Deployment</p>
          </div>
        </li>
      </ul>
      <button className="btn add-task-btn" onClick={handleAddTaskClick}>
        <FontAwesomeIcon icon="plus" />
      </button>
      {isFormVisible && (
        <div className="task-form">
        <FontAwesomeIcon icon="fa-solid fa-circle-xmark" />
          <h3>Add Task</h3>
          <form className='add-task-form'>
            <input
                type="text"
                placeholder="Task Name"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
            />
            <input
                type="date"
                placeholder="Start Date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
            />
            <input
                type="date"
                placeholder="Due Date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
            />
            <textarea
                placeholder="Task Details"
                value={taskDetails}
                onChange={(e) => setTaskDetails(e.target.value)}
            />
            <button className="create-task-btn btn" onClick={handleCreateTask}>
                Create
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProjectTimeline;
