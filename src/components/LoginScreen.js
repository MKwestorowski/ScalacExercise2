/**
 * Created by MKwestorowski on 30/09/2017.
 */
import React from 'react'


import {connect} from 'react-redux'

import './App.css'

export default connect(
    state => ({
        contributors: state.contributors
    }),
    dispatch => ({
        success: data => dispatch({
            type: 'contributors/FETCH__SUCCESS',
            data: data
        })

    })
)(class Singin extends React.Component {

    componentDidMount() {
        async function getRepoList() {
            try {
       let response = await fetch('https://api.github.com/repos/angular');
       let list = await response.json();
       let got = await this.props.success(list)
            }
            catch(err) {
                throw console.log('fetch failed', err);
            }
        }
        getRepoList()
    }


    render() {


        return (
            <div className="gitHubButtonWidth flex-container">
                <a href={`http://github.com/login/oauth/authorize?client_id=9f13dc502b256fcebd4f`}
                   className="flex-item-button btn btn-block btn-sm btn-social btn-github">
                    <span className="fa fa-github"></span>
                    Sign in with Github
                </a>
            </div>


        )
    }
})
