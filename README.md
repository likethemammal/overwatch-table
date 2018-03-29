[![Build Status](https://travis-ci.org/likethemammal/overwatch-table.svg?branch=master)](https://travis-ci.org/likethemammal/overwatch-table)
[![Coverage Status](https://coveralls.io/repos/github/likethemammal/overwatch-table/badge.svg?branch=master)](https://coveralls.io/github/likethemammal/overwatch-table?branch=master)

overwatch-table
=========

A React component modeling the Overwatch custom game table element


## Installation

Note: Requires **React 16.2+** for now

  `npm install`

## Development

  `npm run dev`

## Tests

  `npm test`

## Contributing

Its an example

    font-family: 'Futura No 2 D DemiBold';

http://www.myfonts.com/fonts/urw/futura-no-2/futura-no2-d-demi-bold/


### Props

| name        | type           | default  | desc 
--- | --- | --- | --- |
| headerLabels | object | null | object of keys matching eaach of the rows' data keys |
| headerOrder | array | null | array of strings, each a key from rows' data keys desired order |
| row | array | null | array of objects, with keys matching headerLabels |