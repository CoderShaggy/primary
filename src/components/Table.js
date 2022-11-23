import React from "react";
import './Table.css';

const Data = [
  {
    firstname: 'Haseem',
    lastname: 'Team Lead',
    state: 'United State of Pakistan',
    city :'Rawalpindi',
    url:'' ,
  },
   {
    firstname: 'Hassam',
    lastname: 'Div',
    state: 'United State of Pakistan',
    city : 'Top City',
    url :'',
  },
   {
    firstname: 'Mujtaba',
    lastname: 'Learner',
    state: 'United State of Pakistan',
    city :'Islamabad',
    url:'',
  },
    {
      firstname: 'Ahsan',
      lastname: 'Team Lead',
      state: 'United State of Pakistan',
      city :'Lahore',
      url:'',
  },
]

export const Table = () => {
    return(
        <div>
        <table>
           <tr>
          <th>Name</th>
          <th>Last Name</th>
          <th>State</th>
          <th>City</th>
          <th>Url</th>
        </tr>
          {
            Data.map((item)=>(
        <tr>
          <td>{item.name}</td>
          <td>{item.lastname}</td>
          <td>{item.state}</td>
          <td>{item.city}</td>
          <td>{item.url}</td>
        </tr>
            ))
          }
          </table>

        
        </div>
    )
}
export default Table;