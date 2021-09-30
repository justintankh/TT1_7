import react from "react";

function LoginForm(){
    return(
        <form>
            <div className="form-inner">
                <h2>Login</h2>
                {/* {error} */}
                <div className="form-group">
                    <label htmlFor="user">User</label>
                    <input type="text" name="name" id="name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password"/>
                </div>  
                <input type="submit" value="Login"></input> 
            </div>
        </form>
    )
}
export default LoginForm;