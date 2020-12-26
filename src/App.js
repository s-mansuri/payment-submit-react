import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PaymentSubmit from './components/PaymentSubmit';
import ProductDetails from './components/ProductDetails';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header />
        <div className="row">
          <div className="col-sm-4"><ProductDetails /></div>
          <div className="col-sm-8"><PaymentSubmit /></div>
        </div>
    </div>
  );
}

export default App;
