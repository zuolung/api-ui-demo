const path = require('path')

module.exports = {
  buildPath: path.join(__dirname, './build/api'),
  mock: {
    port: 10111,
    baseIntercept: (params) => {
      const { type, fieldName, originValue, url } = params
      if (originValue) return originValue

      if (type === 'string') {
        if (fieldName.includes('name') || fieldName.includes('Name'))
          return '@cname'
        if (fieldName.includes('code') || fieldName.includes('Code'))
          return '@word(4, 6)'
        if (
          fieldName.includes('intro') ||
          fieldName.includes('Intro') ||
          fieldName.includes('Long')
        ) {
          return '@cparagraph(1, 3)'
        }
        return '@ctitle'
      } else if (type === 'number') {
        if (fieldName.includes('Id') || fieldName.includes('id')) {
          return '@integer(99, 100000)'
        }

        return 1
      } else if (type === 'boolean') {
        if (fieldName === 'success') return true
        return Math.random() > 0.5 ? true : false
      }
    },
  },
  action: {
    requestImport: `import { createFetch } from "../request"`,
    dirPath: '../actions',
  },
  swagger: {
    modules: ['健康状况日报管理'],
  },
}
