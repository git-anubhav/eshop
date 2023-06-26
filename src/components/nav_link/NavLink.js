import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

export default function NavLink({ to, children }) {
  return (
    <Link to={to}>
      <Typography sx={{ color: '#ffffff', textDecoration: 'underline', marginLeft: '2rem' }}>
        {children}
      </Typography>
    </Link>
  );
}
