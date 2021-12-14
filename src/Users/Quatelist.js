import React from 'react'

import Card from '../UI/Card'
import classes from './QuateList.module.css'
const Userlist = (prpos) => {
    return (
        <div>
        <Card className={classes.users}>
            <ul>
                {prpos.users.map(user =>
                <li key ={user.id}>
                    {user.quate} (by {user.name})
                   
                </li>
                
                )}
               
            </ul>
        </Card>
        </div>
    )
}

export default Userlist
