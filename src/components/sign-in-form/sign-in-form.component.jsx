import { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { SignInContainer, Buttons } from "./sign-in-form.styles.jsx";
import {
    googleSignInStart,
    emailSignInStart,
} from "../../store/user/user.action.js";

const defaultFormField = {
    email: "",
    password: "",
};

export default function SignInForm() {
    const [formFields, setFormFields] = useState(defaultFormField);
    const dispatch = useDispatch();

    const { email, password } = formFields;

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

        try {
            dispatch(emailSignInStart(email, password));
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case "auth/wrong-password":
                    alert("incorrect password for email");
                    break;
                case "auth/user-not-found":
                    alert("no user associated with this email");
                    break;
                default:
                    console.log(error);
            }
        }
    };

    const signInWithGoogle = async () => {
        dispatch(googleSignInStart());
    };

    return (
        <SignInContainer>
            <h2>Already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
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
                <Buttons>
                    <Button type="submit">Sign In</Button>
                    <Button
                        type="button"
                        buttonType={BUTTON_TYPE_CLASSES.google}
                        onClick={signInWithGoogle}
                    >
                        Google Sign In
                    </Button>
                </Buttons>
            </form>
        </SignInContainer>
    );
}
