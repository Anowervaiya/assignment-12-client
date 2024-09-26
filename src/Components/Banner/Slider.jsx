import React from 'react';
import Button from '../Button/Button';

function Slider({ title1, title2, desc, img, button }) {


  const bgImage = `bg-[url('${img}')]`;

  return (
    <section
      className={`relative ${bgImage} bg-cover bg-center bg-no-repeat`}
      style={{ backgroundImage: `url(${img})` }} 
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl text-white font-extrabold sm:text-5xl">
            {title1}
            <strong className="block font-extrabold text-rose-700">
              {' '}
              {title2}.{' '}
            </strong>
          </h1>

          <p className="mt-4 text-white max-w-lg sm:text-xl/relaxed">{desc}</p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Button text={button}></Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;
