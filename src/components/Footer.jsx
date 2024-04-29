import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

function Copyright() {
    return (
        <React.Fragment>
            {'© '}
            <Link color="inherit" href="http://localhost:5173/">
                тут был Лорд Тень
            </Link>{' '}
            {new Date().getFullYear()}
        </React.Fragment>
    );
}

const iconStyle = {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    mr: 1,
    '&:hover': {
        bgcolor: 'warning.dark',
    },
};


const Footer = () => {
    return (
        <Typography
            component="footer"
            sx={{ display: 'flex' }}
        >
            <Container sx={{ my: 8, display: 'flex' }}>
                <Grid container spacing={5}>
                    <Grid item xs={6} sm={4} md={3}>
                        <Grid
                            container
                            direction="column"
                            justifyContent="flex-end"
                            spacing={2}
                            sx={{ height: 120 }}
                        >
                            <Grid item sx={{ display: 'flex' }}>
                                <Box component="a" href="https://mui.com/" sx={iconStyle}>
                                    <img
                                        src="\src\images\logo1.png"
                                        alt="MUI"
                                    />
                                </Box>
                                <Box component="a" href="https://react.dev/" sx={iconStyle}>
                                    <img src="\src\images\logo3.png" alt="React" />
                                </Box>
                            </Grid>
                            <Grid item>
                                <Copyright />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6} sm={4} md={2}>
                        <Typography variant="h6" marked="left" gutterBottom>
                            Услуги
                        </Typography>
                        <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
                            <Box component="li" sx={{ py: 0.5 }}>
                                <a href="https://cs13.pikabu.ru/post_img/2024/04/26/10/1714154137266632004.jpg">Разработка 1</a>
                            </Box>
                            <Box component="li" sx={{ py: 0.5 }}>
                                <a href="https://cs13.pikabu.ru/post_img/2024/04/26/10/171414883516419336.jpg">Вопросы?</a>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Typography variant="h5" component='h3'>
                            <img src="\src\images\logo.png" alt="logoExample" />
                            {'Вагнер А. '}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Typography>
    );
}

export default Footer