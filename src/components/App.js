import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'


import LoginScreen from './LoginScreen'
import Angularcontributorlist from './../containers/AngularRepoList'
import './App.css';


class App extends React.Component {
    render() {
        return (
            <Router>


                <div className="white">
                    <Route exact path="/" component={LoginScreen}/>
                    <Route path="/angularcontributorlist" component={Angularcontributorlist}/>
                </div>

            </Router>
        );
    }
}

export default App;