// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/HomePage/Home';
import Login from './components/LoginPage/LoginPage';
import CourseDetail from './components/CourseDetailPage/CourseDetail';
import FAQPage from './components/FAQPage/FAQPage';
import AboutUsPage from './components/AboutUsPage/AboutUs';
import Dashboard from './components/Dashboard/Dashboard';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/coding_cable' exact component={Home} />
        <Route path='/signin' exact component={Login} />
        <Route path='/courses/:id' component={CourseDetail}/>
        <Route path='/faqs' exact component={FAQPage}/>
        <Route path='/aboutus' exact component={AboutUsPage}/>
        <Route path='/dashboard/:id' exact component={Dashboard}/>
      </Switch>
    </Router>
  );
}


export default App;
