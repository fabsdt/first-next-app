import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import Layout from '../../components/Layout';
import data from '../../utils/data';
import Link from 'next/link';
import Image from 'next/image';
import { Store } from '../../utils/Store';

const ProductScreen = () => {
  const { state, dispatch } = useContext(Store);
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug);
  if (!product) {
    return <div>Article introuvable</div>;
  }

  const addToCartHandler = () => {  
    const existItem =  state.cart.cartItems.find((x) => x.slug === product.slug)
    const quantity = existItem ? existItem.quantity + 1 : 1

    if (product.countInStock < quantity) {
      alert('Désolé, cet article est en rupture de stock.')
      return;
    }

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } })    
  }

  return (
    <Layout title={product.name}>
      <div className="py-2">
        <Link href="/">Retour aux articles</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout="responsive"
          ></Image>
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg">{product.name}</h1>
            </li>
            <li>Description : {product.description}</li>
          </ul>
        </div>
        <div>
          <div className="card p-5">
            <div className="mb-2 flex justify-between">
              <div>Prix</div>
              <div>$ {product.price}</div>
            </div>
            <div className="mb-2 flex justify-between">
              <div>Statut</div>
              <div>{product.countInStock > 0 ? 'En stock' : 'Sur commande'}</div>
            </div>
            <button className="primary-button w-full" onClick={addToCartHandler}>Ajouter au panier</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductScreen;
