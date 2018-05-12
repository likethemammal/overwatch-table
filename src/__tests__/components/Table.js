import React from 'react';
import {shallow} from 'enzyme';

import {
    TableBody,
    TableHead,
    TableRow,
    TableCell,
} from 'material-ui/Table'

import general from '@likethemammal/general-components'

const shared = general.__tests__._shared.tests

import Table from '../../../src'

const rows = [
    {
        label_1: 'Some value',
        label_2: 'Some other value'
    },
    {
        label_1: 'Next value',
        label_2: 'Some other value'
    },
    { },
]


const columnLabels = {
    label_1: 'Label 1',
    label_2: 'Label 2',
}

const columnOrder = [
    'label_1',
    'label_2',
]


const props = {
    rows,
    columnLabels,
    columnOrder,
}





describe('Table', () => {

    const component = shallow(
        <Table
            {...props}
        />
    )

    shared.SNAPSHOTS_SHOULD_MATCH([
        component
    ])

    test('the number of TableRow should match the total number of rows times 2 plus 1, because of the spacers', () => {
        expect(
            component.find(TableBody).find(TableRow).length
        ).toEqual((rows.length * 2) + 1)
    })

    test('if row is empty, those TableRows should have TableCells that are empty', () => {
        expect(
            component.find(TableBody).find(TableRow).at(5).find(TableCell).at(0).text()
        ).toEqual(`<WithStyles(TableCell) />`)
    })


})