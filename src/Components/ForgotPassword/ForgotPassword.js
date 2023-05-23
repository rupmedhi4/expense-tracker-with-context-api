import React, { useContext, useState } from "react";
import "./ForgotPassword.css";
import { appContext } from "../../AppContext";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const {setResetPasswordEmail, resetPasswordEmail,resetPasswordHandler}=useContext(appContext)

  return (
    <div className="container">
      <h2>Forgot Password</h2>
      <form onSubmit={resetPasswordHandler}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={resetPasswordEmail}
          onChange={(e) => setResetPasswordEmail(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}

export default ForgotPassword;
