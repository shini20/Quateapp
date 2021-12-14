import React, {useState} from 'react'

import Card from '../UI/Card';
import Button from '../UI/Button'
import ErrorModal from '../UI/Errormodal'
import classes from './Adduser.module.css';
const Adduser = (props) => {

    const[enterQuate,setEnterQuate]= useState('');
    const[enterUsername,setEnterusername]= useState('');
    
    const [error,setError] = useState();

    const addUserHandiler = (e)=>{
        e.preventDefault();
        if(enterUsername.trim().length===0 || enterQuate.trim().length===0){
            setError({
                title:'Invalid Input !!',
                message: 'Write quate and name'
            })
            
            return;
        }
        
        props.onAdduser(enterQuate,enterUsername);
        setEnterQuate('');
        setEnterusername('');
    }

    const quateChangeHandiler =(e)=>{
        setEnterQuate(e.target.value)
    }

    const usernameChangeHandiler =(e)=>{
        setEnterusername(e.target.value);

    }

    

    const errorHandiler=()=>{
        setError(null)
    }
    return (
        <div>
            {error&&< ErrorModal 
            title = {error.title} 
            message ={error.message} 
            onConfirm={errorHandiler}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandiler}>
                    <label htmlFor="quate">Quate</label>
                    <input id ="quate" type="text"
                        value={enterQuate}
                        onChange={quateChangeHandiler}/>
                    <label htmlFor="name">Name</label>
                    <input id = "name" type="text"
                        value={enterUsername}
                        onChange={usernameChangeHandiler}/>
                    <Button type="submit">Submit</Button>
                </form>
            </Card>
        </div>
    )
}

export default Adduser
