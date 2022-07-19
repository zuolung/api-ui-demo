import React from "react";
import { createRoot } from "react-dom/client";
import { collectionListAction } from "./action/personal";
import { collectionList } from "./action/types/personal";

function App() {
  const [data, setData] = React.useState<collectionList["response"]["data"]>(
    []
  );
  const goApi = () => {
    if (process.env["NODE_ENV"] === "development") {
      window.open("http://localhost:7878");
    } else {
      window.open("/api/index.html");
    }
  };

  const fetchList = async () => {
    if (process.env["NODE_ENV"] !== "development") {
      alert("暂无在线mock数据");
      return;
    }
    const res = await collectionListAction({
      userId: "324234",
      pageSize: 20,
      offset: 2,
    });

    console.info(res);

    setData(res.data);
  };

  return (
    <div>
      <h1>api-ui-demo</h1>
      <p>api文档代码和业务代码一起打包</p>
      <a style={{ color: "blue" }} onClick={goApi}>
        查看接口文档 地址
      </a>
      <a href="https://github.com/zuolung/api-ui-demo">查看github代码</a>
      <p>mock服务默认端口10099，文档服务7878会根据路径mock做代理</p>
      <p>统一路径1：http://localhost:10099</p>
      <p>统一路径2：http://localhost:7878/mock</p>
      <p>
        可以通过proxy代理，或者request请求拦截，把最后的请求代理到这两个路径
      </p>
      <a style={{ color: "blue" }} onClick={fetchList}>
        点击请求/z/personal/1.0/collection/list的数据
      </a>

      <div style={{ paddingTop: 30 }}>数据： {JSON.stringify(data)}</div>
    </div>
  );
}

const dom = document.getElementById("root");

if (dom) {
  const root = createRoot(dom);

  root.render(<App />);
}
