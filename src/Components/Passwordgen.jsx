import React,{useState} from 'react'
import  Passwordser from './Passwordser';
let Passwordgen = () => {
   let [state, setState]= useState({
    Password : '',
    Length : 20,
    Symbols : false,
    Number : false,
    uppercase : false,
    lowercase: false
   });
   let UpdateInput=(event)=>{
   setState({
   ...state,
   [event.target.name]:event.target.value
   })
   };
   let Updatecheck=(event)=>{
    setState({
      ...state,
      [event.target.name]:event.target.checked
    })
   };
   let submit=(event)=>{
    event.preventDefault();
   let passwordObj= Passwordser.getpassword(state);
   let password= Passwordser.generatepassword(passwordObj, state.Length);
    setState({...state, Password:password});
   }
   
  return (
    <>
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card shadow-lg">
            <div className="card-header bg-danger">
              <p className="h4">Password Generator</p>
            </div>
            <div className="card-body bg-warning">
              <form onSubmit={submit}> 
                <div className="mb-2">
                  <div className="input-group">
                    <span className='input-group-text'>Password</span>
                     <input type="text" name="Password" id="" className='form-control' value={state.Password} onChange={UpdateInput}/>
                    <span className="input-group-text"><i className='fa fa-clipboard' title='copy'/></span>
                  </div>
                </div>
                <div className="mb-2">
                <div className="input-group">
                <input type="number" name="Length" id=""  className='form-control' value={state.Length} onChange={UpdateInput}/>
                <span className="input-group-text">Length</span>
                </div>
                </div>
                <div className="mb-2">
                <div className="input-group">
                <span className="input-group-text">
                <input type="checkbox" name="Symbols" id="" className='form-check-input' onChange={Updatecheck} />
                <input type="text" name="Symbols" id="" disabled={true} placeholder='Symbols'className='form-control' />
                </span>
                </div>
                </div>
                <div className="mb-2">
                <div className="input-group">
                <span className="input-group-text">
                <input type="checkbox" name="Number" id="" className='form-check-input' onChange={Updatecheck} />
                <input type="text" name="Number" id="" disabled={true} placeholder='Numbers'className='form-control' />
                </span>
                </div>
                </div>
                <div className="mb-2">
                <div className="input-group">
                <span className="input-group-text">
                <input type="checkbox" name="lowercase" id="" className='form-check-input' onChange={Updatecheck} />
                <input type="text" name="lowercase" id="" disabled={true} placeholder='Lower-case'className='form-control' />
                </span>
                </div>
                </div>
                <div className="mb-2">
                <div className="input-group">
                <span className="input-group-text">
                <input type="checkbox" name="uppercase" id="" className='form-check-input'onChange={Updatecheck} />
                <input type="text" name="uppercase" id="" disabled={true} placeholder='Upper-case'className='form-control' />
                </span>
                </div>
                </div>
                <div className="mb-2">
                  <input type="submit" value="Generate" className='btn btn-info' />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Passwordgen