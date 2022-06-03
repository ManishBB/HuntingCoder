import React from 'react'

const Hello = () => {
  return (
    <>
        <style jsx global>
            {`
                .mySpan{
                    color : red;
                }
            `}
        </style>
        <div className='mySpan'>Hello</div>
    </>
  )
}

export default Hello