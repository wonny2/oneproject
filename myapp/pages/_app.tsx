// import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../src/components/commons/layout'
import { Global } from '@emotion/react'
import { globalStyles } from '../src/commons/styles/globalstyle'
import ChannelTalk from '../src/components/commons/channelTalk'
import { RecoilRoot } from 'recoil'
import ApolloSetting from '../src/components/commons/apollo'


function MyApp({ Component, pageProps } : AppProps) {

  return (
    <RecoilRoot>
      <ApolloSetting>
        <Global styles={globalStyles} />
          <Layout>
            {/* <ChannelTalk /> */}
              <Component {...pageProps} />
          </Layout>
      </ApolloSetting>
    </RecoilRoot>
  )
}

export default MyApp;

// 
// <ApolloProvider client={client}>가 있어야 useQuery, useMutation 이런게 가능한 것이다!
// 그리고 global,layout,component이런 애들이 ApolloProvider의 children으로 가게 되는 것.
