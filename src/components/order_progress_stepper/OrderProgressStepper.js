import { Box, Stepper, Step, StepLabel } from '@mui/material';

const steps = ['Items', 'Select Address', 'Confirm Order'];

export default function HorizontalLabelPositionBelowStepper() {
  return (
    <Box sx={{ width: '80%' }} mt={7} mb={6}>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
