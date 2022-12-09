import { Dialog, DialogActions, DialogContent, DialogTitle, Divider } from '@mui/material';
import { ReactNode } from 'react';

interface ModalProps {
  open: boolean;
  title: string;
  children: ReactNode;
  actions: ReactNode;
  onClose: () => void;
}

export default function Modal({
  open,
  title,
  children,
  actions,
  onClose,
}: ModalProps) {
  return (
    <Dialog open={open} onClose={onClose} sx={{ minWidth: '750px' }}>
      <DialogTitle>{title}</DialogTitle>
      <Divider />
      <DialogContent>
        {children}
      </DialogContent>
      <Divider />
      <DialogActions>
        {actions}
      </DialogActions>
    </Dialog>
  );
}
