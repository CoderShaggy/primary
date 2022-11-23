import React, {useState} from "react";
import './Table.css'

const LoginForm =() => {

    const adminUser ={
        firstname: "",
        lastname:"",
        state:"",
        city:"",
        url:"",
    } 
  
    const [error,setError] = useState("");  
    const [details, setDeatails] = useState (adminUser);


    const submitHandler = e => {
        e.preventDefault();
        console.log(details);
    }

    const buttonClicked = () => {
        console.log('', details)
    }

    return (
        <>
            <form onSubmit={submitHandler }>
                <div className="form-inner">
                    <h2>Login</h2>
                    {(error !=="") ? ( <div className="error">{error}</div>):""}
                    <div className="form-group">
                        <label htmlFor="firstname">First Name:</label>
                        <input type="text" name="name" id="name" onChange={e => setDeatails({...details, name: e.target.value})} value={details.name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname">Last Name:</label>
                        <input type="text" name="lastname" id="lastname" onChange={e => setDeatails({...details, lastname: e.target.value})} value={details.lastname} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State:</label>
                        <input type="text" name="state" id="state" onChange={e => setDeatails({...details, state: e.target.value})} value={details.state} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City:</label>
                        <input type="text" name="city" id="city" onChange={e => setDeatails({...details, city: e.target.value})} value={details.city} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="url">Url:</label>
                        <input type="text" name="url" id="url" onChange={e => setDeatails({...details, url: e.target.value})} value={details.url} />
                    </div>

                    <input type="submit" value="LOGIN" />        
                </div>
            </form>
            <button onClick={buttonClicked}>hllo</button>
            </>
    )
}

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
  
  export default LoginForm;