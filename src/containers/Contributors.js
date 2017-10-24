import React from 'react'
import { ContributorsList } from './../components/ContributorsList'

import {connect} from 'react-redux'


export default connect(
    state => ({
        angularRepoList: state.angularRepoList,
        contributorData: state.contributorData
    }),
    dispatch =>  ({
        successContData: data => dispatch({
            type: 'ADD__ITEM',
            data: data
        }),

        clearContributors: data => dispatch({
                type: 'CLEAR__STORE',
            })

    })

)(class contributorList extends React.Component {



     async componentDidMount() {
       await this.props.clearContributors()
        await this.fetchContributors()

    }

    fetchContributors = async () => {
        try {
             const response = await this.props.angularRepoList.data.map(e => fetch(e.contributors_url))
             const got = await response.map(e => e.then(r => r.json()).then(e => this.props.successContData(e)))
            console.log(got)

        }
        catch(err) {
            throw console.log('Fetching failed', err)
        }
    }




    render() {


        contributorList = this.props.contributorData


        return (
            <ContributorsList
                contributorList={contributorList}
                />

        )
    }
})