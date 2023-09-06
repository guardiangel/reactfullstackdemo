import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { UserMode } from "../interfaces/commonInterface";

const Profile = () => {
  const { userId } = useParams();

  const [user, setUser] = useState<UserMode>();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/user/getUserProfile/${userId}`)
      .then((res) => {
        setUser(res.data);
      });
  }, [userId]);

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{}}>
        <h1>User Name:{user?.username}</h1>
      </div>
      <div style={{}}></div>
    </div>
  );
};

export default Profile;
