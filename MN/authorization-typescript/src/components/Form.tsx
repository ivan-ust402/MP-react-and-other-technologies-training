import React, { FC, useState } from "react"

interface FormProps {
  buttonValue: string;
  handleClick: (email: string, pass: string) => void;
}

const Form: FC<FormProps> = ({ buttonValue, handleClick }) => {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        handleClick(email, pass)
      }}
      className="form"
    >
      <label className="form-label">
        Email:
        <input
          className="form-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
      </label>
      <label className="form-label">
        Password:
        <input
          className="form-input"
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="Enter password"
        />
      </label>
      <input type="submit" className="form-btn" value={buttonValue} />
    </form>
  )
}

export { Form }
