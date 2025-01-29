import { useQuery} from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
const useAdmin = () => {
    const {user} =  useContext(AuthContext);
    const {data : isAdmin} = useQuery({
        queryKey: [user?.email, "isAdmin"],
        queryFn: async()=>{
            const res = await useAxiosSecure.get(`/users/admin/${user.email}`)
            console.log(res.data)
            return res.data?.admin
        }
    })
    console.log(isAdmin)
    return [isAdmin]
};

export default useAdmin;