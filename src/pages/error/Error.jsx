import React from "react";

const Error = () => {
  return (
    <section className="py-10 bg-white font-serif">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="text-center">
            <div
              className="bg-center bg-no-repeat bg-cover h-96"
              style={{
                backgroundImage:
                  "url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif')",
              }}
            >
              <h1 className="text-8xl">404</h1>
            </div>
            <div className="mt-[-50px]">
              <h3 className="text-2xl">Look like you're lost</h3>
              <p className="text-lg">
                The page you are looking for is not available!
              </p>
              <a
                href="/login"
                className="text-white bg-green-600 px-4 py-2 mt-4 inline-block rounded"
              >
                Go to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;
