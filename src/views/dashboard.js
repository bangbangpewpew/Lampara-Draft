import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './dashboard.css'


const Dashboard = (props) => {
  return (
    <div className="dashboard-container">
      <Helmet>
        <title>Dashboard - Lampara</title>
        <meta property="og:title" content="Dashboard - Lampara" />
      </Helmet>
      <div className="dashboard-container01">
        <svg viewBox="0 0 1024 1024" className="dashboard-icon">
          <path d="M1024 590.444l-512-397.426-512 397.428v-162.038l512-397.426 512 397.428zM896 576v384h-256v-256h-256v256h-256v-384l384-288z"></path>
        </svg>
        <h1 className="dashboard-text">Dashboard</h1>
        <input
          type="text"
          placeholder="  "
          className="dashboard-textinput input"
        />
        <svg viewBox="0 0 1024 1024" className="dashboard-icon02">
          <path d="M684.416 676.523c-1.451 1.109-2.859 2.347-4.224 3.712s-2.56 2.731-3.712 4.224c-53.675 51.755-126.677 83.541-207.147 83.541-82.475 0-157.099-33.365-211.2-87.467s-87.467-128.725-87.467-211.2 33.365-157.099 87.467-211.2 128.725-87.467 211.2-87.467 157.099 33.365 211.2 87.467 87.467 128.725 87.467 211.2c0 80.469-31.787 153.472-83.584 207.189zM926.165 865.835l-156.8-156.8c52.523-65.707 83.968-149.035 83.968-239.701 0-106.027-43.008-202.069-112.469-271.531s-165.504-112.469-271.531-112.469-202.069 43.008-271.531 112.469-112.469 165.504-112.469 271.531 43.008 202.069 112.469 271.531 165.504 112.469 271.531 112.469c90.667 0 173.995-31.445 239.701-83.968l156.8 156.8c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
        </svg>
        <svg viewBox="0 0 1024 1024" className="dashboard-icon04">
          <path d="M917.806 229.076c-22.212-30.292-53.174-65.7-87.178-99.704s-69.412-64.964-99.704-87.178c-51.574-37.82-76.592-42.194-90.924-42.194h-496c-44.112 0-80 35.888-80 80v864c0 44.112 35.888 80 80 80h736c44.112 0 80-35.888 80-80v-624c0-14.332-4.372-39.35-42.194-90.924zM785.374 174.626c30.7 30.7 54.8 58.398 72.58 81.374h-153.954v-153.946c22.984 17.78 50.678 41.878 81.374 72.572zM896 944c0 8.672-7.328 16-16 16h-736c-8.672 0-16-7.328-16-16v-864c0-8.672 7.328-16 16-16 0 0 495.956-0.002 496 0v224c0 17.672 14.326 32 32 32h224v624z"></path>
          <path d="M736 832h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"></path>
          <path d="M736 704h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"></path>
          <path d="M736 576h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"></path>
        </svg>
        <img
          alt="image"
          src="/LAMPARA/vecteezy_red-circle-png-red-dot-icon_16314339_884-200h.png"
          className="dashboard-image"
        />
        <svg viewBox="0 0 1024 1024" className="dashboard-icon09">
          <path d="M521.143 969.143c0-5.143-4-9.143-9.143-9.143-45.143 0-82.286-37.143-82.286-82.286 0-5.143-4-9.143-9.143-9.143s-9.143 4-9.143 9.143c0 55.429 45.143 100.571 100.571 100.571 5.143 0 9.143-4 9.143-9.143zM987.429 804.571c0 40-33.143 73.143-73.143 73.143h-256c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286h-256c-40 0-73.143-33.143-73.143-73.143 84.571-71.429 182.857-199.429 182.857-475.429 0-109.714 90.857-229.714 242.286-252-2.857-6.857-4.571-14.286-4.571-22.286 0-30.286 24.571-54.857 54.857-54.857s54.857 24.571 54.857 54.857c0 8-1.714 15.429-4.571 22.286 151.429 22.286 242.286 142.286 242.286 252 0 276 98.286 404 182.857 475.429z"></path>
        </svg>
        <img
          alt="image"
          src="/LAMPARA/vecteezy_red-circle-png-red-dot-icon_16314339_884-200h.png"
          className="dashboard-image1"
        />
        <h1 className="dashboard-text01">Jabez Joshua</h1>
        <svg viewBox="0 0 1024 1024" className="dashboard-icon11">
          <path d="M298 426h428l-214 214z"></path>
        </svg>
      </div>
      <div className="dashboard-container02">
        <h1 className="dashboard-text02">Good Morning! </h1>
        <span className="dashboard-text03">Tuesday, 06 October 2023</span>
      </div>
      <div className="dashboard-container03">
        <div className="dashboard-container04">
          <h1 className="dashboard-text04">Admin</h1>
          <svg viewBox="0 0 1024 1024" className="dashboard-icon13">
            <path d="M1024 590.444l-512-397.426-512 397.428v-162.038l512-397.426 512 397.428zM896 576v384h-256v-256h-256v256h-256v-384l384-288z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="dashboard-icon15">
            <path d="M521.143 969.143c0-5.143-4-9.143-9.143-9.143-45.143 0-82.286-37.143-82.286-82.286 0-5.143-4-9.143-9.143-9.143s-9.143 4-9.143 9.143c0 55.429 45.143 100.571 100.571 100.571 5.143 0 9.143-4 9.143-9.143zM987.429 804.571c0 40-33.143 73.143-73.143 73.143h-256c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286h-256c-40 0-73.143-33.143-73.143-73.143 84.571-71.429 182.857-199.429 182.857-475.429 0-109.714 90.857-229.714 242.286-252-2.857-6.857-4.571-14.286-4.571-22.286 0-30.286 24.571-54.857 54.857-54.857s54.857 24.571 54.857 54.857c0 8-1.714 15.429-4.571 22.286 151.429 22.286 242.286 142.286 242.286 252 0 276 98.286 404 182.857 475.429z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="dashboard-icon17">
            <path d="M917.806 229.076c-22.212-30.292-53.174-65.7-87.178-99.704s-69.412-64.964-99.704-87.178c-51.574-37.82-76.592-42.194-90.924-42.194h-496c-44.112 0-80 35.888-80 80v864c0 44.112 35.888 80 80 80h736c44.112 0 80-35.888 80-80v-624c0-14.332-4.372-39.35-42.194-90.924zM785.374 174.626c30.7 30.7 54.8 58.398 72.58 81.374h-153.954v-153.946c22.984 17.78 50.678 41.878 81.374 72.572zM896 944c0 8.672-7.328 16-16 16h-736c-8.672 0-16-7.328-16-16v-864c0-8.672 7.328-16 16-16 0 0 495.956-0.002 496 0v224c0 17.672 14.326 32 32 32h224v624z"></path>
            <path d="M736 832h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"></path>
            <path d="M736 704h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"></path>
            <path d="M736 576h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="dashboard-icon22">
            <path d="M512 598q108 0 225 47t117 123v86h-684v-86q0-76 117-123t225-47zM512 512q-70 0-120-50t-50-120 50-121 120-51 120 51 50 121-50 120-120 50z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="dashboard-icon24">
            <path d="M981.333 512c0-129.579-52.565-246.997-137.472-331.861s-202.283-137.472-331.861-137.472-246.997 52.565-331.861 137.472-137.472 202.283-137.472 331.861 52.565 246.997 137.472 331.861 202.283 137.472 331.861 137.472 246.997-52.565 331.861-137.472 137.472-202.283 137.472-331.861zM896 512c0 106.069-42.923 201.984-112.469 271.531s-165.461 112.469-271.531 112.469-201.984-42.923-271.531-112.469-112.469-165.461-112.469-271.531 42.923-201.984 112.469-271.531 165.461-112.469 271.531-112.469 201.984 42.923 271.531 112.469 112.469 165.461 112.469 271.531zM469.333 256v256c0 16.597 9.472 31.019 23.595 38.144l170.667 85.333c21.077 10.539 46.72 2.005 57.259-19.072s2.005-46.72-19.072-57.259l-147.115-73.515v-229.632c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="dashboard-icon26">
            <path d="M512 554q64 0 140 18t139 60 63 94v128h-684v-128q0-52 63-94t139-60 140-18zM512 170q70 0 120 51t50 121-50 120-120 50-120-50-50-120 50-121 120-51zM512 636q-88 0-174 33t-86 57v46h520v-46q0-24-86-57t-174-33zM512 252q-38 0-64 26t-26 64 26 63 64 25 64-25 26-63-26-64-64-26z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="dashboard-icon28">
            <path d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"></path>
          </svg>
          <Link to="/dashboard" className="dashboard-navlink">
            <img
              alt="image"
              src="/LAMPARA/logo1-200h.png"
              className="dashboard-image2"
            />
          </Link>
          <Link to="/dashboard" className="dashboard-navlink1">
            <h1 className="dashboard-text05">LAMPARA</h1>
          </Link>
          <Link to="/dashboard" className="dashboard-navlink2 button">
            Scheduler
          </Link>
          <Link to="/dashboard" className="dashboard-navlink3 button">
            Dashboard
          </Link>
          <button type="button" className="dashboard-button button">
            Notification
          </button>
          <Link to="/calendar" className="dashboard-navlink4 button">
            Reports
          </Link>
          <button type="button" className="dashboard-button1 button">
            Users
          </button>
          <Link to="/view-schedule" className="dashboard-navlink5 button">
            Schedule
          </Link>
          <button type="button" className="dashboard-button2 button">
            Account
          </button>
          <button type="button" className="dashboard-button3 button">
            Settings
          </button>
        </div>
      </div>
      <div className="dashboard-container05">
        <div className="dashboard-container06">
          <svg viewBox="0 0 1024 1024" className="dashboard-icon30">
            <path d="M512 598q108 0 225 47t117 123v86h-684v-86q0-76 117-123t225-47zM512 512q-70 0-120-50t-50-120 50-121 120-51 120 51 50 121-50 120-120 50z"></path>
          </svg>
          <span className="dashboard-text06">User</span>
          <span className="dashboard-text07">15</span>
          <span className="dashboard-text08">Total Users</span>
          <span className="dashboard-text09">1</span>
          <span className="dashboard-text10">Online</span>
        </div>
        <div className="dashboard-container07">
          <svg
            viewBox="0 0 804.5714285714286 1024"
            className="dashboard-icon32"
          >
            <path d="M731.429 402.286c0-20-16.571-36.571-36.571-36.571s-36.571 16.571-36.571 36.571 16.571 36.571 36.571 36.571 36.571-16.571 36.571-36.571zM804.571 402.286c0 48-30.286 88-73.143 103.429v225.714c0 121.143-114.857 219.429-256 219.429s-256-98.286-256-219.429v-75.429c-124-15.429-219.429-106.857-219.429-217.143v-292.571c0-20 16.571-36.571 36.571-36.571 3.429 0 6.286 0.571 9.143 1.143 12.571-22.286 36.571-37.714 64-37.714 40.571 0 73.143 32.571 73.143 73.143s-32.571 73.143-73.143 73.143c-13.143 0-25.714-4-36.571-10.286v229.714c0 80.571 82.286 146.286 182.857 146.286s182.857-65.714 182.857-146.286v-229.714c-10.857 6.286-23.429 10.286-36.571 10.286-40.571 0-73.143-32.571-73.143-73.143s32.571-73.143 73.143-73.143c27.429 0 51.429 15.429 64 37.714 2.857-0.571 5.714-1.143 9.143-1.143 20 0 36.571 16.571 36.571 36.571v292.571c0 110.286-95.429 201.714-219.429 217.143v75.429c0 80.571 82.286 146.286 182.857 146.286s182.857-65.714 182.857-146.286v-225.714c-42.857-15.429-73.143-55.429-73.143-103.429 0-60.571 49.143-109.714 109.714-109.714s109.714 49.143 109.714 109.714z"></path>
          </svg>
          <span className="dashboard-text11">Nurses</span>
          <span className="dashboard-text12">6</span>
          <span className="dashboard-text13">Scheduled Today</span>
        </div>
      </div>
      <div className="dashboard-container09">
        <div className="dashboard-container10">
          <div className="dashboard-container11">
            <Script
              html={`<script src="https://cdn.commoninja.com/sdk/latest/commonninja.js" defer></script>
<div class="commonninja_component pid-e041c086-e798-4bbc-ae40-f47d6665a543"></div>`}
            ></Script>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
