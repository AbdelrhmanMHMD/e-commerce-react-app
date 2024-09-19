import React, { createContext, useState } from "react";
export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
	return (
		<UserContext.Provider value='abdelrhman'>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;
