import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashboard';
import {Route,Switch} from 'react-router-dom'
import {BrowserRouter} from "react-router-dom"
import Header from './Header';
import AboutUs from './AboutUs';
import PageNotFound from './PageNotFound';
import ContactUs from './ContactUs';
import PageNotFoundComp from './PageNotFoundComp';
import MyHeader from './MyHeader';
function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Switch>
      
        <Route path="/" exact component={Dashboard}></Route>
        <Route path="/about" exact component={AboutUs}></Route>
        <Route path="/contactus" exact component={ContactUs}></Route>
        <Route path="*" component={PageNotFound}></Route> 
     
      </Switch>
         
       </BrowserRouter>

      {/* <BrowserRouter>
      <Route path="/" exact component={Dashboard}>
       
       </Route>
      <Route path="/contactUs" exact component={ContactUs}>
       
       </Route>
       <Route path="*"  component={PageNotFoundComp}>
       
       </Route>
      </BrowserRouter> */}
      
    </div>
  );
}

export default App;
