import { addDoc, collection } from 'firebase/firestore';
import React from 'react'
import { useState } from 'react'

import {db} from '../firebase';

const Todo = () => {
    const [todo , setTodo] = useState("") ; 
    const addTodo= async (e)  =>  {
       e.preventDefault();
        
        try{

            const docRef = await addDoc(collection(db,"todo"),{
                todo:todo
            })
            console.log("the document id is ",docRef.id);

        }catch(e){
            console.error("the firebase error is ",e)
        }


    }



  return (
    <div>
     <div>
        <input type="text"  placeholder='What is in your mind ? ' onChange={(e)=>setTodo(e.target.value)} />
        </div>

        <div>
            <button type='submit' onClick={addTodo} >submit</button>
        </div>
    </div>
  )
}

export default Todo
