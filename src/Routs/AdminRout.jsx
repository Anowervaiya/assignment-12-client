import { Navigate } from 'react-router-dom';

import Loading from '../Components/Loading/Loading';
import useRole from '../Hooks/useRole';

const AdminRoute = ({ children }) => {
  const [role, isLoading] = useRole();

  if (isLoading) return <Loading />;
  if (role === 'admin') return children;
  return <Navigate to="/" />;
};

export default AdminRoute;


