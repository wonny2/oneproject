import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ApolloClient, ApolloProvider, InMemoryCache, ApolloLink} from '@apollo/client'
import {createUploadLink} from 'apollo-upload-client'
import Layout from '../src/components/commons/layout'



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