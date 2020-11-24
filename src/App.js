import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact'
import EditContact from './components/contacts/EditContact'
import Header from './components/layout/Header';
import About from './components/pages/About';
import NotFoundPage from './components/pages/NotFoundPage';
import Test from './components/test/Test'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {Provider} from './context'

function App() {
  return (
    <Provider>
      <Router basename = {process.env.PUBLIC_URL}>
    <div className="App">
    <Header branding = "Contact Manager"/>
      <div className="container">
      <Switch>
        <Route exact path="/" component={Contacts} />
        <Route exact path="/contact/add" component={AddContact} />
        <Route exact path="/contact/edit/:id" component={EditContact} />
        <Route exact path="/about" component={About} />
        <Route exact path ="/test" component={Test} />
        <Route component={NotFoundPage}/>
      </Switch>
      </div>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
