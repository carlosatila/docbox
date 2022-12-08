import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { styled } from '@mui/material/styles';

import SideBar from '../SideBar';
import TopBar from '../TopBar';

export default function Layout() {
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  }));

  return (
    <Box sx={{ display: 'flex' }}>
      <TopBar />
      <SideBar />
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
}
