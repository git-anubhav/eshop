import { Fragment, useState } from 'react';
import { Box, Button } from '@mui/material';
import OrderProgressStepper from '../order_progress_stepper/OrderProgressStepper';
import ProductDetails from '../product_details/ProductDetails';
import AddressDetails from '../address_details/AddressDetails';
import ConfirmDetails from '../confirm_details/ConfirmDetails';
import NavBar from '../navbar/Navbar';
import { placeOrder } from '../../common/services/orders.service';
import { useNavigate } from 'react-router-dom';
import Snackbar from '../snackbar/Snackbar';

const steps = ['Items', 'Select Address', 'Confirm Order'];

export default function Order() {
  const [step, setStep] = useState(-1);
  const [quantity, setQuantity] = useState();
  const [product, setProduct] = useState({
    id: '',
    name: '',
    description: '',
    manufacturer: '',
    imageUrl: '',
    category: '',
    price: 0,
    availableItems: 0,
  });
  const [snackbarState, setSnackbarState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'right',
    variant: 'success',
    message: '',
  });
  const [address, setAddress] = useState();
  const navigate = useNavigate();

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleNext = () => {
    if (step === 1 && !address) {
      setSnackbarState({
        ...snackbarState,
        open: true,
        variant: 'error',
        message: 'Please select address',
      });
      return;
    }
    setStep(step + 1);
  };

  const handleOrder = async () => {
    const response = await placeOrder({
      quantity: quantity,
      product: product.id,
      address: address.id,
    });

    if (response.status === 201) {
      navigate('/', {
        state: {
          message: 'Order created successfully',
        },
      });
    }
  };

  return (
    <Fragment>
      <NavBar />
      <Snackbar state={snackbarState} setState={setSnackbarState} />
      <Box display={'flex'} flexDirection='column' alignItems={'center'}>
        <OrderProgressStepper steps={steps} step={step} />
        {step <= 0 && (
          <ProductDetails
            quantity={quantity}
            setQuantity={setQuantity}
            step={step}
            setStep={setStep}
            product={product}
            setProduct={setProduct}
            snackbarState={snackbarState}
            setSnackbarState={setSnackbarState}
          />
        )}
        {step === 1 && (
          <AddressDetails
            address={address}
            setAddress={setAddress}
            snackbarState={snackbarState}
            setSnackbarState={setSnackbarState}
          />
        )}
        {step === 2 && <ConfirmDetails product={product} quantity={quantity} address={address} />}
      </Box>
      {step >= 0 && (
        <Box m={6} display='flex' justifyContent='center'>
          <Button onClick={handleBack}>BACK</Button>
          {step < 2 ? (
            <Button variant='contained' onClick={handleNext}>
              NEXT
            </Button>
          ) : (
            <Button variant='contained' onClick={handleOrder}>
              PLACE ORDER
            </Button>
          )}
        </Box>
      )}
    </Fragment>
  );
}
