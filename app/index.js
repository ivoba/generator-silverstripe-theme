'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var _ = require('underscore');
_.str = require('underscore.string');


var SilverstripeThemeGenerator = module.exports = function SilverstripeThemeGenerator(args, options, config) {
    yeoman.generators.Base.apply(this, arguments);

    this.on('end', function () {
        process.chdir(this.themeDir);
        this.installDependencies({
            skipInstall: options['skip-install'],
            callback: function() {
                // Emit a new event - dependencies installed
                this.emit('dependenciesInstalled');
            }.bind(this)
        });
    });

    // Now you can bind to the dependencies installed event
    this.on('dependenciesInstalled', function() {
        this.spawnCommand('grunt', ['compass']);
    });

    this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(SilverstripeThemeGenerator, yeoman.generators.Base);

SilverstripeThemeGenerator.prototype.askFor = function askFor() {
    var cb = this.async();

    // have Yeoman greet the user.
    console.log(this.yeoman);

    var prompts = [
        {
            name: 'themeName',
            message: 'What do you want to call your theme?'
        },
        {
            type: "list",
            name: "framework",
            message: "What SCSS framework would you like to use?",
            choices: [ "Ribs", "Foundation" ],
            filter: function (val) {
                return val.toLowerCase();
            }
        },
        {
            type: 'checkbox',
            name: 'features',
            message: 'What more would you like?',
            choices: [
                {
                    name: 'Ftpush',
                    value: 'includeFtpush',
                    checked: true
                },
                {
                    name: 'Modernizr',
                    value: 'includeModernizr',
                    checked: true
                }
            ]
        }
    ];

    this.prompt(prompts, function (props) {

        this.themeName = props.themeName;
        this.themeDir = 'themes/' + _.str.slugify(this.themeName) + '/';
        this.framework = props.framework;
        this.frameworkDir = _.str.capitalize(this.framework);

        var features = props.features;

        function hasFeature(feat) {
            return features && features.indexOf(feat) !== -1;
        }

        this.includeFtpush = hasFeature('includeFtpush');
        this.includeModernizr = hasFeature('includeModernizr');

        cb();
    }.bind(this));
};

SilverstripeThemeGenerator.prototype.app = function app() {
    this.mkdir(this.themeDir);
    this.mkdir(this.themeDir + 'templates');
    this.mkdir(this.themeDir + 'templates/Layout');
    this.mkdir(this.themeDir + 'templates/Includes');
    this.mkdir(this.themeDir + 'css');
    this.mkdir(this.themeDir + 'javascripts');
    this.mkdir(this.themeDir + 'images');
    this.mkdir(this.themeDir + 'scss');

    this.copy(this.frameworkDir + '/Page.ss', this.themeDir + 'templates/Page.ss');
    this.copy(this.frameworkDir + '/Includes/Footer.ss', this.themeDir + 'templates/Includes/Footer.ss');
    this.copy(this.frameworkDir + '/Includes/Header.ss', this.themeDir + 'templates/Includes/Header.ss');
    this.copy(this.frameworkDir + '/Includes/Navigation.ss', this.themeDir + 'templates/Includes/Navigation.ss');
    this.copy(this.frameworkDir + '/Layout/Page.ss', this.themeDir + 'templates/Layout/Page.ss');
    this.copy('main.js', this.themeDir + 'javascripts/main.js');
    this.copy('_variables.scss', this.themeDir + 'scss/_variables.scss');
    this.copy('_variables.scss', this.themeDir + 'scss/_editor.scss');
    this.copy('jshintrc', this.themeDir + '.jshintrc');

    this.template('main.scss', this.themeDir + 'scss/main.scss');
    this.template('_package.json', this.themeDir + 'package.json');
    this.template('_bower.json', this.themeDir + 'bower.json');
    if (this.includeFtpush === true) {
        this.template('_ftppass', this.themeDir + '.ftppass');
    }
    this.template('Gruntfile.js', this.themeDir + 'Gruntfile.js');

};

SilverstripeThemeGenerator.prototype.runtime = function runtime() {
    this.template('bowerrc', this.themeDir + '.bowerrc');
};
