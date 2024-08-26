import { PropsWithChildren, useEffect } from 'react'
import { useLaunch } from '@tarojs/taro'
import { IMSDK } from './utils/imCommon'

import './app.scss'

function App({ children }: PropsWithChildren<any>) {
  useLaunch(() => {
    console.log('App launched.')
  })

  const loginCheck = async () => {
    try {
      await IMSDK.login({
        userID: "",
        token: "",
        apiAddr: "",
        wsAddr: "",
        platformID: 5,
      });
    } catch (error) {
      console.log('登录IM失败!', error);
    }
  }

  useEffect(() => {
    loginCheck()
  }, [])

  // children 是将要会渲染的页面
  return children
}



export default App
