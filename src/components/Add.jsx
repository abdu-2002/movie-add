import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Add = () => {

  const [movie, setMovie] = useState({
    movName:'',
    category:'',
    director:'',
    releaseYear:'',
    language:''
  })
  let fetchValue=(e)=>{
    // console.log(e)
    setMovie({...movie,[e.target.name]:e.target.value})     //... spread operator an
  }
  let sendData=()=>{
    alert('data submitted')
    console.log(movie)
  }
  return (
    
    <Box 
    component="form"
    sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
    noValidate
    autoComplete="off"
  >
    
    <TextField
     id="outlined-basic" 
    label="MovieName"
     variant="outlined"
     name='movName'                 //name individual ayit call cheyan vendi oroninm 
    // value={movie.movName}       //value browser il varan
    onChange={fetchValue}
     
     /><br />


    <TextField
     id="outlined-basic"
      label="Category"
       variant="outlined"
       name='category'                 //name individual ayit call cheyan vendi oroninm 
    value={movie.category}       //value browser il varan
    onChange={fetchValue}
    
        /><br />


    <TextField
     id="outlined-basic"
      label="Director"
       variant="outlined"
       name='director'                 //name individual ayit call cheyan vendi oroninm 
    value={movie.director}       //value browser il varan
    onChange={fetchValue}
    
        /><br />


    <TextField 
    id="outlined-basic"
     label="ReleaseYear"
      variant="outlined"
      name='releaseYear'                 //name individual ayit call cheyan vendi oroninm 
      value={movie.releaseYear}       //value browser il varan
      onChange={fetchValue}
      
       /><br />


    <TextField 
    id="outlined-basic" 
    label="Language"
     variant="outlined"
     name='language'                 //name individual ayit call cheyan vendi oroninm 
    value={movie.language}       //value browser il varan
    onChange={fetchValue}
    
      /><br />

    <Button variant="contained"onClick={sendData}>Submit</Button>
    
  </Box>
  )
}

export default Add