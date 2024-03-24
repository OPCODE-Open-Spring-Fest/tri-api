import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-200 font-poppins">
      {/* Header */}
      <header className="bg-gray-800 shadow-md text-center py-8">
        <h1 className="text-4xl font-bold text-blue-500">TRI API</h1>
      </header>

      {/* API Sections */}
      <section className="container mx-auto py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* API 1 Section */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-8 transform hover:scale-105 transition duration-500 flex flex-col">
            <div className="flex-grow">
              <h2 className="text-2xl font-bold mb-4 text-blue-500">
                Currency API
              </h2>
              <p className="mb-6">
                CurrencyAPI is a reliable and flexible API designed to provide
                real-time and historical exchange rates for over 150 currencies
                globally. With its easy-to-use endpoints, developers can
                seamlessly integrate currency conversion functionality into
                their applications, whether it's for e-commerce platforms,
                financial tools, or travel applications. CurrencyAPI offers
                accurate and up-to-date exchange rate data, making it an
                essential tool for any application requiring multi-currency
                support.
              </p>
            </div>
            <div className="flex justify-center mt-auto">
              <button className="bg-blue-500 hover:bg-blue-600 text-gray-200 py-3 px-6 rounded-md transition duration-300 font-semibold">
                Explore Currency API
              </button>
            </div>
          </div>

          {/* API 2 Section */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-8 transform hover:scale-105 transition duration-500 flex flex-col">
            <div className="flex-grow">
              <h2 className="text-2xl font-bold mb-4 text-blue-500">
                IMDB API
              </h2>
              <p className="mb-6">
                IMDb API offers comprehensive access to the extensive database
                of movie and TV show information from the Internet Movie
                Database (IMDb). Developers can leverage IMDb API to retrieve
                details such as movie titles, ratings, release dates, cast and
                crew information, plot summaries, and much more. This API
                enables developers to create diverse entertainment-related
                applications, including movie recommendation systems, streaming
                service integrations, and filmography databases. With IMDb API,
                developers can enrich their applications with valuable movie
                and TV show data, enhancing the user experience and engagement.
              </p>
            </div>
            <div className="flex justify-center mt-auto">
              <button className="bg-blue-500 hover:bg-blue-600 text-gray-200 py-3 px-6 rounded-md transition duration-300 font-semibold">
                Explore IMDb API
              </button>
            </div>
          </div>

          {/* API 3 Section */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-8 transform hover:scale-105 transition duration-500 flex flex-col">
            <div className="flex-grow">
              <h2 className="text-2xl font-bold mb-4 text-blue-500">
                Cars API
              </h2>
              <p className="mb-6">
                Cars API is a powerful resource for developers seeking access
                to a wide range of vehicle information, including
                specifications, pricing, availability, and more. With its
                comprehensive dataset covering various makes, models, and years,
                Cars API enables developers to build innovative automotive
                applications, such as car dealership websites, vehicle
                comparison tools, and automotive marketplaces. Whether it's
                retrieving details about specific car models or generating
                dynamic vehicle listings, Cars API provides developers with the
                data they need to create feature-rich and informative
                automotive applications.
              </p>
            </div>
            <div className="flex justify-center mt-auto">
              <button className="bg-blue-500 hover:bg-blue-600 text-gray-200 py-3 px-6 rounded-md transition duration-300 font-semibold">
                Explore Cars API
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

