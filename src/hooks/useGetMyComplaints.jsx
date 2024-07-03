import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyComplaints } from "../redux/complaints/complaintSlice";
import axios from "axios";

const useGetMyComplaints = (id) => {
    const dispatch = useDispatch() ;
    const { refresh } = useSelector(state=>state.complaint) ;
    const fetchComplaints = async () => {
        try {
        //   console.log(`Fetching complaints for ID: ${id}`);
            const response = await axios.get(`https://backend-messportal.onrender.com/api/complaints/my/${id}`,{
              withCredentials:true,
            });
             // Debugging: Log the response
             console.log('My Complaints :', response.data);
             dispatch(getMyComplaints(response?.data)) ; 
            // setComplaints(response?.data) ;
        } catch (err) {
                // Debugging: Log the error
                console.error('Error fetching complaints:', err);
                // setError('Error fetching complaints: ' + err.message);
        }
    };
    // fetchComplaints() ;
    useEffect(()=>{
        fetchComplaints() ; 
    },[refresh, id])  ;

}

export default useGetMyComplaints;