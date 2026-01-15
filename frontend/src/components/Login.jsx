import { useState } from "react";

function Login() {
  const [form, setForm] = useState({
    userId: "",
    password: "",
    branch: "",
    roleCode: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    console.log("Login Data:", form);
    alert("Login button clicked");
  };

  return (
    <div style={styles.container}>
      <h2>PolicyFlow Login</h2>

      <input
        name="userId"
        placeholder="User ID"
        onChange={handleChange}
        style={styles.input}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        style={styles.input}
      />

      <input
        name="branch"
        placeholder="Branch Code"
        onChange={handleChange}
        style={styles.input}
      />

      <input
        name="roleCode"
        placeholder="Role Code"
        onChange={handleChange}
        style={styles.input}
      />

      <button onClick={handleLogin} style={styles.button}>
        Login
      </button>
    </div>
  );
}

const styles = {
  container: {
    width: "350px",
    margin: "120px auto",
    padding: "20px",
    border: "1px solid #ccc",
    backgroundColor: "#f5f5f5",
    textAlign: "center"
  },
  input: {
    width: "100%",
    padding: "8px",
    marginBottom: "12px"
  },
  button: {
    width: "100%",
    padding: "8px",
    backgroundColor: "#003366",
    color: "#fff",
    border: "none",
    cursor: "pointer"
  }
};

export default Login;
