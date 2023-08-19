import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import { ChakraProvider } from '@chakra-ui/react'

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
        <div className='header'>
          <Header/>
          <Nav/>
        </div>
        <Main/>
        <Footer/>
      </body>
    </ChakraProvider>
  );
}

export default App;
