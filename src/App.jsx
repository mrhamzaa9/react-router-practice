import { useState } from 'react'
import Layout from './layouts/Layout.jsx'
import NoHeaderLayout from './layouts/NoHeaderLayout.jsx'


function App() {
  const [showHeader, setShowHeader] = useState(false)

  return (
    <>
      <button onClick={() => setShowHeader((prev) => !prev)}>
        toggle Header
      </button>
      {
        showHeader ?
          <div>
            <Layout />
          </div> :
          <div>
            <NoHeaderLayout />
          </div>
      }

    </>
  )
}

export default App

