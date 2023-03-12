import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function OutlinedCard({workerInfo={}}) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Contract Worker
        </Typography>
        <Typography variant="h5" component="div">
           {workerInfo?.firstName} {workerInfo?.lastName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Emp No:{workerInfo?.empNo}
        </Typography>
        <Typography variant="body2">
            Role: {workerInfo?.role}
            <br/>
            Contracts: {JSON.parse(workerInfo?.contracts).join(",")}
        </Typography>
        </CardContent>
        <CardActions>
        <Button size="small">Update</Button>
        </CardActions>
      </Card>
    </Box>
  );
}