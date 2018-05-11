import {
    createSelector,
} from 'reselect'

import {
    sortedRows as _sortedRows,
} from './units'

export const rows = props => props.rows
export const sortKey = (props, state) => state.sortKey
export const sortAscending = (props, state) => state.sortAscending

export const sortedRows = createSelector(
    rows,
    sortKey,
    sortAscending,
    _sortedRows
)
