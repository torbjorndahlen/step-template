var ngModule;
try {
  ngModule = angular.module('wfm.step.base');
} catch (e) {
  ngModule = angular.module('wfm.step.base', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/base.tpl.html',
    '<md-subheader>Report View</md-subheader>\n' +
    '<!-- Three field report -->\n' +
    '<md-list>\n' +
    '  <md-list-item class="md-2-line">\n' +
    '    <div class="md-list-item-text">\n' +
    '      <!-- Customise change model. to own variable --> \n' +
    '      <h3>{{model.firstName}} </h3>\n' +
    '      <p>First name </p>\n' +
    '    </div>\n' +
    '    <md-divider></md-divider>\n' +
    '  </md-list-item>\n' +
    '\n' +
    '  <md-list-item class="md-2-line">\n' +
    '    <div class="md-list-item-text">\n' +
    '      <h3>{{model.lastName}} </h3>\n' +
    '      <p>Last Name</p>\n' +
    '    </div>\n' +
    '    <md-divider></md-divider>\n' +
    '  </md-list-item>\n' +
    '\n' +
    '  <md-list-item class="md-2-line">\n' +
    '    <div class="md-list-item-text">\n' +
    '      <h3>{{model.email}} </h3>\n' +
    '      <p>Email</p>\n' +
    '    </div>\n' +
    '    <md-divider></md-divider>\n' +
    '  </md-list-item>\n' +
    '\n' +
    '</md-list>\n' +
    '');
}]);
