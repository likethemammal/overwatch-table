import React from 'react';
import {shallow} from 'enzyme';

import general from '@likethemammal/general-components'

const shared = general.__tests__._shared.tests
const { SVG } = general.components

import SortArrow from '../../../src/components/SortArrow'


const sortAscending = true
const visible = true

const props_1 = {
    sortAscending,
    visible,
}

const props_2 = {
    sortAscending: false,
    visible: false,
}

describe('SettingsSelect', () => {
    const component = shallow(
        <SortArrow
            {...props_1}
        />
    )
    const component_2 = shallow(
        <SortArrow
            {...props_2}
        />
    )

    shared.SNAPSHOTS_SHOULD_MATCH([
        component,
        component_2,
    ])

    test('if not visible, the class should equal undefined', () => {
        expect(
            component_2.find(SVG).props().className
        ).toEqual('SVG-container')
    })

    test('if visible, the class should equal empty string', () => {
        expect(
            component.find(SVG).props().className
        ).toEqual('')
    })

    test('since its a mock file, just test that SVG component receive the stub', () => {
        expect(
            component.find(SVG).props().raw
        ).toEqual('test-file-stub')
    })
})