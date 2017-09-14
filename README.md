# Step Template

## Introduction 
This repository contains the base template for building a RainCatcher workflow step. 
Template contains form that collects first name last name.

## Step structure

Steps are divided into two different categories:

### Module

Can contain one or more angular directives for rendering steps
RainCatcher steps using Angularjs directives to build feature rich UI as part of the workflow.
Each step is divided into two types for directives:

- Edit section

This section is displayed when workflow is executed and allows users to edit information, 
Section always consist from the html template and directive.

For example: `base-form.tpl.html`

- Preview section

Displayed as part of summary when workflow is finished
Section always consist from the html template and directive.
For example: `base.tpl.html`

### Definition

Can contain step definition.
It may be array of definitions when npm module provides more than one step.

For example:

```javascript 
module.exports = {
  ngModule: require('./angular/base'),
  // Definition for this step that is being used in portal
  definition: require('./definition.json')
};
```

## Definitions

TODO describe definition
```json
{
  "code": "base-form",
  "name": "Base Form",
  "description": "base form used to for steps",
  "templates": {
    "form": "<base-form></base-form>",
    "view": "<base></base>"
  }
}
```


## Naming conventions

What naming converstions we use


## Limitations

TODO 
Mention Angular scoped directives are not supported.


## Example use case 

In following example we will edit base template to build 'User Reciept form'.

To customize the base step modify the html templates for 

*Form view*
    
    step-base/lib/angular/template/base-form.tpl.html

*Results view*  
    
    step-base/lib/angular/template/base.tpl.html


// TODO research what plugins are there (angular aria etc.) 
HTML templates are written with [angular.js](https://angularjs.org/).

Once the html templates are edited you need to use grunt to build using [wfmTemplate](https://www.npmjs.com/package/fh-wfm-template-build) with the following command. 

    grunt wfmTemplate:build

Package name can be customized via the package.json

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















