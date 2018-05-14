import React from 'react'
import ReactDOM from 'react-dom'

import OverwatchTable from '../lib'

import SVG_MATERIAL_CHECK from 'svg-icon/dist/svg/material/check.svg'
import SVG_MATERIAL_CLOSE from 'svg-icon/dist/svg/material/close.svg'

import general from '@likethemammal/general-components'

const { SVG } = general.components

const iconStyles = {
    width: '35px',
    top: '3px',
    position: 'relative'
}

const rows = [
	{
		name: 'Genji',
		one_trick: <SVG raw={SVG_MATERIAL_CHECK} style={iconStyles}/>,
		weapon_type: 'shuriken',
	},
	{
		name: 'Winston',
		one_trick: <SVG raw={SVG_MATERIAL_CLOSE} style={iconStyles}/>,
		weapon_type: 'Banana Peel',
	},
    {
        name: 'Symmetra',
        one_trick: <SVG raw={SVG_MATERIAL_CHECK} style={iconStyles}/>,
        weapon_type: 'Long Range Beam'
    },
    {
		name: 'Torb',
		one_trick: <SVG raw={SVG_MATERIAL_CHECK} style={iconStyles}/>,
		weapon_type: 'Too many children',
	},
]


const columnLabels = {
    name: 'Hero Name',
    one_trick: 'Can One-Trick',
    weapon_type: 'Weapon Type'
}

const columnOrder = [
    'name',
    'weapon_type',
    'one_trick',
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