# generator-silverstripe-theme [![Build Status](https://secure.travis-ci.org/ivoba/generator-silverstripe-theme.png?branch=master)](https://travis-ci.org/ivoba/generator-silverstripe-theme)

A generator for a [Silverstripe](http://silverstripe.org) theme.

Caution: its WIP atm

## Features

- Bower, Grunt integration via yeoman
- [Ribs](https://github.com/nickpack/Ribs) Skeleton fork, Scss framework
- compass
- jshint
- imagemin
- svgmin
- modernizr custom builds
- [ftpush](https://github.com/inossidabile/grunt-ftpush)

## Getting Started

Go to the root folder of your Silverstripe install and run:

    yo silverstripe-theme

Then go to your created theme under

    cd themes/<your-theme-name>

and there you can run *grunt* or *bower* for this theme.

In that way you can run multiple themes under yeoman.

You best define your javascript in your PageController, using the Requirements.
So you can benefit from SilverStripe Requirements mechanism, especially when using modules.

    public function init()
        {
            parent::init();
            $themeFolder = $this->ThemeDir();
            Requirements::combine_files(
                'scripts.js', array(
                    $themeFolder . '/bower_components/jquery/jquery.min.js',
                    $themeFolder . '/javascripts/main.js'
                )
            );
        }

###Tasks

The default grunt task is ```watch``` which will run ```compass watch```.


## Todo

- tests
- Foundation theme
- Bootstrap theme
- theme choice
- make ftpush optional
- ftpush server inquiry
- ftpush credential inquiry
- ftpush credential file to gitignore
- ftpush for app(mysite) & theme
- responsive_images for assets
- copy dist


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
