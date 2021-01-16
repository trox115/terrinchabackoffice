import React from 'react';
import MaterialIcon from 'react-material-iconic-font';
import logo from '../../img/logo.png'
import { Link } from 'react-router-dom'
import './Login.css';


export default function Login() {
	
    return (
        <div className="limiter">
		<div className="container-login100 page-background">
			<div className="wrap-login100">
				<form className="login100-form validate-form">
					<span className="login100-form-logo">
                        <img src={logo} />
					</span>
					<span className="login100-form-title p-b-34 p-t-27">
						Log in
					</span>
					<div className="wrap-input100 validate-input" data-validate = "Insira o utilizador">
						<input className="input100" type="text" name="username" placeholder="Utilizador" />
						<span className="focus-input100" data-placeholder="&#xf207;"></span>
					</div>
					<div className="wrap-input100 validate-input" data-validate="Introduza password">
						<input className="input100" type="password" name="pass" placeholder="Password" />
						<span className="focus-input100" data-placeholder="&#xf191;"></span>
					</div>
					<div className="contact100-form-checkbox">
						<input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
						<label className="label-checkbox100" for="ckb1">
							Lembrar-me
						</label>
					</div>
					<div className="container-login100-form-btn">
						<Link to='/' className="login100-form-btn">
							Login
						</Link>
					</div>
					<div className="text-center p-t-90">
						<a className="txt1" href="#">
							Esqueceu a password?
						</a>
					</div>
				</form>
			</div>
		</div>
	</div>
    )
}
