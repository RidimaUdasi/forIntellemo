import HomePage from './main/HomePage';
import RoutingInfo from './shared-components/RoutingInfo';
import Header from './shared-components/Header';
import {
  BrowserRouter as Router
} from 'react-router-dom';

function App() {
  return (
    <Router>
          <Header/>
          <RoutingInfo/>
    </Router> 
  );
}

export default App;
