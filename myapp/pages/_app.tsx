import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'
import Layout from '../src/components/commons/layout'
// import { Global } from '@emotion/react'
// import {globalStyles} from '../src/commons/styles/globalstyle'


function MyApp({ Component, pageProps } : AppProps) {

  const client = new ApolloClient({
    uri: "http://backend08.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      <Layout>
        {/* <Global styles={globalStyles}> */}
          <Component {...pageProps} /> 
        {/* </Global> */}
        {/* Layout의 children */}
      </Layout>
    </ApolloProvider>
  )
}

export default MyApp;