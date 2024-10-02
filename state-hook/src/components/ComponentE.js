import React, {useContext} from 'react'
import ComponentF from './ComponentF'
import { UserContext, ChannelContext } from '../App'

function ComponentE() {

  const user = useContext(UserContext)
  const channel = useContext(ChannelContext)

  return (
    <div>
        {/* Simply use the context values as below */}
        {/* {user} - {channel} */}
      <ComponentF />
    </div>
  )
}

export default ComponentE
