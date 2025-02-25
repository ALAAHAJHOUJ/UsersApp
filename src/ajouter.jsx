import React, { useContext, useRef, useState } from 'react'
import { context } from './premier';
import { useNavigate } from 'react-router';

function Ajouter() {
  let naviguer=useNavigate();
  let context1=useContext(context);
  let ref1=useRef();
  let ref2=useRef();
  let ref3=useRef();
  let ref4=useRef();
  let [succes,setSucces]=useState(false)

  let obj={
    "nom":"rien",
    "prenom":"rien"
  };



  function valider()
  {
  let valide=true;
  const valeur1=ref1.current.value;
  const valeur2=ref2.current.value;
  if(valeur1.trim()=='')
  {
      ref3.current.innerHTML="ce Champs ne peut pas etre vide";
      valide=false;
  }

  else if(valeur1.length<5)
  {
      ref3.current.innerHTML="taille minimum est 5";
      valide=false;
  }
  else 
  {
      ref3.current.innerHTML=''
  }

  if(valeur2.trim()=='')
  {
  ref4.current.innerHTML="ce Champs ne peut pas etre vide";
  valide=false;
  }

  else if(valeur2.length<5)
  {
  ref4.current.innerHTML='taille minimum est 5';
  valide=false;
  }

  else 
  {
  ref4.current.innerHTML='';
  }

  return valide;


  }
  function envoyer(e)
  {
  e.preventDefault();
  if(valider())
  {
  obj.nom=ref1.current.value;
  obj.prenom=ref2.current.value;
  context1.ajouter(obj)
  console.log("envoi avec succes")
  setSucces(()=>{
    return true
  })
  }
  else 
  {
  console.log("erreur")
  setSucces(()=>{
    return false
  })
  }

  }

  let tester=(e)=>{
   console.log(e)
  }
  return (
    <div className=' w-[80%]'>
      <h1 className='font-bold text-[20px] text-center '>Ajouter Un Utilisateur</h1>
      <form action="" className='flex flex-col items-center gap-[20px]'>
        {succes==true?<div className='bg-green-300 border-[1px] border-green-700 text-green-700 w-[70%] h-[80px] rounded-[10px] flex justify-center items-center'>Ajout avec succes</div>:""}
        <div className='w-[70%] flex flex-col'>
        <label htmlFor="nom">Nom:</label>
        <input type="text" name="" id="nom" className='border-[1px] border-black w-[100%] h-[30px] rounded-[10px] pl-2.5' onKeyDown={tester} ref={ref1}/>
        <div className='text-red-500' ref={ref3}></div>
        </div>
        <div className='w-[70%] flex flex-col '>
        <label htmlFor="prenom">Prenom:</label>
        <input type="text" name="" id="prenom" className='border-[1px] border-black w-[100%] h-[30px] rounded-[10px] pl-2.5' onKeyDown={tester} ref={ref2}/>
        <div className='text-red-500' ref={ref4}></div>
        </div>
        <input type="submit" value="Envoi" className='bg-blue-500 text-white w-[70%] h-[30px] rounded-[10px] hover:bg-blue-300 cursor-pointer' onClick={envoyer} />
        <input type="submit" value="Retour" className='bg-blue-500 text-white w-[70%] h-[30px] rounded-[10px] hover:bg-blue-300 cursor-pointer' onClick={(e)=>{e.preventDefault();naviguer("/");}} />
      </form>
    </div>
  )
}

export default Ajouter