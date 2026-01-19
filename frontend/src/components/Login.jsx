import { useState } from "react";
import "./Login.css";


function Login() {
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    userId: "",
    password: "",
    branch: "",
    roleCode: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();

    if (data.status === "SUCCESS") {
      setMessage("Login successful");
    } else {
      setMessage("Invalid credentials");
    }

  } catch (error) {
    console.error(error);
    setMessage("Server error");
  }
};

  return (
    <div className="login-page">
      <div className="login-card">

        {/* LEFT SIDE */}
        <div className="login-form">
          <h2>PolicyFlow</h2>
          <p className="subtitle">Sign in to your account</p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="userId"
              placeholder="User ID"
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="branch"
              placeholder="Branch"
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="roleCode"
              placeholder="Role Code"
              onChange={handleChange}
              required
            />

            <button type="submit">Login</button>
          </form>
          {message && <p className="login-message">{message}</p>}
        </div>

        {/* RIGHT SIDE */}
        <div className="login-image">
          <div className="overlay-text">
            <h3>Welcome to PolicyFlow</h3>
            <p>Secure policy management system</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;
