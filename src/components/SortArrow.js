import React, { Component } from 'react'

import css from './Table.less'

import DownSVG from 'svg-icon/dist/svg/mfglabs/chevron_down.svg'
import UpSVG from 'svg-icon/dist/svg/mfglabs/chevron_up.svg'

import general from '@likethemammal/general-components'


const { SVG } = general.components

export default class SortArrow extends Component {

    render() {

        const { sortAscending, visible } = this.props

        return <div
            className={css.icon_container}
        >
            <SVG
                raw={sortAscending ? UpSVG : DownSVG}
                className={visible ? css.icon : css.icon_empty}
            />
        </div>
    }
}