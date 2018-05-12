import {
    createSelector,
} from 'reselect'

import {
    emptyRows as _emptyRows,
    fullRows as _fullRows,
    sortedRows as _sortedRows,
    sortedAndEmptyRows as _sortedAndEmptyRows,
} from './units'

export const rows = props => props.rows
export const sortKey = (props, state) => state.sortKey
export const sortAscending = (props, state) => state.sortAscending

export const emptyRows = createSelector(
    rows,
    _emptyRows,
)

export const fullRows = createSelector(
    rows,
    _fullRows,
)

export const sortedRows = createSelector(
    fullRows,
    sortKey,
    sortAscending,
    _sortedRows
)

export const sortedAndEmptyRows = createSelector(
    emptyRows,
    sortedRows,
    _sortedAndEmptyRows,
)
