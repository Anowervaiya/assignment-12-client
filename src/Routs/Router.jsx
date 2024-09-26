import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import HomeContainer from '../Pages/Home/HomeContainer/HomeContainer';
import SignUp from '../Pages/SignUp/SignUp';
import DashboardContainer from '../Pages/Dashboard/DasboardContainer/DashboardContainer';
import AddScholarship from '../Pages/Dashboard/shared/AddScholarship';
import ManageScholarships from '../Pages/Dashboard/shared/ManageScholarships';
import AllReviews from '../Pages/Dashboard/shared/AllReviews';
import AllAppliedScholarship from '../Pages/Dashboard/shared/AllAppliedScholarship';
import MyProfile from '../Pages/Dashboard/shared/MyProfile';
import Details from '../Pages/Dashboard/shared/Details';
import AllScholarship from '../Pages/AllScholarship/AllScholarship';
import ApplyScholarship from '../Pages/ApplyScholarship/ApplyScholarship';
import MyApplication from '../Pages/Dashboard/UserDashboard/MyApplication';
import MyReviews from '../Pages/Dashboard/UserDashboard/MyReviews';
import ManageUser from '../Pages/Dashboard/AdminDashboard/ManageUser';
import PrivateRoute from './PrivateRout';
import SignIn from '../Pages/LogIn/LogIn';
import AdminRoute from './AdminRout';
import ModeratorRout from './ModeratorRout';
import UserRout from './UserRout';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        index: true,
        element: <HomeContainer></HomeContainer>,
      },
      {
        path: 'details/:id',
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
      },
      {
        path: 'all-scholarship',
        element: <AllScholarship></AllScholarship>,
      },
      {
        path: 'apply-scholarship/:id',
        element: <ApplyScholarship></ApplyScholarship>,
      },
    ],
  },
  {
    path: '/SignUp',
    element: <SignUp></SignUp>,
  },
  {
    path: '/SignIn',
    element: <SignIn></SignIn>,
  },
  {
    path: '/Dashboard',
    element: <DashboardContainer></DashboardContainer>,
    children: [
      {
        path: 'my-profile',
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: 'add-scholarship',
        element: (
          <PrivateRoute>
            {' '}
            <ModeratorRout>
              <AddScholarship></AddScholarship>
            </ModeratorRout>
          </PrivateRoute>
        ),
      },
      {
        path: 'manage-scholarships',
        element: (
          <PrivateRoute>
            {' '}
            <ModeratorRout>
              <ManageScholarships></ManageScholarships>
            </ModeratorRout>
          </PrivateRoute>
        ),
      },
      {
        path: 'all-reviews',
        element: (
          <PrivateRoute>
            {' '}
            <ModeratorRout>
              {' '}
              <AllReviews></AllReviews>
            </ModeratorRout>
          </PrivateRoute>
        ),
      },
      {
        path: 'applied-scholarship',
        element: (
          <PrivateRoute>
            <ModeratorRout>
              <AllAppliedScholarship></AllAppliedScholarship>
            </ModeratorRout>
          </PrivateRoute>
        ),
      },
      {
        path: 'my-application',
        element: (
          <PrivateRoute>
            <UserRout>
              <MyApplication></MyApplication>
            </UserRout>
          </PrivateRoute>
        ),
      },
      {
        path: 'my-reviews',
        element: (
          <PrivateRoute>
            <UserRout>
              <MyReviews></MyReviews>
            </UserRout>
          </PrivateRoute>
        ),
      },
      {
        path: 'manage-user',
        element: (
          <PrivateRoute>
            {' '}
            <AdminRoute>
              {' '}
              <ManageUser></ManageUser>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;