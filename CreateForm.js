import React, {useState} from 'react'

export default function CreateForm (){
    const[userName,UpdateUserName] = useState('xyz');
    const[email,updateEmail] = useState('abc@gmail.com');
    const[phoneNumber,updatePhoneNumber] = useState('9990')

    return(
        <>
         <p>Username {userName}</p>
         <input id="myInputId1" onChange={(event)=>{
            let changeUserName = event.target.value;
            UpdateUserName(changeUserName);
         }}>
         </input>

         <p>Email {email}</p>
         <input id="myInputId2" onChange = {(event)=>{
            let changeEmailId = event.target.value;
            updateEmail(changeEmailId);
         }}>
         </input>

         <p>Phone Number {phoneNumber}</p>
         <input id="myInputId3" onChange={(event)=>{
            let changePhoneNumber = event.target.value;
            updatePhoneNumber(changePhoneNumber);
         }}>  
         </input>   

         <button type="submit" onClick={()=>{
            alert(`${userName} ${email} ${phoneNumber}`)
         }}>Submit</button>
        </>
    )
}





