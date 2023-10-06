import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'

import testPageResource from '../resources/test-page'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - Principal Directives Representative</title>
          <meta
            property="og:title"
            content="test-page - Principal Directives Representative"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_mwxe0l) => (
            <>
              <h1>{context_mwxe0l?.Name}</h1>
            </>
          )}
          initialData={props.contextMwxe0lProp}
          persistDataDuringLoading={true}
          key={props?.contextMwxe0lProp?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  try {
    const contextMwxe0lProp = await testPageResource({
      ...context?.params,
    })
    return {
      props: {
        contextMwxe0lProp: contextMwxe0lProp?.data?.[0],
      },
    }
  } catch (errro) {
    return {
      notFound: true,
    }
  }
}
