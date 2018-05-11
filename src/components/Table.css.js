export const tableStyles = {
    background: 'transparent'
}

export const cellStyles = {
    padding: '0 10px 0 10px',
    borderWidth: 0,
    fontSize: '18px',
    fontFamily: 'Arial, san-serif',
    textTransform: 'uppercase',
    color: 'white',
}

export const headingStyles = {
    height: '32px',
}

export const columnHeadCellStylesFirstChild = {
    ...cellStyles,
    fontSize: '22px',
    paddingLeft: '15px',
    fontFamily: 'Futura No 2 D Semi Bold',
    background: 'rgba(30, 145, 223, 0.7)',
    cursor: 'pointer',
}

export const columnHeadCellStyles = {
    ...columnHeadCellStylesFirstChild,
    borderLeft: '2px solid transparent',
}

export const rowStyles = {
    //todo: include rowHeight
    height: '40px',
    background: 'rgba(255,255,255,0.2)',
    borderWidth: 0,
    letterSpacing: 0.6
}

export const spacerStyles = {
    height: '4px'
}