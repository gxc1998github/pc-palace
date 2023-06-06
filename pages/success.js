import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';
import { useRouter } from 'next/router';
import { useStateContext } from '../context/StateContext';
import { runSuccessStars } from '@/LIB/utils';
import styles from "../styles/Index.module.css";

const Success = () => {

  const { cartItems, setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  //reset upon cart success checkout 
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runSuccessStars();
  }, []);




  return (
    <div className={styles.finalizeWrapper}>
      <div className={styles.finalize}>
        <p className={styles.icon}>
          <BsBagCheckFill />
        </p>
        <h2>Your order is confirmed. Thank you!</h2><br></br>
        <p className={styles.finalizeEmail}>Your receipt has been successfully sent to your email.</p>
        <p className={styles.description}>
          If you have any queries, please email
          <a className={styles.email} href="mailto:info@pcpalace.com">
            info@pcpalace.com
          </a>
        </p>


        <Link href="/">
          <button type="button" width="300px" className="btn">
          Continue shopping with us
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success