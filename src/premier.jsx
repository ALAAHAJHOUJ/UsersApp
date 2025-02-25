import React, { createContext, useState } from 'react'
import App from './App'

export let context=createContext(null)
function Premier() {
  const [List,setList]=useState([{"nom":"hajhouj","prenom":"3alae"},{"nom":"khalidi","prenom":"boutayna"}]);

  function ajouter(user)
  {
        setList((prev)=>{
        return [...prev,user]
        })
  }



  function supprimer1(id)
  {
  let inter=[];
  let j=0;
  for(let i=0;i<List.length;i++)
  {
  if(i!=id)
  {
  inter[j]=List[i];
  j++;
  }
  }
  setList(()=>{
    return inter;
  })
  }



  function modifier(id,user)
  {
  let inter=[];
  for(let i=0;i<List.length;i++)
    {
    if(i!=id)
      inter[i]=List[i]
    else 
      inter[i]=user;
    }
    setList(()=>{
      return inter;
    })
  }
  return (
    <context.Provider value={{"list":List,"ajouter":(user)=>{ajouter(user)},"supprimer":(id)=>{supprimer1(id)},"modifier1":(id,user)=>{modifier(id,user)}}}>
            <App></App>
    </context.Provider>
  )
}

export default Premier