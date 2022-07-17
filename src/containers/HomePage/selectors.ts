import { createSelector } from 'reselect'

const selectHome = (state: any) => state.home

const makeSelectData = () => createSelector(selectHome, (homeState) => homeState.data)

export { selectHome, makeSelectData }
