import React from 'react'

const SubmitButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <div>
      <button onClick={onClick}>Submit</button>
    </div>
  )
}

export default SubmitButton