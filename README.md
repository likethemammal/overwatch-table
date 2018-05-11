overwatch-table
=========

[![Build Status](https://travis-ci.org/likethemammal/overwatch-table.svg?branch=master)](https://travis-ci.org/likethemammal/overwatch-table)
[![Coverage Status](https://coveralls.io/repos/github/likethemammal/overwatch-table/badge.svg?branch=master)](https://coveralls.io/github/likethemammal/overwatch-table?branch=master)

[![npm Version](https://img.shields.io/npm/v/overwatch-table.svg)](https://www.npmjs.com/package/overwatch-table)
[![npm Downloads](https://img.shields.io/npm/dm/overwatch-table.svg)](https://www.npmjs.com/package/overwatch-table)
[![license](https://img.shields.io/github/license/likethemammal/overwatch-table.svg)](https://github.com/likethemammal/overwatch-table/blob/master/LICENSE)

A React component modeling the Overwatch Custom Game table element


## Install

Note: Requires **React 16.2+** for now

	npm install --save overwatch-table

### Fonts

#### Futura No 2 D DemiBold

This font is used by Activision Blizzard for much of Overwatch's design. For this component **to match the Overwatch design, including the font is required**. It can be licensed from [MyFonts](http://www.myfonts.com/fonts/urw/futura-no-2/futura-no2-d-demi-bold/).

When using CSS font-face, the font-family should match whats below:

    font-family: 'Futura No 2 D DemiBold';

## Usage

Check out [example/index.js](example/index.js) for working example.

### Props

| name        | required | type           | default  | desc 
--- |--- | --- | --- | --- |
| headerLabels | **`X`** | object | null | object of keys matching eaach of the rows' data keys |
| headerOrder | **`X`** | array | null | array of strings, each a key from rows' data keys desired order |
| row | array | **`X`** | null | array of objects, with keys matching headerLabels |


## Development

    npm run dev
  
#### Running the example

    cd example/; npm run dev
    
Open [http://localhost:8080/](http://localhost:8080/) to view example


## Tests

    npm test

### License

Made with 🍊 by [Chris Dolphin](https://github.com/likethemammal)

[![license](https://img.shields.io/github/license/likethemammal/overwatch-table.svg?style=flat-square)](https://github.com/likethemammal/overwatch-table/blob/master/LICENSE)
