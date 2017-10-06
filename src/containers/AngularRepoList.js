/**
 * Created by MKwestorowski on 30/09/2017.
 */
import React from 'react'

// import {Link} from 'react-router-dom'

import AngularIntroduce from './../components/AngularIntroduce'

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

    async getAngularData() {
        try {
            const response = await fetch('https://api.github.com/orgs/angular');
            const got = await response.json();
            await this.props.success(got)


        }
        catch (err) {
            throw console.log('fetch failed', err);
        }
    }

    async angularContributors() {
        console.log(this.props.angularData.data)
        try {
            console.log('here')
            let response = await fetch(`{this.props.angularData.data.repos_url}`)
            let got = await response.json();
            await this.props.success(got)
            console.log(got)
        }
        catch(err) {
            throw console.log('fetch failed', err);
        }
    }



    render() {


        const angularContributors = this.angularContributors

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