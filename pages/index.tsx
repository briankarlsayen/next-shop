import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { Categories } from '../components/Categories';
import { Featured } from '../components/Featured';
import Hero from '../components/Hero';
import { Product } from '../types';

const Home: NextPage<{ products: Product[]; categories: any }> = ({
  products,
  categories,
}) => {
  return (
    <div className='home'>
      <Head>
        <title>Noob Store</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero />
      <Featured products={products} />
      {/* <section id="info" className='py-20 border-b-2 x-spacing'>
        <div className='flex md:flex-row flex-col gap-y-24'>
          <div className='basis-1/2'>
            <div className='max-w-xl'>
              <h2 className='text-3xl font-semibold'>There is no definition of beauty, but when you can see someone's spirit coming through, something unexplainable, that's beautiful to me.</h2>
            </div>
          </div>
          <div className='basis-1/2'>
            <p className='text-xl'>Phasellus porta sapien a elit mollis ornare. Ut eget mauris urna. Aliquam dolor massa, maximus sed orci a, molestie aliquam leo. Integer rhoncus mattis interdum. 
              Donec imperdiet dolor id nunc venenatis, eget scelerisque quam finibus. In semper malesuada eros, ut aliquam sapien egestas ut. 
              Aliquam scelerisque sodales quam, vitae placerat nisl volutpat at. Donec eu elementum quam. 
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            <button className='border-2 px-4 pb-2 mt-4 uppercase hover:bg-gray-100'>View More <span className='pl-4 text-2xl'>&rarr;</span></button>
          </div>
        </div>
      </section> */}
      <section id='filler' className='w-full h-full relative'>
        <div className='absolute top-1/2 right-1/2'>
          <h1 className='text-white text-base italic'>
            Clothes made for humans, by humans.
          </h1>
          <h1 className='text-white text-sm italic text-right'>
            - Ulysses F. Oscar
          </h1>
        </div>
        <div className='w-full h-[30rem]'>
          <img
            className='object-cover object-center w-full h-full'
            src='https://images.unsplash.com/photo-1542060748-10c28b62716f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
          />
        </div>
      </section>
      <Categories categories={categories} />
      {/* <div className='w-full text-center py-20'>
        <h1 className='text-6xl font-bold'>Welcome noob</h1>
        <p className='text-lg'>Shop now to be stronger than ever.</p>
      </div>
      <div className='flex flex-wrap gap-4'>
        { products.map(product => {
          return(
            <ProductCard key={product.id} product={product} />
          )
        })}

      </div> */}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const res = await fetch('https://fakestoreapi.com/products/');
    const products = await res.json();

    const getCategories = await fetch(
      'https://fakestoreapi.com/products/categories'
    );
    const categories = await getCategories.json();
    return {
      props: {
        products,
        categories,
      },
    };
  } catch (error) {
    console.log('error', error);
    return { notFound: true };
  }
};

export default Home;
