
export default function Loginform() {
  return (
    <div >     
<form>
  <label for="Uname">User Name:</label><br/>
  <input data-cy = 'Uname'  type="text"  style={{borderColor: 'black', borderWidth: 'medium'}}
    id="Uname" name="Uname" /><br/>
  <label for="Password">Password:</label><br/>
  <input data-cy = 'Password'  type="text"  style={{borderColor: 'black', borderWidth: 'medium'}} id="Password" name="Password"/><br/><br/>
  <input onClick = {(value)=> {

document.getElementById('Result').innerHTML= ""
var Uname = document.getElementById('Uname').value;
var Password = document.getElementById('Password').value;
if (Uname!=="" && Password!==""){
    if(Uname==="Hamza" && Password==="123"){
        document.getElementById('Result').innerHTML= "Success!!!"
        document.getElementById('Result').style["color"] ="green" 
    }
    else{

        document.getElementById('Result').innerHTML= "Fail!!!"
        document.getElementById('Result').style["color"] ="red" 
    }

}

  }

} data-cy = 'SubmitButton' type="button" value="Submit" style={{backgroundColor: 'Grey'}}     /><br/><br/>
<label data-cy = 'ResultLabel' for="Result" id="ResultLabel">Form submission result is:  </label>
<label data-cy = 'Result' for="Result" id="Result"></label><br/>

  </form>
</div> 

  )
}
