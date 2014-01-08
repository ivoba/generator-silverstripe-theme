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
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(SilverstripeThemeGenerator, yeoman.generators.Base);

SilverstripeThemeGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    name: 'themeName',
    message: 'What do you want to call your theme?'
  }];

  this.prompt(prompts, function (props) {
    this.themeName = props.themeName;
    this.themeDir = 'themes/'+_.str.slugify(this.themeName)+'/';

    cb();
  }.bind(this));
};

SilverstripeThemeGenerator.prototype.app = function app() {
  this.mkdir(this.themeDir);
  this.mkdir(this.themeDir+'templates');
  this.mkdir(this.themeDir+'templates/Layout');
  this.mkdir(this.themeDir+'templates/Includes');
  this.mkdir(this.themeDir+'css');
  this.mkdir(this.themeDir+'javascripts');
  this.mkdir(this.themeDir+'images');
  this.mkdir(this.themeDir+'scss');

  this.copy('Ribs/Page.ss', this.themeDir+'templates/Page.ss');
  this.copy('Ribs/Includes/Footer.ss', this.themeDir+'templates/Includes/Footer.ss');
  this.copy('Ribs/Includes/Header.ss', this.themeDir+'templates/Includes/Header.ss');
  this.copy('Ribs/Includes/Navigation.ss', this.themeDir+'templates/Includes/Navigation.ss');
  this.copy('Ribs/Layout/Page.ss', this.themeDir+'templates/Layout/Page.ss');
  this.copy('main.scss', this.themeDir+'scss/main.scss');
  this.copy('main.js', this.themeDir+'javascripts/main.js');
  this.copy('_variables.scss', this.themeDir+'scss/_variables.scss');

  this.template('_package.json', this.themeDir+'package.json');
  this.template('_bower.json', this.themeDir+'bower.json');

  this.template('Gruntfile.js', this.themeDir+'Gruntfile.js');
  
  this.copy('jshintrc', this.themeDir+'.jshintrc');
};

SilverstripeThemeGenerator.prototype.runtime = function runtime() {
  this.template('bowerrc', this.themeDir+'.bowerrc');
};
