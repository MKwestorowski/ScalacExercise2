/**
 * Created by MKwestorowski on 28/09/2017.
 */
import angularData from './parts/angularData'
import angularReposList from './parts/angularReposList'


export default (state = {}, action) => {
    return {

        angularData: angularData(state.angularData, action),
        angularReposList: angularReposList(state.angularReposList, action)

    }
}