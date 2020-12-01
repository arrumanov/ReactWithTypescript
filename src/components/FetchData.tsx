import * as React from 'react'
import { observer } from 'mobx-react'

type Props = {
  workflowId: string
}

export const FetchData: React.FC = observer(() => {
  return (
    // eslint-disable-next-line react/jsx-fragments
    <React.Fragment>
      <h1 id="tabelLabel">Weather forecast</h1>
      <p>
        This component demonstrates fetching data from the server and working with URL parameters.
      </p>
    </React.Fragment>
  )
})
