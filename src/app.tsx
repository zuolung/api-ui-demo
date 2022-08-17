// @ts-nocheck
import React from 'react'
import { render } from 'react-dom'
import { userInfoAction } from './actions/api/actions/common'
import { collectionList } from './actions/types/personal'
import { ApiUi } from 'api-see'
import apiData from '../.cache/api-ui-data.json'
import 'api-see/ui/app.less'

function App() {
  const [data, setData] = React.useState<collectionList['response']['data']>([])
  const goApi = () => {
    if (process.env['NODE_ENV'] === 'development') {
      window.open('http://localhost:7878')
    } else {
      window.open('/api/index.html')
    }
  }

  const fetchList = async () => {
    if (process.env['NODE_ENV'] !== 'development') {
      alert('暂无在线mock数据')
      return
    }
    const res = await userInfoAction({
      userId: '324234',
      pageSize: 20,
      offset: 2,
    })

    console.info(res)

    setData(res.data)
  }

  return (
    <div>
      <h1>api-ui-demo</h1>
      <h2 style={{ color: 'blue' }} onClick={goApi}>
        (1) 单独启动的服务，点击查看接口文档 地址
      </h2>
      <a href="https://github.com/zuolung/api-ui-demo">查看github代码</a>
      <p>mock服务默认端口10099，文档服务7878会根据路径mock做代理</p>
      <p>统一路径1：http://localhost:10099</p>
      <p>统一路径2：http://localhost:7878/mock</p>
      <p>
        可以通过proxy代理，或者request请求拦截，把最后的请求代理到这两个路径
      </p>
      <a style={{ color: 'blue' }} onClick={fetchList}>
        点击请求/z/personal/1.0/collection/list的数据
      </a>

      <div style={{ paddingTop: 30 }}>
        请求到的数据结果数据： {JSON.stringify(data)}
      </div>

      <h2 style={{ color: 'blue' }}>(2)作为组件在页面里面引用</h2>
      <p>swagger和api中的接口在一起使用（前端和后端定义接口混合使用）</p>
      <ApiUi mockPort={10099} apiData={apiData} />
    </div>
  )
}

const dom = document.getElementById('root')

render(<App />, dom)
