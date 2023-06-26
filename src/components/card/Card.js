import { useState } from 'react';
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

export default function Card({ product }) {
  const { id, name, price, description, imageUrl } = product;
  const [view, setView] = useState(Cookies.get('role'));

  return (
    <MCard
      sx={{
        maxWidth: 350,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <CardActionArea>
        <CardMedia component='img' height='250' image={imageUrl} alt='green iguana' />
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
            <ModeEditIcon color='grey' sx={{ marginRight: '1rem' }} />
            <DeleteIcon color='grey' />
          </Box>
        )}
      </CardActions>
    </MCard>
  );
}
