
import '../App.css';
import axios from 'axios';
import Home from './Home';
import { useState } from 'react';
import { Button } from '@mui/material';
function Login(){
  const [result,setResult]=useState(null);
  const[un,setUn]=useState(null);

    function handleForm(event) {
        event.preventDefault();
        const data = new FormData (event.currentTarget);
        setUn(data.get("un"));
        const pw = data.get("pw");
        console.log(un+" --- "+pw);
        axios.get('http://localhost:8081/check',{params:{
          un: data.get("un"),
          pw: data.get("pw")
        }}).then((response)=>{
          console.log(response.data)
          setResult(response.data)
          //console.log(result)
        })
      }
    if(result===null || result==='fail'){

      return (
        <div className="App">
            <form ></form><div>
              <div  className="App-login">
                <h>Login</h>
                <form  onSubmit={handleForm}>
                  Username: <input type="text" placeholder='username' name="un"/>
                  <br></br>
                  Password: <input type="password" placeholder='password' name="pw"/>
                  <br></br>
                  <br></br>
                  <Button variant="contained" type="submit" value="Login">login</Button>
                </form>
              </div>
            </div>
    
        </div>
      );
    }
    else{
      return (
        <div>
          <Home un={un} />
        </div>
      );
    }
}
export default Login;