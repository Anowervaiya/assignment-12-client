import { Navigate } from 'react-router-dom';

import useRole from '../Hooks/useRole';
import Loading from '../Components/Loading/Loading';

const ModeratorRout = ({ children }) => {
  const [role, isLoading] = useRole();

  if (isLoading) return <Loading />;

   if (role === 'admin' || role === 'moderator') {
     return children;
   }
  return <Navigate to="/" />;
};

export default ModeratorRout;
