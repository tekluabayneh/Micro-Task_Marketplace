import axios from "axios";
import { toast } from "react-hot-toast";
import { useEffect, useRef } from "react";
import { useMutation } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
const UpdateFreelancerPorfile = () => {
  let userEmail = localStorage.getItem("userEmail");
  const dispatch = useDispatch();
  const profileData = useSelector(
    (state) => state.FreelancerProfileSettingSlice.Fr_slide
  );

  console.log("data man", profileData);
  console.log("this is the email F", userEmail);

  const updateFreelancer = (data) => {
    return axios.put("http://localhost:5000/api/update/freelancer", data);
  };

  const mutate = useMutation({
    mutationFn: updateFreelancer,
    onSuccess: (response) => {
      console.log(response);
      toast.success("Success!");
    },

    onError: (err) => {
      console.log(err);
      toast.error("Something went wrong!");
    },
  });
  const prevProfileData = useRef(profileData);

  // Only trigger mutate if profileData has changed
  useEffect(() => {
    if (
      JSON.stringify(prevProfileData.current) !== JSON.stringify(profileData)
    ) {
      mutate.mutate({ email: userEmail, ...profileData });
      prevProfileData.current = profileData;
    }
  }, [profileData, userEmail, mutate]);

  return null;
};

export default UpdateFreelancerPorfile;
