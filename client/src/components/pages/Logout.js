import React from "react";
import { useAuth } from "../context/auth";

function Logout (props) {
  const { setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens();
  }

  return (
    <div>
      <div>Logout Page</div>
      <Button onClick={logOut}>Log out</Button>
    </div>
  );
}

export default Logout ;