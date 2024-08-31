import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {ErrorHandler} from "./ErrorHandler"

export function HospitalRoute() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate('/Admin/signin');
    }
  }, [token]);

  if(!token){
    return <ErrorHandler/>
  }
  return   <div>Hey there</div> ;
}
