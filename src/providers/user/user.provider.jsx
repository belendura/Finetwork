import React, { createContext, useState } from "react";

export const UserContext = createContext({
  user: null,
  submitUser: () => {},
});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const submitUser = (userData) => setUser(userData);
  return (
    <UserContext.Provider value={{ user, submitUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
