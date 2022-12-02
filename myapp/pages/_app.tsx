// import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ApolloClient, ApolloProvider, InMemoryCache, ApolloLink} from '@apollo/client'
import {createUploadLink} from 'apollo-upload-client'
import Layout from '../src/components/commons/layout'
import { Global } from '@emotion/react'
import { globalStyles } from '../src/commons/styles/globalstyle'
import ChannelTalk from '../src/components/commons/channelTalk'

function MyApp({ Component, pageProps } : AppProps) {

  const uploadLink = createUploadLink({
    uri: "http://backend08.codebootcamp.co.kr/graphql"
  })  

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache()
  })



  return (
    <ApolloProvider client={client}>
      <Global styles={globalStyles} />
        <Layout>
          <ChannelTalk />
            <Component {...pageProps} />
        </Layout>
    </ApolloProvider>
  )
}

export default MyApp;