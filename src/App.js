

import {Switch,Route } from 'react-router-dom'; // Import from react-router-dom
import Home from './pages/Home';
import Address from './pages/Address';

function App() {
  return (
     <Switch>

       <Route exact path="/" component={Home} />
       <Route exact path="/address" component={Address}/>
       
     </Switch>
   
  );
}

export default App;
