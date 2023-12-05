'use client';

import { signIn } from 'next-auth/react';
import { useCallback, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import {
  FieldValues,
  SubmitHandler,
  useForm
} from 'react-hook-form';
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import Modal from "./Modal";
import Input from "../inputs/Input";
import Heading from "../Heading";
import Button from "../buttons/Button"
import authService from '@/app/services/auth.service';

const LoginModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
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
      email: '',
      password: '',
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    const {success, errors} = await authService.login({'email': data.email, 'password': data.password});
    if (success) {
      setIsLoading(false);
      window.location.href = '/survey';
    } else {
      setIsLoading(false);
      setError('email', {type: 'manual'});
      setError('password', {type: 'manual'});
    }
  }

  const onToggle = useCallback(() => {
    loginModal.onClose();
    registerModal.onOpen();
  }, [loginModal, registerModal])

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title="Welcome back"
        subtitle="Login to your account!"
      />
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
    </div>
  )

  const footerContent = (
    <div className="flex flex-col gap-2 mt-3">
      <hr />
      <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => { }}
      />
      <Button
        outline
        label="Continue with Github"
        icon={AiFillGithub}
        onClick={() => { }}
      />
      <div className="
      text-neutral-500 text-center mt-4 font-light">
        <p>First time using Versa Pesquisa?
          <span
            onClick={onToggle}
            className="
              text-neutral-800
              cursor-pointer 
              hover:[#1565C0]
            "
          > Create an account</span>
        </p>
      </div>
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Continue"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
}

export default LoginModal;