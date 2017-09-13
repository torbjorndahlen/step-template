# Step Template

## Introduction 
This the base template for building a Workforce Management step. This step is a simple form for first name 
last name and form results.  

## Using this template
Clone this repo and copy to step directory in [raincatcher-angular](https://github.com/feedhenry-raincatcher/raincatcher-angularjs). Each step should have a form and results/view section . 
To customise the base step modify the html templates for 

*Form view*
    
    step-base/lib/angular/template/base-form.tpl.html

*Results view*  
    
    step-base/lib/angular/template/base.tpl.html

HTML templates are written with [bootstrap](http://getbootstrap.com/) and [angular.js](https://angularjs.org/).

Once the html templates are edited you need to use grunt to build using [wfmTemplate](https://www.npmjs.com/package/fh-wfm-template-build) with the following command. 

    grunt wfmTemplate:build

Package name can be customeised via the package.json

---

# Adding a step to raincatcher-angularjs 

## Add step to demo/mobile
Add step to mobiles package.json as a package demo/mobile/package.json
 
    "@raincatcher/step-base": "0.0.1",

Add step to mobiles demo/mobile/src/app/app.js

    // apply a variable name to the module
    var variableName = require(‘@raincatcher/step-base’);

    // add ngModule() for the module to angular.module array;
    variableName.ngModule();

Import the step scss for step-base into demo/mobile/src/sass/app.scss
    
    @import 'node_modules/@raincatcher/step-base/lib/step-base.scss';

## Add step to demo/portal

Add step package to demo/portal/package.json    

    "@raincatcher/step-base": "0.0.1",                

Add step to portal in angular.modules in demo/portal/src/app/main.js

    // apply a variable name to the module
    var variableName = require(‘@raincatcher/step-base’);

Add step definition to angular.modules stepDefinitions array

    stepDefinitions: [
                        variableName.definition 
                     ]


Also add step ngModule() in angular.modules

    variableName.ngModule()

Import the step scss demo/portal/src/sass/portal.scss

    @import 'node_modules/@raincatcher/step-base/lib/step-base.scss';















