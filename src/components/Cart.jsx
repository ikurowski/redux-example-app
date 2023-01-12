import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';

export default function Cart() {
  return (
    <Card
      sx={{
        minWidth: 400,
        mt: 2,
        p: 1,
      }}
    >
      <CardContent>
        <Typography
          sx={{
            fontSize: 14,
          }}
          color="text.secondary"
        >
          Your Cart
        </Typography>
        <Typography variant="h6" component="h6">
          Test Product
        </Typography>
        <Typography
          sx={{
            mb: 1.5,
          }}
          color="text.secondary"
        >
          Total Price: $10 (price per product:)
        </Typography>
        <Typography variant="body2">Quantity: </Typography>
      </CardContent>
    </Card>
  );
}
