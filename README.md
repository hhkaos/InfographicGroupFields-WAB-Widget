# Steps

1. [Add new Template](https://github.com/hhkaos/InfographicGroupFields-WAB-Widget/commit/2f7d94d6ce8584b5de7879311567232dd2e024b8)
2. [Adding new fields, storing and initializing them](https://github.com/hhkaos/InfographicGroupFields-WAB-Widget/commit/50dd1b245d17295951f1a0989bc7dae140d8a629)
   * `setting/css/style.css` <- Adding row margins (between fields)
   * `setting/dijitsSetting/_dijits/ValueProvider/FieldStatistics.html` -> Adding new fields (nls.filterValuePerCategory, operationSelectGroupField)
   * `setting/dijitsSetting/_dijits/ValueProvider/FieldStatistics.js`
      * `getConfig` <- return new field values
      * `setConfig` <- initialize field values
      * `_fillFieldsSelectGroupBy` <- load all fields from service, using `_getAllFields` function
      * `_showFieldContainer` & `_hideFieldContainer` <- show and hide fields logic
   * `setting/nls/strings.js` <- adding translations
