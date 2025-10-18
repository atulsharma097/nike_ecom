import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CustomerReview, Footer, Hero, PopularProducts, Service, SpecialOffers, Subscribe, SuperQuality } from "./sections";
import Nav from "./Components/Nav";
import Loading from './Components/Loading';
import ProductBuying from './sections/ProductBuying';
import './index.css';
import CartPage from './assets/pages/CartPage';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Nav className="opacity-0 animate-blurIn delay-150" />
          <Routes>
            <Route path="/" element={
              <main className="relative bg-black">
                <section className="xl:p-l p-4 wide:p-r p-b opacity-0 animate-blurIn delay-200 bg-black text-white appear">
                  <Hero />
                </section>
                <section className="p-10 opacity-0 animate-blurIn delay-300">
                  <PopularProducts />
                </section>
                <section className="p-10 opacity-0 animate-blurIn delay-400">
                  <SuperQuality />
                </section>
                <section className="p-10 opacity-0 animate-blurIn delay-500">
                  <Service />
                </section>
                <section className="p-10 opacity-0 animate-blurIn delay-600">
                  <SpecialOffers />
                </section>
                <section className="bg-white p-10 opacity-0 animate-blurIn delay-700">
                  <CustomerReview />
                </section>
                <section className="bg-white p-10 sm:py-32 py-16 w-full opacity-0 animate-blurIn delay-800">
                  <Subscribe />
                </section>
                <section className="padding-x p-10 pb-8 opacity-0 animate-blurIn delay-900 text-black">
                  <Footer />
                </section>
              </main>
            } />
            <Route path="/product/:productId" element={<ProductBuying />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </>
      )}
    </div>
  );
};

export default App;
