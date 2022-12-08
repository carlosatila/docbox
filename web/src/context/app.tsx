import React, { createContext, ReactNode, useState } from 'react';
import {
  Home as HomeIcon,
  FolderCopy as FolderCopyIcon,
  Info as InfoIcon
} from '@mui/icons-material';

type MenuItemsType = {
  label: string;
  link: string;
  icon: JSX.Element;
}

type AppType = {
  sideBarOpen: boolean;
  menuItems: MenuItemsType[];
};

type AppContextProps = {
  state: AppType;
  setState: React.Dispatch<React.SetStateAction<AppType>>;
};

type AppProviderProps = {
  children: ReactNode;
}

const DEFAULT_VALUE = {
  state: {
    sideBarOpen: false,
    menuItems: [
      { label: 'Início', link: '/', icon: <HomeIcon /> },
      { label: 'Meus Documentos', link: '/documents', icon: <FolderCopyIcon /> },
      { label: 'Sobre', link: '/about', icon: <InfoIcon /> },
    ]
  },
  setState: () => {}, //eslint-disable-line
};

const AppContext = createContext<AppContextProps>(DEFAULT_VALUE);

const AppContextProvider = ({ children }: AppProviderProps) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);

  return (
    <AppContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContextProvider };
export default AppContext;
