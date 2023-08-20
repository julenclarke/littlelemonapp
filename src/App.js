import './App.css';
import Nav from './components/Nav';
import CallToAction from './components/CallToAction';
import Specials from './components/Specials';
import CustomersSay from './components/CustomersSay';
import Donostia from './components/Donostia';
import Footer from './components/Footer';
import { ChakraProvider } from '@chakra-ui/react'
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <ChakraProvider>
      <head>
        <meta name="description" content="This is the website of the Little Lemon Restaurant in Donostia."/>
        <meta name="og:title" content="Little Lemon Restaurant"/>
        <meta name="og:description" content="This is the website of the Little Lemon Restaurant in Donostia."/>
        <meta property="og:image" content="assets/img/Logo.svg" />
      </head>
      <body className='body'>
        <Nav/>
        <CallToAction/>
        <Specials/>
        <CustomersSay/>
        <Donostia/>
        <Footer/>
        <Routes> 
          <Route path="/" element={<CallToAction/>}></Route>
          <Route path="/specials" element={<Specials/>}></Route>
          <Route path="/customers-say" element={<CustomersSay/>}></Route>
          <Route path="/donostia" element={<Donostia/>}></Route>
        </Routes>
      </body>
    </ChakraProvider>
  );
}

export default App;
