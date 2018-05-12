

import general from '@likethemammal/general-components'

const validation_tests = general.__tests__._shared.validations

import {
    emptyRows,
    fullRows,
    sortedRows,
    sortedAndEmptyRows,
    getNewSortState,
} from '../units'

describe('emptyRows', () => {
    describe('given rows', () => {

        validation_tests.NO_VALUE(
            emptyRows
        )

        test('if rows is an empty array, return empty array', () => {
            expect(
                emptyRows([])
            ).toEqual([])
        })

        test('if rows has length, but has no empty row objects, return empty array', () => {
            expect(
                emptyRows(['what', 'the'])
            ).toEqual([])
        })

        test('if rows has length and has empty rows, return an array of those empty objects', () => {
            expect(
                emptyRows(['what', {}, {}, { 'not': 'empty' }])
            ).toEqual([{}, {}])
        })

    })
})

describe('fullRows', () => {
    describe('given rows', () => {

        validation_tests.NO_VALUE(
            fullRows
        )

    })
})

describe('sortedRows', () => {
    describe('given fullRows, sortKey, sortAscending', () => {
        test('if no rows, return empty array', () => {
            expect(
                sortedRows()
            ).toEqual([])
        })

        test('if rows is an empty array, return empty array', () => {
            expect(
                sortedRows([])
            ).toEqual([])
        })

        test('if fullRows, but no sortKey, return fullRows', () => {
            expect(
                sortedRows(['what', 'the'])
            ).toEqual(['what', 'the'])
        })

        test('if fullRows and sortKey, but no rows match that key, return fullRows sorted by default sorting', () => {
            expect(
                sortedRows(['what', 'the', 5, { 'some': 'craziness' }], 'some_key')
            ).toEqual([{ 'some': 'craziness' }, 5, 'the', 'what'])
        })
    })
})

describe('getNewSortState', () => {
    describe('newSortKey, sortKey, sortAscending', () => {

        validation_tests.NO_VALUE(
            getNewSortState
        )

    })
})
