import React, { useContext, useRef,useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { context } from './premier';


function Modifier() {
  let naviguer=useNavigate();
  const parametre=useParams();
  let user={"nom":"rien","prenom":"rien"}
  let ref1=useRef();
  let ref2=useRef();


    let ref3=useRef();
    let ref4=useRef();
    let [succes,setSucces]=useState(false)
  
  
  
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
  let context1=useContext(context);
  function envoyer(e)
  {
  e.preventDefault();
  if(valider())
  {
    user.nom=ref1.current.value;
  user.prenom=ref2.current.value;
  context1.modifier1(parametre.id,user)
  setSucces(()=>{
    return true
  })
  }
  else 
  {
  setSucces(()=>{
    return false
  })
  }

  }
  return (
    <div className='b w-[100%] h-[80%]'>
      <h1 className='font-bold text-[25px] text-center'>Modifier l'utilisateur {parametre.id}</h1>
     <form action="" className='flex flex-wrap gap-3 justify-center'>
     {succes==true?<div className='bg-green-300 border-[1px] border-green-700 text-green-700 w-[80%] h-[80px] rounded-[10px] flex justify-center items-center'>Modification avec succes</div>:""}
      <div className='w-[100%] flex flex-col items-center'>
        <label htmlFor="nom" className='w-[80%]'>Nom:</label>
        <input type="text" id='nom' className='border h-[40px] w-[80%] rounded-[10px] pl-2' ref={ref1} />
      </div>
      <div className='w-full flex justify-center '>
      <div className='text-red-500 w-[80%]' ref={ref3}></div>
      </div>
      <div className='w-[100%] flex flex-col items-center'>
      <label htmlFor="prenom" className='w-[80%]'>Prénom:</label>
      <input type="text" id='prenom' className='border h-[40px] w-[80%] rounded-[10px] pl-2' ref={ref2} />
      </div>
      <div className='w-full flex justify-center '>
      <div className='text-red-500 w-[80%]' ref={ref4}></div>
      </div>
      <div className='w-[100%] flex justify-center flex-wrap gap-2.5'>
      <input type="submit" value="Envoi" className='text-white bg-blue-500 h-[40px] rounded-[10px] w-[80%] hover:bg-blue-300 cursor-pointer' onClick={envoyer} />
      <input type="submit" value="Retour" className='text-white bg-blue-500 h-[40px] rounded-[10px] w-[80%] hover:bg-blue-300 cursor-pointer' onClick={(e)=>{e.preventDefault(); naviguer("/");}} />
      </div>
     </form>
    </div>
  )
}

export default Modifier