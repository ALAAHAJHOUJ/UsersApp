import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { context } from './premier';

function Pro() {
  let naviguer=useNavigate();
  let context1=useContext(context)

  useEffect(()=>{
  console.log(context1)
  },[])

  function supprimer2(e)
  {
  context1.supprimer(e.target.id)
  }

  function Utilisateurs()
  {
  let liste=context1.list.map((ele,key)=>{
    let couleur;
    couleur=key%2==0?"bg-gray-300":"white";
    return <div key={key} className={"w-[100%] flex flex-wrap "+couleur}>
      <div className='min-[0px]:w-[100%] min-[300px]:w-[50%] min-[600px]:w-[25%] h-[150px]  font-medium flex items-center pl-1.5'>{key}</div>
      <div className='min-[0px]:w-[100%] min-[300px]:w-[50%] min-[600px]:w-[25%] h-[150px] font-medium  flex items-center'>{ele.nom}</div>
      <div className='min-[0px]:w-[100%] min-[300px]:w-[50%] min-[600px]:w-[25%] h-[150px] font-medium   flex items-center'>{ele.prenom}</div>
      <div className='min-[0px]:w-[100%] min-[300px]:w-[50%] min-[600px]:w-[25%] h-[150px] flex items-center min-[0px]:flex-col min-[0px]:items-start min-[0px]:justify-center min-[0px]:gap-[10px] min-[300px]:flex-col min-[300px]:items-start min-[300px]:justify-center min-[300px]:gap-[10px] min-[600px]:flex-row min-[600px]:justify-start min-[600px]:items-center min-[600px]:gap-[10px]  '>
        <button className='rounded-[10px] bg-red-500 text-white w-[80px] h-[40px] hover:bg-red-300 cursor-pointer ' onClick={supprimer2} id={key}>Supprimer</button>
        <button className='rounded-[10px] bg-blue-500 text-white w-[80px] h-[40px]  hover:bg-blue-300 cursor-pointer ' onClick={()=>{naviguer("/modifier/"+key)}}>Modifier</button>
      </div>
    </div>
  })

  return liste;
  }
  return (
    <div className=' w-[80%] h-[100%]'>
      <div className=' h-[100px] bg-gray-400 flex rounded-[10px] overflow-hidden'>
        <div onClick={()=>{naviguer("/ajouter")}} className=' w-[100px] h-[100%]  hover:bg-gray-200 flex justify-center items-center cursor-pointer text-white'>Ajouter</div>
      </div>
      <div className='p-2 flex flex-wrap'>
        <div className='min-[0px]:w-[100%] min-[300px]:w-[50%] min-[600px]:w-[25%] font-bold min-[0px]:justify-center min-[300px]:justify-start min-[600px]:justify-start flex '>#ID</div>
        <div className='min-[0px]:w-[100%] min-[300px]:w-[50%] min-[600px]:w-[25%] font-bold min-[0px]:justify-center min-[300px]:justify-start min-[600px]:justify-start flex '>Nom</div>
        <div className='min-[0px]:w-[100%] min-[300px]:w-[50%] min-[600px]:w-[25%] font-bold min-[0px]:justify-center min-[300px]:justify-start min-[600px]:justify-start flex '>Pays</div>
        <div className='min-[0px]:w-[100%] min-[300px]:w-[50%] min-[600px]:w-[25%] font-bold min-[0px]:justify-center min-[300px]:justify-start min-[600px]:justify-start flex '>Opérations</div>
      </div>
      <div className=' w-[100%] flex flex-col'>
      {Utilisateurs()}
      </div>
    </div>
  )
}

export default Pro