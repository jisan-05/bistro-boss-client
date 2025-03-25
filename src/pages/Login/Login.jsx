import React, { useEffect, useRef, useState } from "react";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

const Login = () => {

  const [disabled,setDisabled] = useState(true)
  const captchaRef = useRef(null)

  useEffect(()=>{
    loadCaptchaEnginge(6); 
  },[])

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password)
  }
  const handleValidateCaptcha = () =>{
    const user_captcha_value = captchaRef.current.value;
    if(validateCaptcha(user_captcha_value)){
      setDisabled(false)
    }else{
      setDisabled(true)
    }
  }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col md:flex-row">
                <div className="text-center w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 md:w-1/2 max-w-sm shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <fieldset className="fieldset">
                            <label className="fieldset-label">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="input"
                                placeholder="Email"
                            />
                            <label className="fieldset-label">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="input"
                                placeholder="Password"
                            />
                            <div>
                                <a className="link link-hover">
                                    Forgot password?
                                </a>
                            </div>
                            <label className="fieldset-label"><LoadCanvasTemplate /></label>
                            <input
                                type="text"
                                ref={captchaRef}
                                name="captcha"
                                className="input"
                                placeholder="type the text above"
                            />
                            <button className="btn btn-outline btn-info btn-xs" onClick={handleValidateCaptcha}>Validate</button>
                            
                            <input disabled={disabled} className="btn btn-neutral mt-4" type="submit" value="Login" />
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
