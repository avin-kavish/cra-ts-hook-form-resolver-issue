import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers'
import React from 'react'
import {object} from 'yup'

const schema = object().shape({

})

function App() {
  const {handleSubmit} = useForm({ resolver: yupResolver(schema) })

  const onSubmit = data => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div></div>
    </form>
  )
}

export default App;
