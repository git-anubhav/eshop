import { Box } from '@mui/material';
import OrderProgressStepper from '../order_progress_stepper/OrderProgressStepper';
import ProductDetails from '../product_details/ProductDetails';
import AddressDetails from '../address_details/AddressDetails';
import ConfirmDetails from '../confirm_details/ConfirmDetails';
import Snackbar from '../snackbar/Snackbar';

export default function Order() {
  return (
    <Box height={'90vh'} display={'flex'} flexDirection='column' alignItems={'center'}>
      <OrderProgressStepper />
      {/* <ProductDetails /> */}
      {/* <AddressDetails /> */}
      <ConfirmDetails />
      {/* <Snackbar /> */}
    </Box>
  );
}
