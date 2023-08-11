import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <head>
        <meta name="description" content="This is the website of the Little Lemon Restaurant in Donostia."/>
        <meta name="og:title" content="Little Lemon Restaurant"/>
        <meta name="og:description" content="This is the website of the Little Lemon Restaurant in Donostia."/>
        <meta property="og:image" content="assets/img/Logo.svg" />
      </head>
      <body>
        <Header/>
        <Nav/>
        <Main/>
        <Footer/>
      </body>
    </>
  );
}

export default App;
