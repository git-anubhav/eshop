import { Fragment, useState } from 'react';
import Cookies from 'js-cookie';
import {
  Box,
  Button,
  Card as MCard,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import Modal from '../modal/Modal';

export default function Card({ product, refresh, setRefresh, snackbarState, setSnackbarState }) {
  const { id, name, price, description, imageUrl } = product;
  const [view] = useState(Cookies.get('role'));
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <Fragment>
      <MCard
        sx={{
          width: 350,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <CardActionArea>
          <CardMedia component='img' height='250' image={imageUrl} alt={name} />
          <CardContent>
            <Box display={'flex'} justifyContent={'space-between'}>
              <Typography gutterBottom variant='h6' component='div'>
                {name}
              </Typography>
              <Typography gutterBottom variant='h6' component='div'>
                $ {price}.00
              </Typography>
            </Box>
            <Typography variant='body2' color='text.secondary'>
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link to={`/product?id=${id}`}>
            <Button size='small' color='primary' variant='contained'>
              Buy
            </Button>
          </Link>
          {view === 'ADMIN' && (
            <Box>
              <Link to={`/product/modify?id=${id}`}>
                <ModeEditIcon color='grey' sx={{ marginRight: '1rem', cursor: 'pointer' }} />
              </Link>
              <DeleteIcon color='grey' sx={{ cursor: 'pointer' }} onClick={handleClick} />
            </Box>
          )}
        </CardActions>
      </MCard>
      <Modal
        open={open}
        setOpen={setOpen}
        product={product}
        refresh={refresh}
        setRefresh={setRefresh}
        snackbarState={snackbarState}
        setSnackbarState={setSnackbarState}
      />
    </Fragment>
  );
}
