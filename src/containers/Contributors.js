/**
 * Created by MKwestorowski on 09/10/2017.
 */

import React from 'react'
import {AngularIntroduce} from './../components/AngularIntroduce'

import {connect} from 'react-redux'


export default connect(
    state => ({
        angularData: state.angularData,
        angularReposList: state.angularReposList
    }),
    dispatch =>  ({
        success: data => dispatch({
            type: 'angularData/FETCH__SUCCESS',
            data: data
        })

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
            const prepare = await this.props.reposList.map(e => fetch(e.contriburors))
            const response = await fetch(this.props.angularData.data.repos_url);
            const got = await response.json();
            await this.props.success(got)
            console.log(this.props.success)
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