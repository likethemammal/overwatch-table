import React from 'react';
import {shallow} from 'enzyme';

import general from '@likethemammal/general-components'

const shared = general.__tests__._shared.tests

import Table from '../../../lib'

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


const headerLabels = {
    label_1: 'Label 1',
    label_2: 'Label 2',
}

const headerOrder = [
    'label_1',
    'label_2',
]


const props = {
    rows,
    headerLabels,
    headerOrder,
}





describe('SettingsSelect', () => {
    // Render a checkbox with label in the document
    const component = shallow(
        <Table
            {...props}
        />
    )

    shared.SNAPSHOTS_SHOULD_MATCH([
        component
    ])

})