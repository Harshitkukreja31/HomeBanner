'use client'
import { useState, useEffect } from 'react';

const authLogic = () => {
    const [signInData, setSignInData] = useState({
        phoneNumber: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formValid, setFormValid] = useState(false);

    // Effect to validate form as user types
    useEffect(() => {
        // Don't validate empty form on initial render
        if (Object.keys(signInData).some(key => signInData[key] !== '')) {
            const formErrors = validateForm();
            setErrors(formErrors);
            setFormValid(Object.keys(formErrors).length === 0);
        }
    }, [signInData]);

    useEffect(() => {
        if (isSubmitting && formValid) {
            const submitForm = async () => {
                try {
                    // This would be your actual API call
                    console.log("User Logged In with", signInData);
                    // Simulate API delay
                    await new Promise(resolve => setTimeout(resolve, 1000));
                   
                    // Clear form on success
                    setSignInData({
                        phoneNumber: '',
                        password: '',
                    });
                    alert("Login Successful");
                } catch (error) {
                    console.error('Authentication error:', error);
                    alert('An error occurred during authentication');
                } finally {
                    setIsSubmitting(false);
                }
            };
           
            submitForm();
        } else if (isSubmitting) {
            setIsSubmitting(false);
        }
    }, [isSubmitting, formValid, signInData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignInData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const validateForm = () => {
        let formErrors = {};
       
        // Phone number validation
        if (!signInData.phoneNumber) {
            formErrors.phoneNumber = 'Mobile Number is required';
        } else if (!/^\d+$/.test(signInData.phoneNumber)) {
            formErrors.phoneNumber = 'Mobile number should contain only digits';
        } else if (signInData.phoneNumber.length !== 10) {
            formErrors.phoneNumber = 'Mobile number must be exactly 10 digits';
        } 
       
        // Password validation
        if (!signInData.password) {
            formErrors.password = 'Please enter password';
        } else if (signInData.password.length < 8) {
            formErrors.password = 'Password should be more than 8 characters';
        }
       
        return formErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        setErrors(formErrors);
       
        if (Object.keys(formErrors).length === 0) {
            setIsSubmitting(true);
        }
    };

    return {
        signInData,
        errors,
        isSubmitting,
        handleChange,
        handleSubmit
    };
}

export default authLogic;