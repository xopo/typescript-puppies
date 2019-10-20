import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import PuppiesDetails from './Components/PuppiesDetails/PuppiesDetails';
import AddForm from './Components/AddForm';
import './App.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route exact path='/' component={PuppiesDetails} />
                    <Route exact path='/form' component={AddForm} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
