import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'


function Button1({title , handleAction}) {
  return (
    <div>
      
      <Button type="primary" htmlType="submit" onClick={handleAction}  >{title}</Button><br/><br/>
      <p1 className='login1'>login<Link to='/login'>  click </Link></p1>&nbsp; &nbsp;
      <p1 className='login1'>register <Link to='/register'>  click</Link></p1>
      
      
    </div>
  )
}

export default Button1
