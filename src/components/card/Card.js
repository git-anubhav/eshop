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

export default function Card({ product }) {
  const { name, price, description, imageUrl } = product;
  return (
    <MCard sx={{ maxWidth: 350 }}>
      <CardActionArea>
        <CardMedia component='img' height='250' image={imageUrl} alt='green iguana' />
        <CardContent>
          <Box display={'flex'} justifyContent={'space-between'}>
            <Typography gutterBottom variant='h6' component='div'>
              {name}
            </Typography>
            <Typography gutterBottom variant='h6' component='div'>
              Rs. {price}
            </Typography>
          </Box>
          <Typography variant='body2' color='text.secondary'>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button size='small' color='primary' variant='contained'>
          Buy
        </Button>
        <Box>
          <ModeEditIcon color='grey' sx={{ marginRight: '1rem' }} />
          <DeleteIcon color='grey' />
        </Box>
      </CardActions>
    </MCard>
  );
}
