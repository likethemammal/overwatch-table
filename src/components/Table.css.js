export const rowHeight = 36


export const tableStyles = {
    background: 'transparent'
}

export const cellStyles = {
    padding: '0 10px 0 10px',
    borderWidth: 0,
    fontSize: '16px',
    fontFamily: 'Arial, san-serif',
    textTransform: 'uppercase',
    color: 'white',
}

export const headingStyles = {
    height: rowHeight,
}

export const columnHeadCellStylesFirstChild = {
    ...cellStyles,
    fontSize: '20px',
    fontFamily: 'Futura No 2 D Semi Bold',
    background: 'rgba(28, 116, 188, 0.6)',
    cursor: 'pointer',
}

export const columnHeadCellStyles = {
    ...columnHeadCellStylesFirstChild,
    borderLeft: '2px solid transparent',
}

export const rowStyles = {
    //todo: include rowHeight
    height: rowHeight,
    background: 'rgba(255,255,255,0.07)',
    borderWidth: 0,
    letterSpacing: 0.6
}

export const spacerStyles = {
    height: '3px'
}