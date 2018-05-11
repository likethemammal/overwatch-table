
import React, { Component, } from 'react';
import Table, {
    TableBody,
    TableHead,
    TableRow,
    TableCell,
} from 'material-ui/Table'

import _ from 'underscore'
import css from './Table.less'
import SortArrow from './SortArrow'

import {
    tableStyles,
    headingStyles,
    cellStyles,
    rowStyles,
    spacerStyles,
    columnHeadCellStylesFirstChild,
    columnHeadCellStyles,
} from './Table.css.js'

import {
    getNewSortState,
} from '../units'

import {
    sortedRows as _sortedRows,
} from '../selectors'


export default class OverwatchTable extends Component {

    state = {
        sortKey: '',
        sortAscending: true,
    }

    static defaultProps = {
        rows: [],
        columnLabels: {},
        columnOrder: [],
    }

    onSetSort = (key, ev) => {

        const {
            sortKey,
            sortAscending,
        } = this.state

        this.setState(
            getNewSortState(key, sortKey, sortAscending)
        )
    }

    render() {

        const {
            columnLabels,
            columnOrder
        } = this.props

        const {
            sortKey,
            sortAscending
        } = this.state

        const sortedRows = _sortedRows(this.props, this.state)

        return <div>
            <Table
                style={tableStyles}
            >
                <TableHead>
                    <TableRow
                        style={headingStyles}
                    >
                        {_.map(columnOrder, (key, i) => {

                            const isFirst = i === 0
                            const isArrowVisible = sortKey === key

                            return <TableCell
                                key={key}
                                className={css.column_head}
                                onClick={this.onSetSort.bind(null, key)}
                                style={
                                    isFirst ?
                                    columnHeadCellStylesFirstChild :
                                    columnHeadCellStyles
                                }
                            >
                                <div className={css.label}>
                                    {columnLabels[key]}
                                </div>
                                <SortArrow
                                    sortAscending={sortAscending}
                                    visible={isArrowVisible}
                                />
                            </TableCell>
                        })}
                    </TableRow>
                </TableHead>

                <TableBody
                    style={tableStyles}
                >
                    <TableRow style={spacerStyles}/>

                    {sortedRows.map((data, i) => {

                        if (!data) {
                            return [
                                <TableRow
                                    key={i}
                                    style={rowStyles}
                                    className={css.row}
                                />,
                                <TableRow key={`${i}-spacer`} style={spacerStyles}/>
                            ]
                        }

                        return [
                            <TableRow
                                key={i}
                                style={
                                    {
                                        ...rowStyles,
                                        ...data.style,
                                    }
                                }
                                className={data.className || css.row}
                                onClick={data.onClick}
                            >
                                {_.map(columnOrder, (key, j) => {
                                    return <TableCell
                                        key={key}
                                        style={cellStyles}
                                    >
                                        {data[key]}
                                    </TableCell>
                                })}
                            </TableRow>,
                            <TableRow key={`${i}-spacer`} style={spacerStyles}/>
                        ]
                    })}

                </TableBody>
            </Table>
        </div>
    }
}
