import Accordian from './Accordian/Accordian';
import Footer from './commonents/Footer';
import Header from './commonents/Header';
import Main from './commonents/Main';
import Form from './Form/Form';



function App() {

  return (
    <>
      <div className="App container-fluid">
        <Header />
        <Main />
        <Main />
        <Form />
        <Accordian />
        <Footer />
      </div>
    </>
  );
}


export default App;