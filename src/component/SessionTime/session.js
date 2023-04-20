import React from 'react';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from 'jwt-decode';
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify';
function SessionTimeout() {
  const [sessionExpired, setSessionExpired] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const authData = localStorage.getItem('persist:root') && JSON.parse(localStorage.getItem('persist:root')).auth;
    const token = authData && JSON.parse(authData).user;
    if (!token) {
      setSessionExpired(true);
    } else {
      try {
        const decodedToken = jwt_decode(token);
        const currentTime = Date.now() / 1000;
        // console.log(decodedToken.exp, " ====", { currentTime })
        if (decodedToken.exp < currentTime) {
          setSessionExpired(true);
        }
        //  else {
        //   const tokenExpiration = decodedToken.exp - currentTime;
        //   // if (tokenExpiration < 300) {
        //   //   refreshToken();
        //   // }
        // }
      } catch (err) {
        console.error("Failed to decode token", err);
        setSessionExpired(true);
      }
    }
  }, []);

  useEffect(() => {
    const unlisten = navigate(() => {
      const authData = JSON.parse(localStorage.getItem('persist:root')).auth;
      const token = authData && JSON.parse(authData).user;
      if (!token) {
        setSessionExpired(true);
      }
    });

    return () => {
      unlisten && unlisten();
    };
  }, [navigate]);

  const refreshToken = async () => {
    const authData = JSON.parse(localStorage.getItem('persist:root')).auth;
    const token = JSON.parse(authData).user;
    const refreshTokenURL = "";
    try {
      const response = await fetch(refreshTokenURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
      } else {
        throw new Error("Failed to refresh token");
      }
    } catch (err) {
      console.error("Failed to refresh token", err);
    }
  };

  console.log("session In progress")
  if (sessionExpired) {
    console.log("session Timeout")
    localStorage.removeItem("persist:root");
    // alert("Session Timeout , Please log in again !")
    toast.error("Session Timeout, Please log in again !", {
      position: "top-left",
    });
    navigate("/sa/login")
  }

  return null;
}

export default SessionTimeout;
