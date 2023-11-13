/* eslint-disable @typescript-eslint/no-use-before-define */
import type { Iconfig } from 'api-see'
import 'dotenv/config'

const config: Iconfig = {
  path: 'src/api',
  swagger: {
    dir: 'src/api',
    services: [
      {
        serviceName: 'ojbk',
        url: 'http://121.43.101.170:30002/swagger/docs/v1/UFX.SCM.Cloud.LowCodeCenter',
      },
    ]
  },
  action: {
    createDefaultModel ({
      data,
      fileName,
    }) {
      const IMPORT_TYPES: string[] = []
      let SERVICES = ''
      let code = `
    /* eslint-disable space-before-function-paren */
    import { zApi } from '@dian/app-utils'
    IMPORT_TYPES
    
    SERVICES
      `
      for (const key in data) {
        const item = data[key]

        if (key.includes('Record<string') || !item.url || !item.method) continue
        IMPORT_TYPES.push(key)
        const method = item.method
        const description = item.description || '--'
        const url = `/${item.serviceName}${item.url}`
        let responseTT = ''
        if (item?.hasResponseData) {
          responseTT = `<${key}['response']['data']>`
        }
        let ifQueryReplace = ''
        let queryParams = ''
        if (item.hasRequestQuery) {
          ifQueryReplace = `.replace("${item.queryKey}", query)`
          queryParams = ',query:string'
        }

        SERVICES += `/** ${description} */ \n`
        SERVICES += `export async function ${key}Service (params${item.requestNull ? '?' :''}: ${key}['request'] ${queryParams}) {
          const data = await zApi.${method}${responseTT}('${url}'${ifQueryReplace}, ${item.method === 'get' ? '{ params }' : 'params'} )
          return data
        }\n\n`
      }

      code = code.replace(
        'IMPORT_TYPES',
        `import type { ${IMPORT_TYPES.join(
          ',',
        )} } from '../types/${fileName}'`,
      )
      code = code.replace('SERVICES', SERVICES)

      return code
    },
  },
}

export default config

