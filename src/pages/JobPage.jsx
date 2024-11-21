import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';

const JobPage = () => {
  const {id} =useParams();
  const [job ,setJob] =useState(null);
const [loading , setLoading]= useState(true)
useEffect(()=>{
const  fetchJob = async() => {

  try {
    const res = await fetch('/api/job/$id');
    const data = await res.json();
    setJob(data);
  } catch (e) {
    console.log("error fetch data", e);
  } finally {
    setLoading(false);
  }
}
fetchJob();


}, [])
  
return <div>Jobpage</div>
}



export default JobPage;
