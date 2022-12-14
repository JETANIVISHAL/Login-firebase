import { Button } from 'antd'
import React from 'react'


function Button1({title , handleAction}) {
  return (
    <div>
      
      <Button type="primary" htmlType="submit" onClick={handleAction}  >{title}</Button>
      
    </div>
  )
}

export default Button1
