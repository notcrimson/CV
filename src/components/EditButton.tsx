import React, { useState } from 'react'

const EditButton = ({ edit, onClick }: { edit: boolean, onClick: () => void }) => {

  return (
    <div>
      <button className="button" onClick={onClick} disabled={edit}>Edit</button>
    </div>
  )
}

export default EditButton