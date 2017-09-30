import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'


import LoginScreen from './LoginScreen'
import AngularRepoList from './AngularRepoList'
import './App.css';


class App extends React.Component {
    render() {
        return (
            <Router>


                <div className="white">
                    <Route exact path="/" component={LoginScreen}/>
                    <Route path="/angularrepositoreslist" component={AngularRepoList}/>
                </div>

            </Router>
        );
    }
}

export default App;