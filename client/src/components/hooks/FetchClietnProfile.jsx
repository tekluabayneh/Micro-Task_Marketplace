import axios from "axios";
import { toast } from "react-hot-toast";
import React, { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
const FetchCL_Porfile = () => {
  let userEmail = localStorage.getItem("userEmail");
  console.log(userEmail);
  const dispatch = useDispatch();
  const profileData = useSelector(
    (state) => state.clientProfileSettingSlice.CL_slide
  );
  console.log(profileData);
  const updateClient = (data) => {
    return axios.put("http://localhost:5000/api/update/client", data);
  };

  const mutate = useMutation({
    mutationFn: updateClient,
    onSuccess: (response) => {
      console.log(response);
      toast.success("Success!");
    },

    onError: (err) => {
      console.log(err);
      toast.error("Something went wrong!");
    },
  });

  // useEffect(() => {
  //   mutate.mutate({ email: userEmail, ...profileData });
  // }, [profileData]);
  const prevProfileData = useRef(profileData);

  useEffect(() => {
    // Only trigger mutate if profileData has changed
    if (
      JSON.stringify(prevProfileData.current) !== JSON.stringify(profileData)
    ) {
      mutate.mutate({ email: userEmail, ...profileData });
      prevProfileData.current = profileData; // Update the ref with the latest data
    }
  }, [profileData, userEmail, mutate]);

  return null;
};

export default FetchCL_Porfile;
