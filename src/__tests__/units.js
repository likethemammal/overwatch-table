

import general from '@likethemammal/general-components'

const validation_tests = general.__tests__._shared.validations

import {
    sortedRows,
    getNewSortState,
} from '../units'

describe('sortedRows', () => {
    describe('given rows, sortKey, sortAscending', () => {

        validation_tests.NO_VALUE(
            sortedRows
        )

    })
})

describe('getNewSortState', () => {
    describe('newSortKey, sortKey, sortAscending', () => {

        validation_tests.NO_VALUE(
            getNewSortState
        )

    })
})
