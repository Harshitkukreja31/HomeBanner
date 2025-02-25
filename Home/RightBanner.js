'use client'

import React from 'react';
import Image from 'next/image';
import Button from '../General/Button';
import FormInput from '../General/FormInput';
import authLogic from './authLogic';


const RightBanner = () => {

    const {
        signInData,
        errors,
        isSubmitting,
        handleChange,
        handleSubmit
    } = authLogic();

    return (
        <div className="md:w-2/5 my-2">
            <div className="h-full p-6 bg-gray-50 border rounded-lg">
                <h3 className="text-2xl py-3 text-black">Please log in to the panel dashboard.</h3>
                <form onSubmit={handleSubmit} className="space-y-4">

                    <FormInput
                        req={true}
                        label="Mobile Number"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeHolder="Enter Mobile Number"
                        maxlen="10"
                        autoComp="off"
                        onChange={handleChange}
                        value={signInData.phoneNumber}
                        error={errors.phoneNumber}
                    />
                    <FormInput
                        id="password"
                        name="password"
                        type="password"
                        label="Password"
                        placeHolder="Enter Password"
                        req={true}
                        autoComp="new-password"
                        onChange={handleChange}
                        value={signInData.password}
                        error={errors.password}
                    />
                    {/* reCAPTCHA placeholder */}
                    {/* Buttons */}
                    <div className="text-center space-x-4">
                        <Button theme="purple" width="120px" type="submit">Login</Button>
                        <Button theme="white" width="120px" type="button">Can't Login</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RightBanner
