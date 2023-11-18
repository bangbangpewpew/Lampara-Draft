import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import Script from 'dangerous-html/react';
import { Helmet } from 'react-helmet';
import './view-schedule.css';


const ViewSchedule = (props) => {
  const calendarRef = useRef(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    start: '',
    end: '',
  });
  const [editedEvent, setEditedEvent] = useState({
    title: '',
    start: '',
    end: '',
  });

  const openCreateModal = () => {
    setShowCreateModal(true);
  };

  const openEditModal = () => {
    console.log('Edit button clicked');
    // Assuming you have the details of the event you want to edit, set them in the state
    const existingEvent = {
      title: 'blah', // Replace with the actual title
      start: 'Existing Start Time', // Replace with the actual start time
      end: 'Existing End Time', // Replace with the actual end time
      // Set other properties as needed
    };
  
    setEditedEvent(existingEvent);
    setShowEditModal(true);
  };

  const closeModal = () => {
    console.log('Close button clicked');
    setShowCreateModal(false);
    setShowEditModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Check if the modal is for editing, use editedEvent state
    const eventToUpdate = showEditModal ? editedEvent : newEvent;

    if (showEditModal) {
      setEditedEvent({
        ...eventToUpdate,
        [name]: value,
      });
    } else {
      setNewEvent({
        ...eventToUpdate,
        [name]: value,
      });
    }
  }

  const handleCreateSchedule = () => {
    const calendar = calendarRef.current;

    if (showEditModal && calendar) {
      // Logic for updating the edited event in the calendar
      // Replace with your logic to update the existing event
    } else if (calendar) {
      calendar.addEvent(newEvent);
    }

    closeModal();
  };

  useEffect(() => {
    const calendarEl = document.getElementById('full-calendar');

    const calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
      // Add other calendar options here
    });

    calendarRef.current = calendar;
    calendar.render();

    return () => {
      calendar.destroy();
    };
  }, []);

  return (
    <div className="view-schedule-container">
      <Helmet>
        <title>View-Schedule - Lampara</title>
        <meta property="og:title" content="View-Schedule - Lampara" />
      </Helmet>
      <div className="view-schedule-container1">
      <div className="view-schedule-container2">
          <h1 className="view-schedule-text">Admin</h1>
          <svg viewBox="0 0 1024 1024" className="view-schedule-icon">
            <path d="M1024 590.444l-512-397.426-512 397.428v-162.038l512-397.426 512 397.428zM896 576v384h-256v-256h-256v256h-256v-384l384-288z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="view-schedule-icon02">
            <path d="M521.143 969.143c0-5.143-4-9.143-9.143-9.143-45.143 0-82.286-37.143-82.286-82.286 0-5.143-4-9.143-9.143-9.143s-9.143 4-9.143 9.143c0 55.429 45.143 100.571 100.571 100.571 5.143 0 9.143-4 9.143-9.143zM987.429 804.571c0 40-33.143 73.143-73.143 73.143h-256c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286h-256c-40 0-73.143-33.143-73.143-73.143 84.571-71.429 182.857-199.429 182.857-475.429 0-109.714 90.857-229.714 242.286-252-2.857-6.857-4.571-14.286-4.571-22.286 0-30.286 24.571-54.857 54.857-54.857s54.857 24.571 54.857 54.857c0 8-1.714 15.429-4.571 22.286 151.429 22.286 242.286 142.286 242.286 252 0 276 98.286 404 182.857 475.429z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="view-schedule-icon04">
            <path d="M917.806 229.076c-22.212-30.292-53.174-65.7-87.178-99.704s-69.412-64.964-99.704-87.178c-51.574-37.82-76.592-42.194-90.924-42.194h-496c-44.112 0-80 35.888-80 80v864c0 44.112 35.888 80 80 80h736c44.112 0 80-35.888 80-80v-624c0-14.332-4.372-39.35-42.194-90.924zM785.374 174.626c30.7 30.7 54.8 58.398 72.58 81.374h-153.954v-153.946c22.984 17.78 50.678 41.878 81.374 72.572zM896 944c0 8.672-7.328 16-16 16h-736c-8.672 0-16-7.328-16-16v-864c0-8.672 7.328-16 16-16 0 0 495.956-0.002 496 0v224c0 17.672 14.326 32 32 32h224v624z"></path>
            <path d="M736 832h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"></path>
            <path d="M736 704h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"></path>
            <path d="M736 576h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="view-schedule-icon09">
            <path d="M512 598q108 0 225 47t117 123v86h-684v-86q0-76 117-123t225-47zM512 512q-70 0-120-50t-50-120 50-121 120-51 120 51 50 121-50 120-120 50z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="view-schedule-icon11">
            <path d="M981.333 512c0-129.579-52.565-246.997-137.472-331.861s-202.283-137.472-331.861-137.472-246.997 52.565-331.861 137.472-137.472 202.283-137.472 331.861 52.565 246.997 137.472 331.861 202.283 137.472 331.861 137.472 246.997-52.565 331.861-137.472 137.472-202.283 137.472-331.861zM896 512c0 106.069-42.923 201.984-112.469 271.531s-165.461 112.469-271.531 112.469-201.984-42.923-271.531-112.469-112.469-165.461-112.469-271.531 42.923-201.984 112.469-271.531 165.461-112.469 271.531-112.469 201.984 42.923 271.531 112.469 112.469 165.461 112.469 271.531zM469.333 256v256c0 16.597 9.472 31.019 23.595 38.144l170.667 85.333c21.077 10.539 46.72 2.005 57.259-19.072s2.005-46.72-19.072-57.259l-147.115-73.515v-229.632c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="view-schedule-icon13">
            <path d="M981.333 512c0-129.579-52.565-246.997-137.472-331.861s-202.283-137.472-331.861-137.472-246.997 52.565-331.861 137.472-137.472 202.283-137.472 331.861 52.565 246.997 137.472 331.861 202.283 137.472 331.861 137.472 246.997-52.565 331.861-137.472 137.472-202.283 137.472-331.861zM896 512c0 106.069-42.923 201.984-112.469 271.531s-165.461 112.469-271.531 112.469-201.984-42.923-271.531-112.469-112.469-165.461-112.469-271.531 42.923-201.984 112.469-271.531 165.461-112.469 271.531-112.469 201.984 42.923 271.531 112.469 112.469 165.461 112.469 271.531zM469.333 256v256c0 16.597 9.472 31.019 23.595 38.144l170.667 85.333c21.077 10.539 46.72 2.005 57.259-19.072s2.005-46.72-19.072-57.259l-147.115-73.515v-229.632c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="view-schedule-icon15">
            <path d="M512 554q64 0 140 18t139 60 63 94v128h-684v-128q0-52 63-94t139-60 140-18zM512 170q70 0 120 51t50 121-50 120-120 50-120-50-50-120 50-121 120-51zM512 636q-88 0-174 33t-86 57v46h520v-46q0-24-86-57t-174-33zM512 252q-38 0-64 26t-26 64 26 63 64 25 64-25 26-63-26-64-64-26z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="view-schedule-icon17">
            <path d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"></path>
          </svg>
          <Link to="/dashboard" className="view-schedule-navlink">
            <img
              alt="image"
              src="/LAMPARA/logo1-200h.png"
              className="view-schedule-image"
            />
          </Link>
          <Link to="/dashboard" className="view-schedule-navlink1">
            <h1 className="view-schedule-text1">LAMPARA</h1>
          </Link>
          <Link to="/dashboard" className="view-schedule-navlink2 button">
            Scheduler
          </Link>
          <Link to="/dashboard" className="view-schedule-navlink3 button">
            Dashboard
          </Link>
          <button type="button" className="view-schedule-button button">
            Notification
          </button>
          <button type="button" className="view-schedule-button1 button">
            Reports
          </button>
          <button type="button" className="view-schedule-button2 button">
            Users
          </button>
          <Link to="/view-schedule" className="view-schedule-navlink4 button">
            Schedule
          </Link>
          <button type="button" className="view-schedule-button3 button">
            Account
          </button>
          <button type="button" className="view-schedule-button4 button">
            Settings
          </button>
        </div>
      </div>
      <div className="view-schedule-container3">
        <div className="view-schedule-container4">
          <div className="view-schedule-container5">
            {/* Add an element to render the FullCalendar */}
            <div id="full-calendar"></div>
          </div>
        </div>
      </div>
      <div className={`modal ${showCreateModal ? 'show' : ''}`}>
        <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
          <h2>Create Schedule</h2>
          <form>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={newEvent.title}
              onChange={handleInputChange}
            />
            <label>Start Time:</label>
            <input
              type="text"
              name="start"
              value={newEvent.start}
              onChange={handleInputChange}
            />
            <label>End Time:</label>
            <input
              type="text"
              name="end"
              value={newEvent.end}
              onChange={handleInputChange}
            />
            {/* Additional Inputs */}
            <label>Starting Date:</label>
            <input
              type="text"
              name="dateRange"
              value={newEvent.dateRange}
              onChange={handleInputChange}
            />
            <label>Ending Date:</label>
            <input
              type="text"
              name="timeRange"
              value={newEvent.timeRange}
              onChange={handleInputChange}
            />
            <label>Add User:</label>
            <input
              type="text"
              name="addUser"
              value={newEvent.addUser}
              onChange={handleInputChange}
            />
            {/* Dropdowns */}
            <label>Assigned Area:</label>
            {/* Placeholder for dropdown, replace with your dropdown component */}
            <select>
              <option value="">Emergency Room</option>
              {/* Add your dropdown options here */}
            </select>
            <label>Admin:</label>
            {/* Placeholder for dropdown, replace with your dropdown component */}
            <select>
              <option value="">Diana Mae</option>
              {/* Add your dropdown options here */}
            </select>
            <button type="button" className="view-schedule-buttons" onClick={handleCreateSchedule}>
              Save
            </button>
          </form>
        </div>
      </div>
      {/* Edit Schedule Modal */}
      <div className={`modal ${showEditModal ? 'show' : ''}`}>
      <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
          <h2>Edit Schedule</h2>
          <form>
            <label>New Title:</label>
            <input
              type="text"
              name="title"
              value={showEditModal ? editedEvent.title : ''}
              onChange={handleInputChange}
            />
            <label>New Start Time:</label>
            <input
              type="text"
              name="start"
              value={showEditModal ? editedEvent.start : ''}
              onChange={handleInputChange}
            />
            <label>New End Time:</label>
            <input
              type="text"
              name="end"
              value={showEditModal ? editedEvent.end : ''}
              onChange={handleInputChange}
            />
            <label>Users:</label>
            <input
              type="text"
              name="addUser"
              value={showEditModal ? editedEvent.addUser: ''}
              onChange={handleInputChange}
            />
            {/* Dropdowns */}
            <label>Assigned Area:</label>
            {/* Placeholder for dropdown, replace with your dropdown component */}
            <select>
              <option value="">Emergency Room</option>
              {/* Add your dropdown options here */}
            </select>
            <label>Admin:</label>
            {/* Placeholder for dropdown, replace with your dropdown component */}
            <select>
              <option value="">Diana Mae</option>
              {/* Add your dropdown options here */}
            </select>
            {/* Additional Inputs for Edit Schedule */}
            {/* ... (Add any additional inputs needed for editing) */}
            <button type="button" className="view-schedule-buttons02" onClick={handleCreateSchedule}>
              Save Changes
            </button>
          </form>
        </div>
      </div>
      <div className="view-schedule-container6">
        <h1 className="view-schedule-text2">Schedule</h1>
        <svg viewBox="0 0 1024 1024" className="view-schedule-icon19">
          <path d="M917.806 229.076c-22.212-30.292-53.174-65.7-87.178-99.704s-69.412-64.964-99.704-87.178c-51.574-37.82-76.592-42.194-90.924-42.194h-496c-44.112 0-80 35.888-80 80v864c0 44.112 35.888 80 80 80h736c44.112 0 80-35.888 80-80v-624c0-14.332-4.372-39.35-42.194-90.924zM785.374 174.626c30.7 30.7 54.8 58.398 72.58 81.374h-153.954v-153.946c22.984 17.78 50.678 41.878 81.374 72.572zM896 944c0 8.672-7.328 16-16 16h-736c-8.672 0-16-7.328-16-16v-864c0-8.672 7.328-16 16-16 0 0 495.956-0.002 496 0v224c0 17.672 14.326 32 32 32h224v624z"></path>
          <path d="M736 832h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"></path>
          <path d="M736 704h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"></path>
          <path d="M736 576h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"></path>
        </svg>
        <img
          alt="image"
          src="/LAMPARA/vecteezy_red-circle-png-red-dot-icon_16314339_884-200h.png"
          className="view-schedule-image1"
        />
        <svg viewBox="0 0 1024 1024" className="view-schedule-icon24">
          <path d="M521.143 969.143c0-5.143-4-9.143-9.143-9.143-45.143 0-82.286-37.143-82.286-82.286 0-5.143-4-9.143-9.143-9.143s-9.143 4-9.143 9.143c0 55.429 45.143 100.571 100.571 100.571 5.143 0 9.143-4 9.143-9.143zM987.429 804.571c0 40-33.143 73.143-73.143 73.143h-256c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286h-256c-40 0-73.143-33.143-73.143-73.143 84.571-71.429 182.857-199.429 182.857-475.429 0-109.714 90.857-229.714 242.286-252-2.857-6.857-4.571-14.286-4.571-22.286 0-30.286 24.571-54.857 54.857-54.857s54.857 24.571 54.857 54.857c0 8-1.714 15.429-4.571 22.286 151.429 22.286 242.286 142.286 242.286 252 0 276 98.286 404 182.857 475.429z"></path>
        </svg>
        <img
          alt="image"
          src="/LAMPARA/vecteezy_red-circle-png-red-dot-icon_16314339_884-200h.png"
          className="view-schedule-image2"
        />
        <h1 className="view-schedule-text3">Jabez Joshua</h1>
        <svg viewBox="0 0 1024 1024" className="view-schedule-icon26">
          <path d="M298 426h428l-214 214z"></path>
        </svg>
      </div>
      <div className="view-schedule-container7">
      <button id="edit-schedule-button" className="view-schedule-button5" onClick={openEditModal}> Edit Schedule </button>
          <button type="button" className="view-schedule-button6 button" onClick={openCreateModal}>
            Create Schedule
          </button>
          <h1 className="view-schedule-text4">These are the schedule today.</h1>
          <span className="view-schedule-text5">Tuesday, 06 October 2023</span>
      </div>
    </div>
  );
};

export default ViewSchedule;
