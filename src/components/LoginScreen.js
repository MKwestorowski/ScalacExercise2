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
            type: 'angularData/FETCH__SUCCESS',
            data: data
        })

    })
)(class angularcontributorlist extends React.Component {

    async componentDidMount() {

        try {
            let response = await fetch('https://api.github.com/orgs/angular');
            let got = await response.json();
            await this.props.success(got)


        }
        catch(err) {
            throw console.log('fetch failed', err);
        }
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
