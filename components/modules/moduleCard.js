import * as React from 'react';
import Link from 'next/link';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';


export default function ModuleCard({title='',subTitle='',url='/'}) {
  const theme = useTheme();

  return (
    <Card className='module-card'>
        <Link href={url}>
            <IconButton aria-label="wysiwygIcon">
                <WysiwygIcon sx={{ height: 100, width: 100 }} />
            </IconButton>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                    {title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    {subTitle}
                </Typography>
                </CardContent>
            </Box>
        </Link>
    </Card>
  );
}