import * as React from 'react';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import MenuIcon from '@mui/icons-material/Menu';
import WidgetsIcon from '@mui/icons-material/Widgets';

import { styled } from '@mui/material/styles';
import { LogoWrapper } from './styles';
import AppContext from '../../context/app';

const SIDEBAR_WIDTH = 240;

export default function TopBar() {
  const { state, setState } = React.useContext(AppContext);

  interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
  }

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: SIDEBAR_WIDTH,
      width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" open={state.sideBarOpen}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 5, ...(state.sideBarOpen && { display: 'none' }), }}
            onClick={() => setState({ ...state, sideBarOpen: true })}
          >
            <MenuIcon />
          </IconButton>
          <LogoWrapper>
            <WidgetsIcon />
            <Typography variant="h5" sx={{ flexGrow: 1, lineHeight: 'normal' }}>
              DocBox
            </Typography>
          </LogoWrapper>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
