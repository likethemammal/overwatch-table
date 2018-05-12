import _ from 'underscore'

export const emptyRows = rows => {
    if (!rows) {
        throw 'No rows defined'
    }

    return _.filter(rows, (data) => _.isEmpty(data))
}

export const fullRows = rows => {
    if (!rows) {
        throw 'No rows defined'
    }

    return _.filter(rows, (data) => !_.isEmpty(data))
}

export const sortedRows = function(
    fullRows,
    sortKey,
    sortAscending
) {

    let sortedRows = sortKey ? _.sortBy(fullRows, (data) => {
        return data[sortKey]
    }) : fullRows || []

    if (sortKey && !sortAscending) {
        sortedRows.reverse()
    }

    return sortedRows
}

export const sortedAndEmptyRows = function(
    emptyRows,
    sortedRows,
) {
    return sortedRows.concat(emptyRows)
}

export const getNewSortState = function(newSortKey, sortKey, sortAscending) {

    if (!newSortKey) {
        throw 'No newSortKey defined'
    }

    let state = {}

    if (sortKey === newSortKey) {
        state = {
            sortAscending: !sortAscending,
        }
    } else {
        state = {
            sortKey: newSortKey,
            sortAscending: true,
        }
    }

    return state
}
