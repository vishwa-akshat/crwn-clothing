import { useState } from "react";
import {
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import "./sign-in-form.styles.scss";

const defaultFormField = {
    email: "",
    password: "",
};

export default function SignInForm() {
    const [formFields, setFormFields] = useState(defaultFormField);

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
            const { user } = await signInAuthUserWithEmailAndPassword(
                email,
                password
            );
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
        await signInWithGooglePopup();
    };

    return (
        <div className="sign-up-container">
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
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button
                        type="button"
                        buttonType="google"
                        onClick={signInWithGoogle}
                    >
                        Google Sign In
                    </Button>
                </div>
            </form>
        </div>
    );
}
