import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Homepage from './Pages/Homepage';
import CoinPage from './Pages/CoinPage';
import{makeStyles} from "@material-ui/core";


const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "200vh",
  },
}));

function App() {


  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Homepage/>}></Route>
          <Route path="/coins/:id" element={<CoinPage/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
