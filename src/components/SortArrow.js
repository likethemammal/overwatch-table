import React, { Component } from 'react'

import css from './SortArrow.less'

import DownSVG from 'svg-icon/dist/svg/mfglabs/chevron_down.svg'
import UpSVG from 'svg-icon/dist/svg/mfglabs/chevron_up.svg'

import general from '@likethemammal/general-components'


const { SVG } = general.components

const SortArrow = ({ sortAscending, visible }, state) =>
    <div
        className={css.container}
    >
        <SVG
            raw={sortAscending ? UpSVG : DownSVG}
            className={visible ? '' : css.icon_empty}
        />
    </div>


export default SortArrow