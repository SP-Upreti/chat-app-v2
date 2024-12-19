import React, { createContext, useState, ReactNode, useContext } from "react";

// Define the type for the context state
interface AppContextType {
    toggleSidebar: boolean;
    setToggleSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppContextProviderProps {
    children: ReactNode;
}

const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
    const [toggleSidebar, setToggleSidebar] = useState<boolean>(true);

    return (
        <AppContext.Provider value={{ toggleSidebar, setToggleSidebar }}>
            {children}
        </AppContext.Provider>
    );
};

// Custom hook to use AppContext
export const useAppContext = (): AppContextType => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppContextProvider");
    }
    return context;
};

export default AppContextProvider;
