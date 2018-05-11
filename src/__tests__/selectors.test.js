import {
    rows as basic_rows,
    sortKey as basic_sortKey,
    sortAscending as basic_sortAscending,
    sortedRows,
} from '../selectors'

import _ from 'underscore'


const basic_selectors = {
    rows: basic_rows,
    sortKey: basic_sortKey,
    sortAscending: basic_sortAscending,
}


const mock_props = {
    rows: ['test', 'some other'],
}

const mock_state = {
    sortAscending: true,
    sortKey: 'some_key'
}

const mock_state_and_props = {
    ...mock_state,
    ...mock_props,
}

describe('basic selectors', () => {
    describe('given a state object', () => {

        _.map(basic_selectors, (selector, key) => {
            test(`selector for ${key}`, () => {
                expect(selector(mock_props, mock_state)).toEqual(mock_state_and_props[key])
            })
        })

    })
})

describe('selectors', () => {
    describe('given a state object', () => {

        describe('sortedRows', () => {

        })

    })
})
