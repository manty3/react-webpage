import React from 'react'
import clipLoader from 'react-spinners/ClipLoader'

const override={
display:'block',
margin:'100px auto'

};

const Spinner = ({loading}) => {
  return (
   <clipLoader 
   color='#4338ca'
   loading={loading}
   cssOverride={override}
   size={150}
    />
  )
}

export default Spinner
