import React from 'react'
import {Helmet} from 'react-helmet'

export default function Metatags() {
    return (
        <div>
            <Helmet htmlAttributes={{
    lang: 'id',
  }}>
          <meta charSet="utf-8" name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
          <title>Sign Talk</title>
          <link rel="canonical" href="https://steady-empanada-75503f.netlify.app/" />
   
                
                {/* OpenGraph tags */}
                <meta property="og:url" content="https://steady-empanada-75503f.netlify.app"/> 
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Sign Talk" />
                <meta property="fb:app_id" content=''/> 
    
        </Helmet>
        </div>
    )
}
