import React,{useContext} from 'react'
import { UserContext, ChannelContext } from '../../App'

function ComponentE() {

    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);
  return (
    <div>
        My Name is {user} and work as a {channel};
    </div>
  )
}

export default ComponentE