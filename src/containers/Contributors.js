/**
 * Created by MKwestorowski on 09/10/2017.
 */

import React from 'react'
import { ContributorsList } from './../components/ContributorsList'

import {connect} from 'react-redux'


export default connect(
    state => ({
        angularRepoList: state.angularRepoList
    }),
    dispatch =>  ({
        success: data => dispatch({
            type: 'angularData/FETCH__SUCCESS',
            data: data
        })

    })

)(class contributorList extends React.Component {



    componentDidMount() {
        this.fetchContributors()
    }

   wait = (ms) => {
        new Promise(r => setTimeout(r, ms))

}



    fetchContributors = async () => {
        try {
            const array = []
            console.log(typeof this.props.angularRepoList)
            this.props.angularReposList.map(
                e => fetch(e.repos_url).then(
                    response => array.push(response)))
             await console.log(this.props.angularRepoList)
             const response = await fetch(this.props.angularRepoList)
             const result = await response.json()
            await console.log(array)
        }
        catch(err) {
            throw console.log('Fetching failed', err)
        }
    }




    render() {

        // contributorList = this.props.angularReposList


        return (
            <ContributorsList
                // contributorList={contributorList}
                />

        )
    }
})