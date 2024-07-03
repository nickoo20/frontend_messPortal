import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getAllComplaints } from "../redux/complaints/complaintSlice";
import { useEffect } from "react";

const useGetAllComplaints = () => {
  const dispatch = useDispatch();
  const { refresh } = useSelector(state => state.complaint);

  const fetchAllComplaints = async () => {
    try {
      const res = await axios.get("https://backend-messportal.onrender.com/api/complaints/all", {
        withCredentials: true,
      });
      console.log(res);
      dispatch(getAllComplaints(res?.data.complaints));
    } catch (err) {
      console.error("Error fetching complaints:", err.message);
    }
  };

  useEffect(() => {
    fetchAllComplaints();
  }, [refresh]);

  return {}; // Return any necessary state or actions
};

export default useGetAllComplaints;
