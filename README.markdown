Sample build script using grunt
===============================

The script performs the following steps:

1. Check source code with JSHint
2. Run unit tests with Jasmine
3. Concat and minify script

Two tasks are defined:

`grunt default` enters watch mode and launch the process every time a file is changed.

`grunt build` launch the process once, storing the results in `build` folder.

How to build
------------

1. Download the code.

2. Install grunt command line interface: 

`npm install -g grunt-cli`

3. Install local dependencies:

`npm install`

4. Run grunt:

`grunt build` 
