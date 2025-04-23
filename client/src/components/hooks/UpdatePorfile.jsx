import axios from "axios";
import React, { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
const UpdatePorfile = () => {
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
    },
    onError: (err) => {
      console.log(err);
    },
  });

  useEffect(() => {
    mutate.mutate(profileData);
  }, [profileData]);

  return <div></div>;
};

export default UpdatePorfile;
