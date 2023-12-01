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

const Card = ({ feilds }: FeildProps) => {


  const [edit, setEdit] = useState<Boolean>(true)
  const [inputs, setInputs] = useState({});

  const editEnabled = () => setEdit(prev => true)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
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
        {
          !edit
            ? Object.entries(inputs).map(([name, value], i) => (
              <div key={i}>
                <label>{name}</label>
                <p>{value}</p>
              </div>
            ))
            :
            feilds.map(field => (
              <div key={field.name}>
                <Feild name={field.name} type={field.type} edit={edit} handleChange={handleChange} />
              </div>))}
        <div className='flex-row spacing'>
          <SubmitButton onClick={submitForm} />
          <EditButton edit={edit} onClick={editEnabled} />
        </div>
      </div>
    </>
  )
}

export default Card