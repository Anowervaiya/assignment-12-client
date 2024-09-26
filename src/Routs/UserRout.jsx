import { Navigate } from 'react-router-dom';

import Loading from '../Components/Loading/Loading';
import useRole from '../Hooks/useRole';

const UserRout = ({ children }) => {
  const [role, isLoading] = useRole();

  if (isLoading) return <Loading />;
  if (role === 'user') return children;
  return <Navigate to="/" />;
};

export default UserRout;
