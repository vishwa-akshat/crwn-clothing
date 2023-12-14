import { useState } from "react";
import { useDispatch } from "react-redux";

import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { SignUpContainer } from "./sign-up-form.styles.jsx";
import { signUpStart } from "../../store/user/user.action.js";

const defaultFormField = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

export default function SignUpForm() {
    const [formFields, setFormFields] = useState(defaultFormField);

    const dispatch = useDispatch();

    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormField);
    };

    const handleChange = (event) => {
        const {
            target: { name, value },
        } = event;

        setFormFields((formFields) => ({ ...formFields, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("password do not match");
            return;
        }

        try {
            dispatch(signUpStart(email, password, displayName));
            resetFormFields();
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert("Cannot create user, email already in use");
            } else {
                console.log(
                    "user creation encountered an error",
                    error.message
                );
            }
        }
    };

    return (
        <SignUpContainer>
            <h2>Don't have an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Display Name"
                    onChange={handleChange}
                    value={displayName}
                    name="displayName"
                    type="text"
                    required
                />
                <FormInput
                    label="Email"
                    onChange={handleChange}
                    value={email}
                    name="email"
                    type="email"
                    required
                />
                <FormInput
                    label="Password"
                    onChange={handleChange}
                    value={password}
                    name="password"
                    type="password"
                    required
                />
                <FormInput
                    label="Confirm Password"
                    onChange={handleChange}
                    value={confirmPassword}
                    name="confirmPassword"
                    type="password"
                    required
                />

                <Button type="submit">Sign Up</Button>
            </form>
        </SignUpContainer>
    );
}
