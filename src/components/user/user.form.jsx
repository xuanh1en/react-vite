import { Input,Button, notification, Modal } from 'antd';
import { useState } from 'react';
import axios from 'axios';
import { createUserAPI } from '../../services/api.service';

const UserForm=(props)=>{
    const [fullName,setFullName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [phone,setPhone]=useState("")

    const [isModalOpen,setIsModalOpen]=useState(true)

    const {loadUser}=props
    const handleSubmitBtn=async ()=>{
        const res = await createUserAPI(fullName,email,password,phone)
        if(res.data){
            notification.success({
                message:"create user",
                description:"Tạo user thành công"
            })
            resetAndCloseModal() 
            await loadUser()
        }else{
            notification.error({
                message:"Error creating user",
                description: JSON.stringify(res.message)
            })
        }
    }

    const resetAndCloseModal=()=>{
        setIsModalOpen(false),
        setFullName("")
        setEmail("")
        setPassword("")
        setPhone("")
    }
    
    return(
        <div className='user-form' style={{margin:"20px 0"}}>
            <div style={{display:"flex",gap:"10px",flexDirection:"column"}}>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <h3>Table users</h3>
                    <Button type='primary'
                        onClick={()=>setIsModalOpen(true)}    
                    >Create user</Button>
                </div>
            </div>
            <Modal 
                maskClosable={false}
                title="Create User" 
                open={isModalOpen} 
                onOk={()=>{handleSubmitBtn()}} 
                onCancel={()=>{resetAndCloseModal()}}
                okText={"CREATE"}
            > 
                <div style={{display:"flex",gap:"15px",flexDirection:"column"}}>
                    <div>
                        <span>Full Name</span>
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
                        <span>Password</span>
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
                </div>
            </Modal> 
        </div>
    )
}

export default UserForm