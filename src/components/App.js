import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'


import {LoginScreen} from './LoginScreen'
import angularRepoList from './../containers/AngularRepoList'
import ContributorsList from './../containers/Contributors'
import './App.css';


class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="white">
                    <Route exact path="/" component={LoginScreen}/>
                    <Route path="/angularcontributorlist" component={angularRepoList}/>
                    <Route path="/contributoslist" component={ContributorsList}/>
                </div>

            </Router>
        );
    }
}

export default App;