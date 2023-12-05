'use client';

import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import axios from 'axios';
import {
  FieldValues,
  SubmitHandler,
  useForm
} from 'react-hook-form';
import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import Modal from "./Modal";
import Input from "../inputs/Input";
import Heading from "../Heading";
import Button from "../buttons/Button";
import authService from "@/app/services/auth.service";

const RegisterModal= () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: {
      errors,
    }
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      lastname: '',
      email: '',
      password: '',
      password_repeat: ''
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {    
    setIsLoading(true);
    const {success, errors} = await authService.register({
      'name': data.name,
      'lastname': data.lastname,
      'email': data.email,
      'password': data.password,
      'password_repeat': data.password_repeat,
    });
    if (success) {
        setIsLoading(false);
        authService.login({'email': data.email, 'password': data.password})
        window.location.href = '/survey';
      } else {
      setIsLoading(false);
      Object.keys(errors).forEach((field) => {
        setError(field, {
          type: 'manual',
          message: errors[field][0],
        });
      });
    }
  }

  const onToggle = useCallback(() => {
    registerModal.onClose();
    loginModal.onOpen();
  }, [registerModal, loginModal])

  const bodyContent = (
    <div className="flex flex-col gap-3">
      <Heading
        title="Welcome to Versa Pesqusia"
      />
      <div className="flex gap-2">
        <Input
          id="name"
          placeholder="Name"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <Input
          id="lastname"
          placeholder="Last Name"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </div>
      <Input
        id="email"
        placeholder="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        placeholder="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password_repeat"
        placeholder="Confirm Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  )

  const footerContent = (
    <div className="flex flex-col gap-2 mt-1">
      <hr />
      <Button 
        outline 
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => {}} 
      />
      <Button 
        outline 
        label="Continue with Github"
        icon={AiFillGithub}
        onClick={() => {}}
      />
      <div 
        className="
          text-neutral-500 
          text-center 
          mt-2 
          font-light
        "
      >
        <p>Already have an account?
          <span 
            onClick={onToggle} 
            className="
              text-neutral-800
              cursor-pointer 
              hover:text-[#1565C0]
            "
            > Log in</span>
        </p>
      </div>
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
}

export default RegisterModal;