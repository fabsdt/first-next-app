import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';
import { useForm } from 'react-hook-form';

const LoginScreen = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const submitHandler = ({ email, password }) => {};

  return (
    <Layout title="Se connecter">
      <form
        className="mx-auto max-w-screen-md"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="mb-4 text-xl">Se connecter</h1>
        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            {...register('email', {
              required: 'Entrer une adresse email',
              pattern: {
                value: /^[a-zA-z0-9_.+-]+@[a-zA-Z0-9-.]+$/i,
                message: 'Adresse email non valide',
              },
            })}
            className="w-full"
            id="email"
            autofocus
          ></input>
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            {...register('password', {
                required: 'Entrer un mot de passe',
                minLength: { value: 6, message: 'Le mot de passe doit contenir au moins 6 caractères' },
                })}
            className="w-full"
            id="password"
            autofocus
          ></input>
            {errors.password && (
            <div className="text-red-500">{errors.password.message}</div>
            )}
        </div>
        <div className="mb-4">
          <button className="primary-button">Se connecter</button>
        </div>
        <div className="mb-4">
          {' '}
          Vous n&apost;avez pas de compte ? &nbsp;
          <Link href="/register">Créer un compte</Link>
        </div>
      </form>
    </Layout>
  );
};

export default LoginScreen;
