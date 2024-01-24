import React from 'react';
import {AppBar, Container, MenuItem, Select, ThemeProvider, Toolbar, Typography, createTheme, makeStyles} from "@material-ui/core";
import {useNavigate} from 'react-router-dom';
import { CryptoState } from '../CryptoContext';


const useStyles = makeStyles(()=>({

    tittle:{
        flex: 1,
        color: "gold",
        fontFamily: "Montserrat",
        cursor:"pointer",
    }
}))

const Header = () => {

    const classes = useStyles();
    const Navigate = useNavigate();
    const {currency, setCurrency}=CryptoState();
    console.log(currency);
    const darkTheme = createTheme({
        palette:{
            primary: {
                main:"#fff",
            },
            type:"dark",
        },
    });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              onClick={() => Navigate("/")}
              className={classes.tittle}
              variant='h6'
            >
              Coin Market
            </Typography>
            <Select
              varient="outlined"
              value={currency}
              style={{width: 100,height: 40,marginRight: 15,
              }}
              onChange={(e)=>setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header