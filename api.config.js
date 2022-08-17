const path = require('path')

module.exports = {
  buildPath: path.join(__dirname, './build/api'),
  mock: {
    port: 10099,
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
    requestImport: `import { createFetch } from "../../../request"`,
    dirPath: '../actions',
    createDefaultModel: function createDefaultModel({
      requestImport = 'import { createFetch } from "../../../request"',
      requestFnName = 'createFetch',
      fileName = 'a',
      data = {},
      requestSuffix = 'Action',
    }) {
      const packages = []
      let requestActionsStr = ''
      // 根据data拼接多个业务请求方法
      for (const key in data) {
        const item = data[key]
        if (key !== 'Record<string,any>' && item.url) {
          packages.push(key)
          requestActionsStr += `
          // ${item.description}
          export const ${key}${requestSuffix} = ${requestFnName}<${key}['request'], ${key}['response']>('${item.url}', '${item.method}');
          `
        }
      }

      const packagesStr = packages.join(',')

      return `
        // @ts-nocheck
        ${requestImport}
        import type { ${packagesStr} } from '../types/${fileName}';
    
        ${requestActionsStr}
        `
    },
  },
  swagger: {
    modules: ['应用'],
  },
}
