import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function ContractCard({contractInfo={}}) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Service Contract
        </Typography>
        <Typography variant="h5" component="div">
           {contractInfo?.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Status:{contractInfo?.status}
        </Typography>
        </CardContent>
        <CardActions>
        <Button size="small">Update</Button>
        </CardActions>
      </Card>
    </Box>
  );
}