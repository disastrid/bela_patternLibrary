![alt text][logo]

[logo]: https://raw.githubusercontent.com/disastrid/bela_patternLibrary/master/logo.png "Sample: A Library for Bela"

## [Launch Sample in your browser](https://belaplatform.github.io/bela_sample/)

Sample is a pattern library. A pattern lays out the design and layout conventions for a brand or group of sites (if you're interested, there's a really good description [here](https://boagworld.com/design/pattern-library/)). This is the one for Bela's browser-based IDE and web presence. It lays out standards for visual things like design and behaviour, as well as code. 

Sample exists so Bela's design, interfaces and user experience can evolve, and things don't break every time something changes. It also exists so components can be easily extracted and applied to other projects where needed.

Sample is highly componentised, and relies mostly on CSS3 for functionality (though it also uses [jQuery](http://jquery.com/) and about 50 lines of Javascript). It relies on the [Sass extension language](http://sass-lang.com/) for SCSS, and rolls all styles together using the included Gulp file. 

## To view current library of patterns:
1. Fork this repo.
2. Open index.html in Chrome.

This will render all current patterns and components in an active web page for perusal. From here you can open the Chrome developer tools to inspect components. HTML/SCSS (and JS where applicable) for each pattern is available in the forked repo.

## To make changes: 

1. Fork this repo.
2. Run gulp in the repo (the gulp file is already included).
3. Write/test your SCSS.
4. Make a pull request.

## To open an Issue:

[Go here.](https://github.com/disastrid/bela_patternLibrary/issues)

### Please note:

This pattern library is designed for Chrome first, because the Bela IDE is currently Chrome-based. Therefore, the components are untested outside Chrome (the HTML and styling should render properly across browsers, but is untested). Please don't open cross-browser issues at this time, but please liberally flag up any inconsistencies in Chrome browsers!

## Some things still have to be done:

- ~~radio buttons~~ Done! 
- popup styles
- ~~anchor tags~~ Done!
- ~~fix dropdowns~~ Done!
- block quotes
- rules for icon use?
- ~~ol/ul for web use~~ Done!

Version 0.1, December 2016.
