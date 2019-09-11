![alt text][logo]

[logo]: https://raw.githubusercontent.com/disastrid/bela_patternLibrary/master/logo.png "Sample: A Library for Bela"

## [Click here to launch Sample in your browser](https://belaplatform.github.io/bela_sample/src)

Sample is a pattern library. A pattern lays out the design and layout conventions for a brand or group of sites (if you're interested, there's a really good description [here](https://boagworld.com/design/pattern-library/)). This is Bela's design pattern guide for web, print and visual assets that codifies standards for design and interactive behaviour, as well as demonstrating the style and conventions in which these should be written. 

## How to use this pattern library

### Viewing

To look at the contents of this pattern library you can [click here](https://belaplatform.github.io/bela_sample/src) to launch it in your browser. You can also view it locally by doing the following:

1. Fork this repo.
2. Open `src/index.html` in a browser 

### Making or suggesting changes

Web standards, dependencies and libraries change all the time. If you notice something wrong or out of date, please [log an issue](https://github.com/BelaPlatform/bela_sample/issues).

If you would like to develop this library and make a pull request, do the following:

1. Clone this repo.
2. On the command line, navigate to the root of this repo and run `npm install`. This installs all the dependencies needed to compile the sass workflow and give you access to the `gulp` functionality. 
3. Design, write and test your components. Use `gulp watch` on the command line to automatically build the site as you go and reload your browser.
4. Make a pull request for review.

## What this library contains

### A `gulp` file

Sample uses `gulp`, a program that automates the mashing together of the scss components. At the root of the repo is the `gulpfile.js` file that tells `gulp` what to do. As of September 2019 this is Gulp 4.0 compliant.

### `src` folder

At the root of this repo is a `src/` file. This is where the library lives.

`gulp` takes the scss files from `src/scss`, mashes them into a single css file (called `bela-sample.css`), and places this file in `src/css`.

## Changelog

### 0.1, Dec 2016

Gulp workflow; file structure; scss components; base js.

### 0.1.1 Oct 2017

Updated components; added accent colours

### 0.5, Sept 2019

Gulp 4.0 workflow; rolled in scss from IDE upgrade; added product logos; updated components; updated layout to reflect current useage.
