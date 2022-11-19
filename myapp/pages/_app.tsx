import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'
import Layout from '../src/components/commons/layout'


function MyApp({ Component, pageProps } : AppProps) {

  const client = new ApolloClient({
    uri: "http://backend08.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} /> 
        {/* Layout의 children */}
      </Layout>
    </ApolloProvider>
  )
}

export default MyApp;