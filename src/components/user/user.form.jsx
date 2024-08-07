import { Input,Button, notification } from 'antd';
import { useState } from 'react';
import axios from 'axios';
import { createUserAPI } from '../../services/api.service';
const UserForm=()=>{
    const [fullName,setFullName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [phone,setPhone]=useState("")

    const handleClickBtn=async ()=>{
        const res = await createUserAPI(fullName,email,password,phone)
        if(res.data){
            notification.success({
                message:"create user",
                description:"Tạo user thành công"
            })
        }else{
            notification.error({
                message:"Error creating user",
                description: JSON.stringify(res.message)
            })
        }
    }
    return(
        <div className='user-form' style={{margin:"20px 0"}}>
            <div style={{display:"flex",gap:"10px",flexDirection:"column"}}>
                <div>
                    <span>FullName</span>
                    <Input 
                        value={fullName}
                        onChange={(e)=>{setFullName(e.target.value)}}
                     />
                </div>
                <div>
                    <span>Email</span>
                    <Input
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                    />
                </div>
                <div>
                    <span>PassWord</span>
                    <Input.Password 
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                    />
                </div>
                <div>
                    <span>Phone number</span>
                    <Input
                        value={phone}
                        onChange={(e)=>{setPhone(e.target.value)}}
                    />
                </div>
                <div>
                    <Button type='primary'
                        onClick={handleClickBtn}    
                    >Create user</Button>
                </div>
            </div>
        </div>
    )
}

export default UserForm