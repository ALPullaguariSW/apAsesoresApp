const LoginForm = () => {
    return (
        <div>
            {showLoginForm ? (
                <form>
                    <h2>Login</h2>
                    {/* Aquí van los campos de entrada para el inicio de sesión */}
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Login</button>
                </form>
            ) : (
                <form>
                    <h2>Register</h2>
                    {/* Aquí van los campos de entrada para el registro */}
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Confirm Password" />
                    <button type="submit">Register</button>
                </form>
            )}
        </div>
    );
};

export default LoginForm;
