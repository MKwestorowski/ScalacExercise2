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
             await console.log(this.props.angularRepoList)
             const response = await this.props.angularRepoList.data.map(e => fetch(e.contributors_url))
             await console.log(response)
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