import _ from 'underscore'


export const sortedRows = function(rows, sortKey, sortAscending) {

    if (!rows) {
        throw 'No rows defined'
    }

    const emptyRows = _.filter(rows, (data) => _.isEmpty(data))
    const fullRows = _.filter(rows, (data) => !_.isEmpty(data))

    let sortedRows = sortKey ? _.sortBy(fullRows, (data) => {
        return data[sortKey]
    }) : fullRows

    if (sortKey && !sortAscending) {
        sortedRows.reverse()
    }

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
