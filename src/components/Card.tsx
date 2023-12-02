import React, { Component, useState } from 'react'
import SubmitButton from './SubmitButton'
import EditButton from './EditButton'
import { Feild } from './builderComponents'


type FeildProps = {
  feilds: {
    name: string;
    type: string;
  }[]
}

type inp = {
  name: string;
  value: React.ReactNode;
}

type InputValues = {
  [key: string]: string;
}

// Вот так тоже писать можно, по сути одно и то же, у нас на проекте так пишут
// interface InputValues {
//   [key: string]: string; 
// }

const Card = ({ feilds }: FeildProps) => {


  const [edit, setEdit] = useState<boolean>(true)
  const [inputs, setInputs] = useState<InputValues>({});

  const editEnabled = () => setEdit(prev => true)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    console.log(e.target.name);
    setInputs(prev => {
      return { ...prev, [name]: value }
    })
  }

  const submitForm = () => {
    setEdit(prev => false)
  }

  return (
    <>
      <div className="box-form-template">
        <div className='card'>

          {
            feilds.map(field => (
              <div key={field.name} className='flex-row feild'>
                <label>{field.name}</label>
                {!edit
                  ? <p>{inputs[field.name] || "Enter " + field.name}</p>
                  : <Feild name={field.name} type={field.type} value={inputs[field.name] ?? ""} handleChange={handleChange} />
                }
              </div>
            ))}
          <div className='flex-row spacing button-flex'>
            <SubmitButton edit={edit} onClick={submitForm} />
            <EditButton edit={edit} onClick={editEnabled} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Card