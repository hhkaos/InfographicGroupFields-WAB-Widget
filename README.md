# Steps

1. [Add new Template](https://github.com/hhkaos/InfographicGroupFields-WAB-Widget/commit/2f7d94d6ce8584b5de7879311567232dd2e024b8)
2. [Adding new fields, storing and initializing them](https://github.com/hhkaos/InfographicGroupFields-WAB-Widget/commit/50dd1b245d17295951f1a0989bc7dae140d8a629)
  2.1 `setting/css/style.css` <- Adding row margins (between fields)
  2.2 `setting/dijitsSetting/_dijits/ValueProvider/FieldStatistics.html` -> Adding new fields (nls.filterValuePerCategory, operationSelectGroupField)
  2.3 `setting/dijitsSetting/_dijits/ValueProvider/FieldStatistics.js`
    2.3.1 getConfig (return new field values)
    2.3.2 setConfig (initialize field values)
    2.3.3 _fillFieldsSelectGroupBy (load all fields from service), using _getAllFields function
    2.3.4 _showFieldContainer, _hideFieldContainer (show and hide fields logic)
  2.4 `setting/nls/strings.js` <- adding translations
