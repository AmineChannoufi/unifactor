import React,{useState} from 'react'
import {useHistory,useParams,Link} from 'react-router-dom'
import "./AddEdit.css"
import axios from 'axios'
import {toast} from "react-toastify"
function AddEdiT() {
  return (
    <div style={{marginTop:"100px"}}>
        <form style={{
            marign:"auto",
            padding:"15px",
            maxWidth:"400px",
            alignContent:"center"
    }}
   // onSubmit={handleSubmit}
    >
        <label htmlFor="name">Name</label>
        <input 
        type="text"
        id="name"
        name="name"
        placeholder="your Name"></input>
    </form>

        

    </div>
  )
}

export default AddEdiT