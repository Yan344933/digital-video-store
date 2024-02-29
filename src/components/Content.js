import React from 'react'

const Content = (props) => {

  const content = props.content;

  return (
    <div className='content'>
      <img src={content.img} key={content.id} alt={content.img} />
    </div>
  )
}

export default Content