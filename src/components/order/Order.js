import { Fragment, useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import OrderProgressStepper from '../order_progress_stepper/OrderProgressStepper';
import ProductDetails from '../product_details/ProductDetails';
import AddressDetails from '../address_details/AddressDetails';
import ConfirmDetails from '../confirm_details/ConfirmDetails';
import Snackbar from '../snackbar/Snackbar';
import NavBar from '../navbar/Navbar';
import { placeOrder } from '../../common/services/orders.service';
import { useNavigate } from 'react-router-dom';

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
  const [address, setAddress] = useState();
  const navigate = useNavigate();

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleOrder = async () => {
    const response = await placeOrder({
      quantity: quantity,
      product: product.id,
      address: address.id,
    });
    navigate('/');
  };

  return (
    <Fragment>
      <NavBar />
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
          />
        )}
        {step === 1 && <AddressDetails address={address} setAddress={setAddress} />}
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
