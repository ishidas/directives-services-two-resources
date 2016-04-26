'use strict';
require('express')().use(require('express')
  .static('build'))
  .listen(8080, ()=> console.log('Cli-server on port 8080!!'));
