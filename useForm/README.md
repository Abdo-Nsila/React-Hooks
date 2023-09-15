# Get started with useForm Hooks

## How to Install react-hook-form
Create a new React project by running the following command from the terminal:
```bash
create-react-app demo-react-hook-form
```
To install the react-hook-form library, execute the following command from the terminal:
```bash
npm install react-hook-form@7.38.0

OR

yarn add react-hook-form@7.38.0
```

## How to Create Initial Pages
Open the src/index.js file and add the following content inside it:
```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

Now, create a new file called App.js inside the src folder with the following content:
```javascript
import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <form>
        <div className="form-control">
          <label>Email</label>
          <input type="text" name="email" />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input type="password" name="password" />
        </div>
        <div className="form-control">
          <label></label>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
```

## How to Create a Basic Form with react-hook-form
The react-hook-form library provides a useForm hook which we can use to work with forms.
Import the useForm hook like this:
```javascript
import { useForm } from 'react-hook-form';
```
You can use the useForm hook like this:
```javascript
const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm();
```

Here,
♦ Register is a function provided by the useForm hook. We can assign it to each input field so that the react-hook-form can track the changes for the input field value.
♦ HandleSubmit is the function we can call when the form is submitted.
♦ Errors is a nested property in the formState object which will contain the validation errors, if any.

Now, replace the contents of the App.js file with the following code:
```javascript
import React from "react";
import { useForm } from "react-hook-form";
import "./styles.css";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label>Email</label>
          <input type="text" name="email" {...register("email")} />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input type="password" name="password" {...register("password")} />
        </div>
        <div className="form-control">
          <label></label>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
```

## How to Add Validations to the Form

Now, let’s add the required field and minimum length validation to the input fields.

To add validation we can pass an object to the register function as a second parameter like this:
```javascript
<input
  type="text"
  name="email"
  {...register("email", {
    required: true
  })}
/>

<input
  type="password"
  name="password"
  {...register("password", {
    required: true,
    minLength: 6
  })}
/>
```

