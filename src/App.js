function App() {
  return (
    <>
      {/* Hidden for small devices */}
      <div className="hidden font-body md:block">
        <div className="relative grid h-screen grid-cols-2">
          <div className="bg-swatch-one"></div>
          <div className="bg-swatch-two"></div>
        </div>
        <div className="absolute grid grid-cols-2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-2xl lg:w-3/5 md:w-4/6 top-1/2 left-1/2 lg:h-3/5 md:h-3/6">
          <div className="relative px-10 py-12">
            <div className="text-xs font-extrabold text-black lg:mb-20 md:mb-8">
              MINIMAL
            </div>
            <span className="font-black lg:text-5xl md:text-4xl">
              Beautiful
              <br />
              Workspace
            </span>
            <p className="mt-2 text-xs font-medium leading-relaxed tracking-wider">
              Believe that its important to invest in a workspace that's
              functional but also delightful to be in a space that supports your
              workflow. creativity. personal preferences and sense of style.
            </p>
            <div className="absolute flex flex-row lg:bottom-16 md:bottom-12 left-10">
              <div className="w-1 h-1 m-1 rounded-full bg-swatch-four"></div>
              <div className="w-1 h-1 m-1 rounded-full bg-fadedGreen"></div>
              <div className="w-1 h-1 m-1 rounded-full bg-swatch-four"></div>
              <div className="w-1 h-1 m-1 rounded-full bg-swatch-four"></div>
            </div>
            <span className="absolute bottom-0 right-0 flex items-center text-xs font-semibold text-white cursor-pointer md:h-12 lg:h-16 lg:px-8 md:px-4 bg-fadedGreen">
              Check next workspace
            </span>
          </div>
          <div className="relative">
            <img
              className="object-cover w-full h-full"
              src="images/workspace.jpg"
              alt="Workspace"
            />
            <div className="absolute transition ease-out border-2 border-white rounded-full cursor-pointer duration-250 top-10 right-10 hover:shadow-inner hover:bg-white group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 m-2 text-white transform rotate-180 group-hover:text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <div className="absolute bottom-0 left-0 flex items-center justify-center w-16 cursor-pointer md:h-12 lg:h-16 bg-darkGreen">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* For small devices */}
      <div></div>
    </>
  );
}

export default App;
