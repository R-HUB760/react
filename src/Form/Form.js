import React from 'react'

import { useFormik } from 'formik';
import * as yup from 'yup';


function Form() {

  const formick = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    validationSchema: yup.object({
      name: yup.string().required('You must be fill out')
    }),

    onSubmit: (values, {resetForm}) =>  {
      alert(JSON.stringify(values, null, 2));
      resetForm({
        values: ''
      })
    }
  })

  return (
    <>
      <div className='row mt-5 align-items-center justify-content-center bg-dark' id='signup'>
        <div className='col-md-8 col-lg-5 p-5 m-5'>
          <div> 
            <h2 className='mb-3'>Sign Up Here!</h2>
          </div>
          <form onSubmit={formick.handleSubmit} action=''>
            <label>Name</label> <br />
            <input
              type='text'
              onChange={formick.handleChange}
              name='name' id='name'
              value={formick.values.name} 
              class="form-control" 
              required />

            <label>Email</label> <br />
            <input
              type='email'
              onChange={formick.handleChange}
              name='email' id='email'
              value={formick.values.email}
              class="form-control"
              required />

            <label>Password</label> <br />
            <input
              type='password'
              onChange={formick.handleChange}
              name='password' id='password'
              value={formick.values.password} 
              class="form-control" 
              required />

              <button type='submit' className='mt-2 px-4' disabled={formick.handleChange ==="" ? true : false}>Submit</button>
          </form>

        </div>
      </div>

    </>
  )
}

export default Form