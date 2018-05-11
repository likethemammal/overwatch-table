import React from 'react';
import {shallow} from 'enzyme';

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

})