import React from 'react'
import ReactDOM from 'react-dom'

import OverwatchTable from '../lib'
import OverwatchSettingsSelect from 'overwatch-settings-select'

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


class Example extends React.Component {

    state = {
        selectedIndex: 0,
    }

    onChange = (selectedIndex) => {
        this.setState({
            selectedIndex,
        })
    }

    render() {
        const { selectedIndex } = this.state

        return <OverwatchSettingsSelect
            selectedIndex={selectedIndex}
            onChange={this.onChange}
            options={
                [
                    'Easy',
                    'Medium',
                    'Hard',
                    'Baller',
                ]
            }
            label={'Difficulty'}
        />
    }
}


ReactDOM.render(
    <div>
        <Example />
        <OverwatchTable
            {...props}
        />
    </div>,
    document.getElementById('app')
)