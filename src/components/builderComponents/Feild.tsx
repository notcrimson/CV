import React from 'react'


const Feild = ({ name, type, value, handleChange }: { name: string, type: string, value: string, handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void }) => {
  return (
    <div>
      <input name={name} type={type} onChange={handleChange} value={value} />
    </div>
  )
}

export default Feild