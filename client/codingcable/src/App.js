// import logo from './logo.svg';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/HomePage/Home';
import Footer from'./components/Footer/Footer';
import Login from './components/LoginPage/LoginPage';
import CourseDetail from './components/CourseDetailPage/CourseDetail';


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/coding_cable' exact component={Home} />
        <Route path='/signin' exact component={Login} />
        <Route path='/courses/:id' component={CourseDetail}/>
      </Switch>
      <Footer/>
    </Router>
  );
}


export default App;
