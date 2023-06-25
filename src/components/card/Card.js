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

export default function Card() {
  return (
    <MCard sx={{ maxWidth: 350 }}>
      <CardActionArea>
        <CardMedia
          component='img'
          height='250'
          image='https://m.media-amazon.com/images/I/715TLEvzxUS._SY500_.jpg'
          alt='green iguana'
        />
        <CardContent>
          <Box display={'flex'} justifyContent={'space-between'}>
            <Typography gutterBottom variant='h6' component='div'>
              Shoes
            </Typography>
            <Typography gutterBottom variant='h6' component='div'>
              Rs. 1500
            </Typography>
          </Box>
          <Typography variant='body2' color='text.secondary'>
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
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
