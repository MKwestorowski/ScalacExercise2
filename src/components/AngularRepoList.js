/**
 * Created by MKwestorowski on 30/09/2017.
 */
import React from 'react'

// import {Link} from 'react-router-dom'

import {connect} from 'react-redux'


export default connect(
    state => ({
        angularData: state.angularData
    }),
    dispatch =>  ({
        success: data => dispatch({
            type: 'angularData/FETCH__SUCCESS',
            data: data
        })

    })

)(class angularContributors extends React.Component {


    // state = {
    //     sortingOrder: null,
    //
    // }

    async componentWillMount() {

            try {
                let response = await fetch('https://api.github.com/orgs/angular');
                let got = await response.json();
                await this.props.success(got)


            }
            catch(err) {
                throw console.log('fetch failed', err);
            }
    }


    // handleSortingToggle = () => this.setState({
    //     sortingOrder: [null, 'ASC'].includes(this.state.sortingOrder) ? 'DESC' : 'ASC'
    // })


    render() {


        console.log(this.props.angularData)
        // const contributors = this.props.contributors.data
        // const contributorProfile = this.props.contributorProfile
        //
        // const sortingMarks = {
        //     'DESC': <span>&#8595;</span>,
        //     'ASC': <span>&#8593;</span>
        // }
        // const sortingMark = sortingMarks[this.state.sortingOrder] || null
        //
        // const contributorsVariants = {
        //     'DESC': () => contributors.slice().sort(
        //         (a, b) => b.contributions - a.contributions
        //     ),
        //     'ASC': () => contributors.slice().sort(
        //         (a, b) => a.contributions - b.contributions
        //     )
        // }
        //
        //
        // const preparedContributors = (
        //     contributorsVariants[this.state.sortingOrder] ||
        //     (
        //         () => contributors
        //     )
        // )()
return (
    null

)
    }
})