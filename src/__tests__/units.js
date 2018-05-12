

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

        test('if rows is an empty array, return empty array', () => {
            expect(
                fullRows([])
            ).toEqual([])
        })

        test('if rows has length, but has no non-empty row objects, return empty array', () => {
            expect(
                fullRows([{}, {}, null, true])
            ).toEqual([])
        })

        test('if rows has length and has full row objects, return an array of those row objects', () => {
            expect(
                fullRows([{some: 'key'}, {'some_other': 'value'}, true])
            ).toEqual([{some: 'key'}, {'some_other': 'value'}])
        })

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

        test('if fullRows and sortKey, and rows match that key, return fullRows sorted by that key', () => {
            expect(
                sortedRows([
                    {some_key: 'alpha'},
                    {some_key: 'the other one'},
                    {some_key: 'beta'},
                    {some_key: 'gamma'},
                ], 'some_key')
            ).toEqual([
                {some_key: 'the other one'},
                {some_key: 'gamma'},
                {some_key: 'beta'},
                {some_key: 'alpha'},
            ])
        })

        test('if fullRows and sortKey and sortAscending, and rows match sortKey, return fullRows sorted by sortKey in reverse order', () => {
            expect(
                sortedRows([
                    {some_key: 'alpha'},
                    {some_key: 'the other one'},
                    {some_key: 'beta'},
                    {some_key: 'gamma'},
                ], 'some_key', true)
            ).toEqual([
                {some_key: 'alpha'},
                {some_key: 'beta'},
                {some_key: 'gamma'},
                {some_key: 'the other one'},
            ])
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
