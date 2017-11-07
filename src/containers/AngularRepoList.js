import React from 'react'
import {AngularIntroduce} from './../components/AngularIntroduce'
import {connect} from 'react-redux'


export default connect(
    state => ({
        angularData: state.angularData,
        angularRepoList: state.angularRepoList
    }),
    dispatch => ({
        success: data => dispatch({
            type: 'angularData/FETCH__SUCCESS',
            data: data,
        }),

        successRepo: data => dispatch({
            type: 'angularRepoList/FETCH__SUCCESS',
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
        }
        catch (err) {
            throw console.log('fetch failed', err);
        }
    }


    getAngularContributors = async () => {
        try {
            const response = await fetch(this.props.angularData.data.repos_url);
            const got = await response.json()
            await this.props.successRepo(got)
            await this.props.history.push('/contributorlist')
        }
        catch (err) {
            throw console.log('fetch failed', err);
        }
    }


    render() {


        const angularContributors = this.getAngularContributors
        const angularData = this.props.angularData.data
        return (

            angularData === null ? null : <AngularIntroduce
                showContributors={angularContributors}
                angularBlog={angularData.blog}
                angularReposCount={angularData.public_repos}
                angularAvatar={angularData.avatar_url}/>


        )
    }
})