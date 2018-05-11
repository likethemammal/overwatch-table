import React from 'react'
import ReactDOM from 'react-dom'

import OverwatchTable from '../lib'

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



ReactDOM.render(
    <OverwatchTable
        {...props}
    />,
    document.getElementById('app')
)