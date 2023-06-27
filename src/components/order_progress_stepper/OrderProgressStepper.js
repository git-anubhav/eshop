import { Box, Stepper, Step, StepLabel } from '@mui/material';

export default function OrderProgressStepper({ steps, step }) {
  return (
    <Box sx={{ width: '80%' }} mt={7} mb={6} visibility={step >= 0 ? 'visible' : 'hidden'}>
      <Stepper activeStep={step} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
