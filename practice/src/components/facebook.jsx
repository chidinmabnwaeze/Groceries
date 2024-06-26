import React, { useState } from 'react'

const facebook = () => {
    const [userTable, setUserTable] = useState('')

    const details = [
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false  
        }
    ]
  return (
    <div className="facebook"> 
<table>
    <tr>
        <th> User Id</th>   
        <th> Id</th> 
        <th> Title</th> 
        <th> Completed</th>                                                                                                                                                                                                                                                                                                                                                                                                                                                      
    </tr>


    <tr className='table-body'>
<td></td>
    </tr>
</table>
    </div>
  )
}

export default facebook