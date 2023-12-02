import React from 'react'

const SubmitButton = ({ edit, onClick }: { edit: boolean, onClick: () => void }) => {
  return (
    <div>
      <button className='button' onClick={onClick} disabled={!edit}>Submit</button>
    </div>
  )
}

export default SubmitButton