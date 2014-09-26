# generator-silverstripe-theme [![Build Status](https://secure.travis-ci.org/ivoba/generator-silverstripe-theme.png?branch=master)](https://travis-ci.org/ivoba/generator-silverstripe-theme)

A yeoman generator for a [Silverstripe](http://silverstripe.org) theme.

Caution: its WIP atm

## Features

- Bower, Grunt integration via yeoman
- [Ribs](https://github.com/nickpack/Ribs) Skeleton fork, Scss framework
- [Foundation](http://foundation.zurb.com/)
- compass
- jshint
- modernizr custom builds
- [ftpush](https://github.com/inossidabile/grunt-ftpush)

##Installation
todo

## Getting Started

Go to the root folder of your Silverstripe install and run:

    yo silverstripe-theme

Then go to your created theme under

    cd themes/<your-theme-name>

and there you can run *grunt* or *bower* for this theme.

By calling Grunt from within the theme folder you can run multiple themes under yeoman.

###Tasks

The default grunt task is ```watch``` which will run ```compass watch```.

### Disclaimer

I dont use Javascript minify tasks here.
I rely on the provided Silverstripe Minifier mechanims.
So you best define your javascript in your PageController, using the Requirements.
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

If you choose to use Foundation add this also:

    $themeFolder . '/bower_components/foundation/js/foundation.js',

For Css i let Compass do the work.

I also left out image optimizers, as they often dont work :/

If you use git dont forget to edit your .gitignore and add folder like bower_components, .sass-cache, node_modules (this is actually a task for this generator ;))

## Todo

- tests
- different foundation versions
- Bootstrap sass theme
- make ftpush optional
- ftpush server inquiry
- ftpush credential inquiry
- ftpush credential file to gitignore
- ftpush for app(mysite) & theme
- responsive_images for assets
- copy dist
- responsiveNavigation.ss
- css&js strategy: use SilverStripe buildIn minimizer, communicate
- js strategy remove <!-- build:js /scripts/vendor/modernizr.js -->


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
