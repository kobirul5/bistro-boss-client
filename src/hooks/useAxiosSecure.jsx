import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
 const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {
    const {logoutUser} = useContext(AuthContext)


    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem("access-token")
        // console.log("request stop by interceptors", token)
        config.headers.authorization= `bearer ${token}`;
        return config;
      }, function (error) {
        // Do something with request error
        return Promise.reject(error);
      });

      // erroor
      axiosSecure.interceptors.response.use(function (response) {
        return response;
      }, async (error)=> {
        const status = error.response.status;
        if(status===401 || status === 403){
          await logoutUser();
        }
        // console.log(status)
        return Promise.reject(error);
      });

    return axiosSecure;
};

export default useAxiosSecure;