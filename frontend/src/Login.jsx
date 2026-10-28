function Login() {
  return (
    <div className="login-page">
      <div className="login-card">

        <h1>🍔 FoodExpress</h1>

        <h2>Login</h2>

        <p>Welcome back! Please login to your account.</p>

        <input
          type="email"
          placeholder="Enter your email"
        />

        <input
          type="password"
          placeholder="Enter your password"
        />

        <button>Login</button>

        <p>
          Don't have an account? <a href="#">Register</a>
        </p>

      </div>
    </div>
  );
}

export default Login;