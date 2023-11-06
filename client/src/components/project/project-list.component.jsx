import React, { useState } from 'react';
import { Link } from 'react-router-dom/dist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './projects.styles.css'

const ProjectsList = () => {
  const [projects, setProjects] = useState([
    {
      projectId: 1,
      projectName: 'Saiyed Farhan',
      clientName: 'Client X',
      projectStartDate: '2023-01-15',
      projectDeadline: '2023-03-30',
      paymentStatus: 'Full',
      projectStatus: 'Finished',
    },
    {
      projectId: 2,
      projectName: 'Mhyra Study',
      clientName: 'Client Y',
      projectStartDate: '2023-02-10',
      projectDeadline: '2023-04-20',
      paymentStatus: 'Partial',
      projectStatus: 'Working',
    },
    {
        projectId: 3,
        projectName: 'Swapy CCTV',
        clientName: 'Client Y',
        projectStartDate: '2023-02-10',
        projectDeadline: '2023-04-20',
        paymentStatus: 'Partial',
        projectStatus: 'Pending',
      },
      {
        projectId: 4,
        projectName: '11Acre',
        clientName: 'Client Y',
        projectStartDate: '2023-02-10',
        projectDeadline: '2023-04-20',
        paymentStatus: 'Partial',
        projectStatus: 'Stopped',
      },
  ]);

  const getIconColorClass = (status) => {
    switch (status) {
      case 'Finished':
        return 'icon-green';
      case 'Working':
        return 'icon-orange';
      case 'Pending':
        return 'icon-yellow';
      case 'Stopped':
        return 'icon-red';
      default:
        return '';
    }
  };

  return (
    <div className="container m-auto">
      <div className="project-list-wrapper">
        <h1>Projects</h1>
        <table>
          <thead>
            <tr>
              <th>Project Id</th>
              <th>Project Name</th>
              <th>Client Name</th>
              <th>Project Start Date</th>
              <th>Project Deadline</th>
              <th>Payment Status</th>
              <th>Project Status</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.projectId}>
                <td className='text-align-center'>{project.projectId}</td>
                <td>
                  <Link to="/project-details">{project.projectName}</Link>
                </td>
                <td>{project.clientName}</td>
                <td>{project.projectStartDate}</td>
                <td>{project.projectDeadline}</td>
                <td>{project.paymentStatus}</td>
                <td className={`text-align-center ${getIconColorClass(project.projectStatus)}`}>
                  <FontAwesomeIcon icon="fa-solid fa-circle" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectsList;