/**
 * Created by MKwestorowski on 30/09/2017.
 */
import React from 'react'

// import {Link} from 'react-router-dom'

import {AngularIntroduce} from './../components/AngularIntroduce'

import {connect} from 'react-redux'


export default connect(
    state => ({
        angularData: state.angularData,
        angularReposList: state.angularReposList
    }),
    dispatch => ({
        success: data => dispatch({
            type: 'angularData/FETCH__SUCCESS',
            data: data,
        }),

        successRepos: data => dispatch({
            type: 'angularRepoList/FETCH_SUCCESS',
            data: data
        }),

    })
)(class angularRepoList extends React.Component {


    componentDidMount() {

        this.getAngularData()
    }

    getAngularData = async () => {
        try {
            const response = await fetch('https://api.github.com/orgs/angular');
            const got = await response.json();
            await this.props.success(got)
            console.log(this.props.success)
        }
        catch (err) {
            throw console.log('fetch failed', err);
        }
    }

    getAngularContributors = async () => {
        try {
            const response = await fetch(this.props.angularData.data.repos_url);
            const got = await response.json();
            await this.props.success(got)
            console.log(this.props.successRepos)
            console.log(got)
        }
        catch (err) {
            throw console.log('fetch failed', err);
        }
    }


    render() {


        const angularContributors = this.getAngularContributors
        const angularData = this.props.angularData.data
        console.log(this.props.angularData)
        console.log(angularContributors)

        return (
            <AngularIntroduce
                showContributors={angularContributors}
                angularBlog={angularData.blog}
                angularReposCount={angularData.public_repos}
                angularAvatar={angularData.avatar_url}/>

        )
    }
})