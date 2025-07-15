import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../Pages/HomePage/Home';
import Dashboard from '../Pages/HomePage/Dashboard';
import Calendar from '../Pages/HomePage/Calendar';
import ActivityTabs from '../Pages/HomePage/Tab/ActivityTabs';

import OrganizationPage from '../Pages/HomePage/Organization/OrganizationPage';
import Overview from '../Pages/HomePage/Organization/Overview';
import Announcements from '../Pages/HomePage/Organization/Announcements';
import Policies from '../Pages/HomePage/Organization/Policies';
import EmployeeTree from '../Pages/HomePage/Organization/EmployeeTree';
import EmployeeList from '../Pages/HomePage/Organization/EmployeeList';
import DepartmentTree from '../Pages/HomePage/Organization/DepartmentTree';

import LeaveTracker from '../Pages/LeaveTrackers/LeaveTracker';
import LeaveSummary from '../Pages/LeaveTrackers/LeaveSummary';


import Feeds from '../Pages/HomePage/Activities/Feeds';
import Profiles from '../Pages/HomePage/Activities/Profiles';
import Approvals from '../Pages/HomePage/Activities/Approvals';
import Leavs from '../Pages/HomePage/Activities/Leavs';
import Attendances from '../Pages/HomePage/Activities/Attendances';
import Time from '../Pages/HomePage/Activities/Time';
import Timesheet from '../Pages/HomePage/Activities/Timesheet';
import Job from '../Pages/HomePage/Activities/Job';
import Files from '../Pages/HomePage/Activities/Files';
import History from '../Pages/HomePage/Activities/History';
import Activity from '../Pages/HomePage/Activities/Activity';
import LeaveBalance from '../Pages/LeaveTrackers/LeaveBalance';
import LeaveRequests from '../Pages/LeaveTrackers/LeaveRequests';
import AttendanceSummary from '../Pages/Attendance/AttendanceSummary';
import Attendance from '../Pages/Attendance/Attendance';
import JobSchedule from '../Pages/Time/JobSchedule';
import Projects from '../Pages/Time/Projects';
import Jobs from '../Pages/Time/Jobs';
import Timesheets from '../Pages/Time/Timesheets';
import TimeLogs from '../Pages/Time/TimeLogs';
import TimeTracker from '../Pages/Time/TimeTracker';
import Performance from '../Pages/Performance/Performance';
import SharedWithMyRole from '../Pages/Files/SharedWithMyRole';
import SharedWithMe from '../Pages/Files/SharedWithMe';
import File from '../Pages/Files/File';
import More from '../Pages/Mores/More';
import EmployeeManagement from '../Pages/EmployeeManagements/EmployeeManagement';
import HrLetter from '../Pages/HRLetters/HrLetter';
import AddressProof from '../Pages/HRLetters/AddressProof';
import Bonafide from '../Pages/HRLetters/Bonafide';
import Experience from '../Pages/HRLetters/Experience';
import Reports from '../Pages/Reports/Reports';
import TeamReports from '../Pages/Reports/TeamReports';
import TeamTab from '../Pages/LeaveTrackers/Team/TeamTab';
import OnLeave from '../Pages/LeaveTrackers/Team/OnLeave';
import Holiday from '../Pages/LeaveTrackers/Holidays/Holiday';
import DepartmentView from '../Pages/HomePage/Organization/DepartmentView';
import BirthdayPage from '../Pages/HomePage/Organization/BirthdayPage';
import NewHires from '../Pages/HomePage/Organization/NewHires';
import CareerHistory from '../Pages/Reports/CareerHistory';
import LeavesBalance from '../Pages/Reports/LeavesBalance';
import TravelRequest from '../Pages/Travel/TravelRequest';
import TravelExpense from '../Pages/Travel/TravelExpense';

// import OnLeave from '../Pages/LeaveTrackers/Team/OnLeave';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}>
        <Route path="activity" element={<Activity />} />
        <Route path="feeds" element={<Feeds />} />
        <Route path="profiles" element={<Profiles />} />
        <Route path="approvals" element={<Approvals />} />
        <Route path="leavs" element={<Leavs />} />
        <Route path="attendances" element={<Attendances />} />
        <Route path="times" element={<Time />} />
        <Route path="timesheet" element={<Timesheet />} />
        <Route path="job" element={<Job />} />
        <Route path="files" element={<Files />} />
        <Route path="history" element={<History />} />
      </Route>

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/tabs" element={<ActivityTabs />} />

      <Route path="/organization" element={<OrganizationPage />}>
        <Route path="overview" element={<Overview />} />
        <Route path="announcements" element={<Announcements />} />
        <Route path="policies" element={<Policies />} />
        <Route path="employee-tree" element={<EmployeeTree />} />
        <Route path="employee-list" element={<EmployeeList />} />
        <Route path="department-tree" element={<DepartmentTree />} />
        <Route path="department-view" element={<DepartmentView />} />
        <Route path="birthday-page" element={<BirthdayPage />} />
        <Route path='new-hires' element={<NewHires />} />
      </Route>

      <Route path="/leave" element={<LeaveTracker />}>
        <Route path="/leave/leave-summary" element={<LeaveSummary />} />
        <Route path="/leave/leave-balance" element={<LeaveBalance />} />
        <Route path="/leave/leave-requests" element={<LeaveRequests />} />
        {/* <Route path='/leave/onleave' element={<OnLeave/>} /> */}
        <Route path='/leave/team-tab' element={<TeamTab/>} />
            <Route path='/leave/team-tab/onleave' element={<OnLeave/>} >
        </Route>
        <Route path='/leave/holidays' element={<Holiday/>} />
        
      </Route>
      


      <Route path="/attendance" element={<Attendance />} >
        <Route path="/attendance/AttendanceSummary" element={<AttendanceSummary />}/>
       </Route>
      <Route path="/time" element={<TimeTracker />} />
      <Route path="/time/time-logs" element={<TimeLogs />} />
      <Route path="/time/time-sheets" element={<Timesheets />} />
      <Route path="/time/jobs" element={<Jobs />} />
      <Route path="/time/projects" element={<Projects />} />
      <Route path="/time/job-schedule" element={<JobSchedule />} />

      <Route path="/performance" element={<Performance />} />

      <Route path="/file" element={<File />} />
      <Route path="/file/shared-with-me" element={<SharedWithMe />} />
      <Route path="/file/shared-with-my-role" element={<SharedWithMyRole />} />

      <Route path="/more" element={<More />} />

      <Route path="/employee-management" element={<EmployeeManagement />} />


      <Route path="/hr-letters" element={<HrLetter />} />
      <Route path="/hrletters/address" element={<AddressProof />} />
      <Route path="/hrletters/bonafide" element={<Bonafide />} />
      <Route path="/hrletters/experience" element={<Experience />} />


      <Route path="/reports" element={<Reports />} />
      <Route path="/team" element={<TeamReports />} />
      <Route path="/career-history" element={<CareerHistory />} />
      <Route path="/leaves-balance" element={<LeavesBalance />} />

      <Route path="/travel-request" element={<TravelRequest />} />
      <Route path="/travel-expense" element={<TravelExpense />} />

      


    </Routes>
  );
};

export default MainRoutes;
