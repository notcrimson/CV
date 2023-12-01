import React, { useState } from 'react'

const EditButton = ({ edit, onClick }: { edit: Boolean, onClick: () => void }) => {

  return (
    <div>
      <button onClick={onClick}>Edit</button>
    </div>
  )
}

export default EditButton