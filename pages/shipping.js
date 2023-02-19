import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import CheckoutWizard from '@/components/CheckoutWizard';
import Layout from '@/components/Layout';
import { Store } from '@/utils/Store';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const ShippingScreen = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm();

  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const { shippingAddress } = cart;
  const router = useRouter();

  useEffect(() => {
    setValue('fullName', shippingAddress.fullName);
    setValue('address', shippingAddress.address);
    setValue('city', shippingAddress.city);
    setValue('postalCode', shippingAddress.postalCode);
    setValue('country', shippingAddress.country);
  }, [setValue, shippingAddress]);

  const submitHandler = ({ fullName, address, city, postalCode, country }) => {
    dispatch({
      type: 'SAVE_SHIPPING_ADDRESS',
      payload: { fullName, address, city, postalCode, country },
    });
    Cookies.set(
      'cart',
      JSON.stringify({
        ...cart,
        shippingAddress: {
          fullName,
          address,
          city,
          postalCode,
          country,
        },
      })
    );

    router.push('/payment');
  };

  return (
    <Layout title="Adresse de livraison">
      <CheckoutWizard activeStep={1} />
      <form
        className="mx-auto max-w-screen-md"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="mb-4 text-xl">Adresse de livraison</h1>
        <div className="mb-4">
          <label htmlFor="fullName">Nom et Prénom</label>
          <input
            className="w-full"
            id="fullName"
            autoFocus
            {...register('fullName', {
              required: 'Veuillez entrer votre nom et prénom',
            })}
          />
          {errors.fullName && (
            <div className="text-red-500">{errors.fullName.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="address">Adresse</label>
          <input
            className="w-full"
            id="address"
            autoFocus
            {...register('address', {
              required: 'Veuillez entrer votre adresse',
              minLength: { value: 3, message: 'Adresse trop courte' },
            })}
          />
          {errors.address && (
            <div className="text-red-500">{errors.address.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="postalCode">Code Postal</label>
          <input
            className="w-full"
            id="postalCode"
            autoFocus
            {...register('code postal', {
              required: 'Veuillez entrer votre code postal',
            })}
          />
          {errors.postalcode && (
            <div className="text-red-500">{errors.postalcode.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="city">Ville</label>
          <input
            className="w-full"
            id="city"
            autoFocus
            {...register('ville', {
              required: 'Veuillez entrer votre ville',
            })}
          />
          {errors.city && (
            <div className="text-red-500">{errors.city.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="country">Pays</label>
          <input
            className="w-full"
            id="country"
            autoFocus
            {...register('pays', {
              required: 'Veuillez entrer votre pays',
            })}
          />
          {errors.country && (
            <div className="text-red-500">{errors.country.message}</div>
          )}
        </div>
        <div className="mb-4 flex justify-between">
          <button className="primary-button">Suivant</button>
        </div>
      </form>
    </Layout>
  );
};

export default ShippingScreen;

ShippingScreen.auth = true;
