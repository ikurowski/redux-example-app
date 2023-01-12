import { Card, CardContent, Typography, Button } from '@mui/material';
import React from 'react';

export default function Products() {
  return (
    <Card
      sx={{
        width: 400,
        mt: 2,
        p: 1,
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
        }}
      >
        <div>
          <Typography
            sx={{
              fontSize: 14,
            }}
            color="text.secondary"
          >
            Products list
          </Typography>
          <Typography variant="h6" component="h6">
            Test Product 1
          </Typography>
          <Typography variant="h6" component="h6">
            Price: $10
          </Typography>
        </div>
        <Button
          sx={{
            ml: 'auto',
            mr: 1,
            alignSelf: 'flex-end',
          }}
          variant="contained"
          size="small"
        >
          +
        </Button>
        <Button
          sx={{
            alignSelf: 'flex-end',
          }}
          variant="contained"
          size="small"
        >
          -
        </Button>
      </CardContent>
    </Card>
  );
}
