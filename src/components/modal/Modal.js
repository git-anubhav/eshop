import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { deleteProduct } from '../../common/services/products.service';

export default function Modal({ open, setOpen, productId, refresh, setRefresh }) {
  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    const response = await deleteProduct(productId);
    setOpen(false);
    setRefresh(!refresh);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>Confirm Deletion of product!</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          Are you sure you want to delete the product?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDelete} variant='contained'>
          OK
        </Button>
        <Button onClick={handleClose}>CANCEL</Button>
      </DialogActions>
    </Dialog>
  );
}
