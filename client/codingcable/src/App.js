// import logo from './logo.svg';
import './App.css';
import React,{useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/HomePage/Home';
// import Login from './components/LoginPage/LoginPage';
import CourseDetail from './components/CourseDetailPage/CourseDetail';
import FAQPage from './components/FAQPage/FAQPage';
import AboutUsPage from './components/AboutUsPage/AboutUs';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from'./components/Footer/Footer';
import Blogs from './components/Blog/Blogs';
import Login from './components/LoginPage/Login';
import SignUp from './components/LoginPage/Signup';
// import ProtectRoute from './components/private-route/PrivateRoute';
// import jwt_decode from "jwt-decode";
// import setAuthToken from "./utils/setAuthToken";
// import { setCurrentUser, logoutUser } from "./redux/user/userActions";
import { Provider } from "react-redux";
import RedirectRoute from './components/private-route/RedirectRoute';
import store from "./redux/store";

import {getUser} from './redux/index';


// //fetch current user
// if (localStorage.jwtToken) {
//   // Set auth token header auth
//   const token = localStorage.jwtToken;
//   setAuthToken(token);
//   // Decode token and get user info and exp
//   const decoded = jwt_decode(token);
//   // Set user and isAuthenticated
//   store.dispatch(setCurrentUser(decoded));
// // Check for expired token
//   const currentTime = Date.now() / 1000; // to get in milliseconds
//   if (decoded.exp < currentTime) {
//     // Logout user
//     store.dispatch(logoutUser());
//     // Redirect to login
//     window.location.href = "./login";
//   }
// }




function App() {
  useEffect(()=>{
    store.dispatch(getUser());
  },[])
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <RedirectRoute path='/' exact component={Home} />
          <RedirectRoute path='/coding_cable' exact component={Home} />
          <Route path='/signup' exact component={SignUp} />
          <Route path='/signin' exact component={Login} />
          <RedirectRoute path='/courses/:id' component={CourseDetail}/>
          <RedirectRoute path='/faqs' exact component={FAQPage}/>
          <RedirectRoute path='/aboutus' exact component={AboutUsPage}/>
          <RedirectRoute path='/dashboard/:id' exact component={Dashboard}/>
          <Route path='/blogs' component={Blogs}/>
        </Switch>
        <Footer/>
      </Router>
    </Provider>
  );
}


export default App;
