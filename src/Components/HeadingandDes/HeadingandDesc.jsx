import React from 'react'

function HeadingandDesc({Heading, desc}) {
  return (
    <div className="mx-auto my-12 text-center md:max-w-xl lg:max-w-3xl">
      <h3 className="mb-6 text-3xl font-bold">--{Heading}--</h3>
      <p className="mb-6 pb-2 text-neutral-600  md:mb-12 md:pb-0">
      {desc}
      </p>
    </div>
  );
}

export default HeadingandDesc