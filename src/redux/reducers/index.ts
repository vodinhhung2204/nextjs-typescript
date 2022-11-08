import { combineReducers } from 'redux'
import { HYDRATE } from 'next-redux-wrapper'
import home from '@/containers/HomePage/reducer'
/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
	const rootReducer = combineReducers({ home })

	const rootReducerWithHydrate = (state: any, action: any) => {
		switch (action.type) {
			case HYDRATE:
				return { ...state, ...action.payload }

			default: {
				return rootReducer(state, action)
			}
		}
	}

	return rootReducerWithHydrate
}
