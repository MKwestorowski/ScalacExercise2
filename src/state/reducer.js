/**
 * Created by MKwestorowski on 28/09/2017.
 */
import angularData from './parts/angularRepoData'


export default (state = {}, action) => {
    return {

        angularData: angularData(state.angularData, action),

    }
}