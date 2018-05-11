import React from 'react';
import {shallow} from 'enzyme';

import general from '@likethemammal/general-components'

const shared = general.__tests__._shared.tests

import SortArrow from '../../../src/components/SortArrow'


const sortAscending = true
const visible = true

const props = {
    sortAscending,
    visible,
}



describe('SettingsSelect', () => {
    const component = shallow(
        <SortArrow
            {...props}
        />
    )

    shared.SNAPSHOTS_SHOULD_MATCH([
        component
    ])

})