import React from 'react'


const Feild = ({ name, type, edit, handleChange }: { name: string, type: string, edit: Boolean, handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void }) => {
  return (
    <div>
      <label>{name}</label>
      {
        !edit
          ? <p>this</p>
          : <input name={name} type={type} onChange={handleChange} />}

    </div>
  )
}

export default Feild