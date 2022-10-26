import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../feature/auth/authService";
import Button from "../ui-kit/Button";
import ErrorLoginForm from "../error/ErrorLoginForm";

/**
 * Display the login form
 * @returns html
 */
export default function LoginForm() {
  const { register, handleSubmit } = useForm(); // register = {...register} , handleSubmit on form
  const dispatch = useDispatch()
  const Storage = localStorage.getItem("username")
  const loginStorage = JSON.parse(Storage) // convert my JSON storage into manipulable element
  const username = Storage ? loginStorage.username : ""
  const password = Storage ? loginStorage.password : ""
  const navigate = useNavigate()


  // state.user => user: userReducer in my store in authService.js
  // I destructure the state for 
  const { userToken, error } = useSelector(state => state.user)
  // const { userRemember } = useSelector((state) => state.user)
  
  /**
   * Call the userLogin action 
   * @param {object} username lastname
   */ 
  const submitLogin = (data) => {
    console.log("data",data)
    dispatch(userLogin(data))
  };
  
  useEffect(() => {    
   

    if(userToken) {
      navigate("/profile")
    }
  }, [navigate, userToken, loginStorage])

  return (
    <>
      <form onSubmit={handleSubmit(submitLogin)}>
        {error && <ErrorLoginForm>{error}</ErrorLoginForm>}
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" {...register("username")} defaultValue={username}  required />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" {...register("password")} defaultValue={password} required />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" {...register("checkbox")}  defaultChecked={Storage} />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <Button type="submit" className="w100">Sign In</Button>      
      </form>
    </>
  );
}
