import React from 'react'
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import Home from './Home';
import { useEffect } from 'react';

const login = () => {
    const [cokie,setcokie,removecokie]=useCookies();
    const [name,setname]=useState();
  
    function save(){
      setcokie("name",name,{ path: '/', maxAge: 3600 })
    }

    useEffect(()=>{
      if(cokie.name!==null){
        //window.location.href="/home";
      }
    },[])
  
    return (
      <div className='login'>
        <input type='text'
        placeholder='名前を入力' 
        onChange={(e)=>setname(e.target.value)}
        />
        <button onClick={save}>保存</button>
      </div>
    )
  }

export default login