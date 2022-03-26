import React from 'react'
import Image from './image.png'
import { Box, Container, Grid, Typography } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Energy1 = () => {
  return (
    <>
     <Grid container >
      <Grid 
      item xs={12} 
      style={{ height:300,width:'100%', backgroundImage: 'url(' + Image + ')'}}
      >
        <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          height:'100%',
          justifyContent:'center'
        }}
      >
      <Typography variant="h3" color='white' component="div">
        Enerji Üretim
      </Typography>
      </Box>
      </Grid>
    </Grid>

    <Container sx={{ my:5 }}>
        <Grid container spacing={6}>

        <Grid item md={6} xs={12}>
        <Card style={{ minHeight: 500 }}>
            <CardContent sx={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    height:500,
                    px:5
                    }}>
                <Typography variant="h4"component="div">
                    Rüzgar Enerjisi <br></br> Santralleri
                </Typography>
               
            </CardContent>
        </Card>
        </Grid>

        <Grid item md={6} xs={12}>
        <Card style={{ minHeight: 500 }}>
            <CardContent sx={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    height:500,
                    px:5
                    }}>
                <Typography variant="h4"component="div">
                    Hidroelektrik <br></br> Santralleri
                </Typography>
               
            </CardContent>
        </Card>
        </Grid>

        <Grid item md={6} xs={12}>
        <Card style={{ minHeight: 500 }}>
            <CardContent sx={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    height:500,
                    px:5
                    }}>
                <Typography variant="h4"component="div">
                    Güneş Enerjisi <br></br> Santralleri
                </Typography>
               
            </CardContent>
        </Card>
        </Grid>

        <Grid item md={6} xs={12}>
        <Card style={{ minHeight: 500 }}>
            <CardContent sx={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    height:500,
                    px:5
                    }}>
                <Typography variant="h4"component="div">
                    Biyokütle Enerji <br></br> Santralleri
                </Typography>
               
            </CardContent>
        </Card>
        </Grid>
      
        </Grid>
    </Container>
    </>
  )
}

export default Energy1