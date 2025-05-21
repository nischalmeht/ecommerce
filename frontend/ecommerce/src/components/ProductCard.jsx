import React from 'react'
import useUserStore from '../store/useUserStore';
import useCartStore from '../store/useCartStore';

 const ProductCard = () => {
    const { user } = useUserStore();
	const { addToCart } = useCartStore();
  return (
    <div>ProductCard</div>
  )
}
