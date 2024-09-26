
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
const useRole = () => {
  const {user, loading } = useAuth();
  const AxiosSecure = useAxiosSecure();

  const { data: role = '', isLoading } = useQuery({
    queryKey: ['role',user?.email],
    enabled: !loading || !!user?.email,
    queryFn: async () => {
      const  {data}  = await AxiosSecure(`/user-role/${user?.email}`);
    
      return data;
    },
  });
  return [role, isLoading];
};

export default useRole;