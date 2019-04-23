'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  VUE_APP_IDENTITY_API: '"http://52.141.38.214:8000/api/"',
  VUE_APP_DEVICE_MANAGEMENT_API: '"http://52.141.38.214:8002/api/"',
  VUE_APP_DEVICE_CONTROL_API: '"http://52.141.38.214:8003/api/"',
  VUE_APP_DEVICE_REPORT: '"http://52.141.38.214:8006/api/"',
  VUE_APP_STORAGE_API: '"http://52.141.38.214:8001/api/"',
  VUE_APP_NOTIFICATION_HUB_API: '"http://52.141.38.214:8005/api/"',
  VUE_APP_DEVICE_PRINT_MANAGEMENT_API: '"http://52.141.38.214:8004/api/"',
  VUE_API_URL: '"https://conduit.productionready.io/api"'
})
