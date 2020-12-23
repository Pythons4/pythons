import React from "react";
import { shallow } from 'enzyme';
import { validatePassword, validateEmail } from './validation'
// import { findByTestAtrr } from "../../Utils"

describe('Validation', () => {


    it('Password Validation short password', () => {
        var emailval = validatePassword('0922')
        expect(emailval).toBe(false);

    });
    it('Password Validation match the required', () => {
        var emailvaltrue = validatePassword('09223D997k')
        expect(emailvaltrue).toBe(true);
    });

    it('Email Validition wrong email sentax', () => {
        var emailvaltrue = validateEmail('hello@mecom')
        expect(emailvaltrue).toBe(false);
    });
    it('Email Validition Right email sentax', () => {
        var emailvaltrue = validateEmail('Hello@me.com')
        expect(emailvaltrue).toBe(true);
    });
});