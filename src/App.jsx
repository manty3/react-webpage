import React from 'react'
import {
  Route,
   createBrowserRouter,
    createRoutesFromElements,
    RouterProvider
  } from 'react-router-dom'
  import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import JobsPage from './pages/jobsPage'
import NotFoundPage from './pages/NotFoundPage'
import JobPage from './pages/JobPage'
import AddJob from './pages/AddJob'



const App = () => {

  const addJob = async (newJob) => {
const res = await fetch ('/api/jobs', {
method:'POST',
headers:{

  'content-type': 'application/json',
},
body: JSON.stringify(newJob),

})
  return;
  }
  const router = createBrowserRouter(
    createRoutesFromElements (
      <Route path='/' element = {<MainLayout/>}>
        <Route index  element = {<HomePage/>} />
        <Route path='/jobs' element = {<JobsPage/>}/>
        <Route path='/add-job' element = {<AddJob/>} addJobSubmit={addJob}/>
        <Route path='/jobs/:id' element = {<JobPage/>}  />
        <Route path='*' element = {<NotFoundPage/>}/>
        
        </Route>
     
    )
  )
  return <RouterProvider router={router}/>
}


export default App
