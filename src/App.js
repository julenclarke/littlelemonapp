import './App.css';
import Nav from './components/Nav';
import CallToAction from './components/CallToAction';
import Specials from './components/Specials';
import CustomersSay from './components/CustomersSay';
import Donostia from './components/Donostia';
import Footer from './components/Footer';
import { ChakraProvider } from '@chakra-ui/react'
import {Routes, Route} from 'react-router-dom';
import BookingPage from './components/BookingPage';
import { AlertProvider } from './context/alertContext';
import Alert from "./components/Alert";
import ConfirmedBooking from './components/ConfirmedBooking';
import { useState } from 'react';

function App() {
  const [confirmed, setConfirmed] = useState(false)

  return (
    <ChakraProvider>
      <AlertProvider>
        <html>
          <head>
            <meta name="description" content="This is the website of the Little Lemon Restaurant in Donostia."/>
            <meta name="og:title" content="Little Lemon Restaurant"/>
            <meta name="og:description" content="This is the website of the Little Lemon Restaurant in Donostia."/>
            <meta property="og:image" content="assets/img/Logo.svg" />
          </head>
          <body className='body'>
            {!confirmed ?
              <div id="not-confirmed">
                <Nav />
                <Routes> 
                  <Route path="/" element={<CallToAction/>}></Route>
                  <Route path="/specials" element={<Specials/>}></Route>
                  <Route path="/customers-say" element={<CustomersSay/>}></Route>
                  <Route path="/donostia" element={<Donostia/>}></Route>
                  <Route path="/booking" element={<BookingPage/>}></Route>
                  <Route path="/confirmed-booking" element={<ConfirmedBooking/>}></Route>
                </Routes>
                <Specials />
                <CustomersSay />
                <Donostia />
                <BookingPage setConfirmed = {setConfirmed}/>
                <Footer />
                <Alert />
              </div> :
              <ConfirmedBooking setConfirmed = {setConfirmed}/>}
          </body>
        </html>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;