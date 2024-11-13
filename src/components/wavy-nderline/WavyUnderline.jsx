const WavyUnderline = () => {
  return (
    <div className="inline-block relative">
      {/* Heading with responsive font size */}
      <h1
        style={{ color: '#FF6500', fontWeight: '700', position: 'relative', zIndex: 1 }}
        className=" md:text-4xl text-center mb-2  "
      >
        I am Ishan Rana
      </h1>

      {/* Responsive SVG Wavy Underline */}
      <svg
        viewBox="0 0 300 20"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-[-5px] left-0 w-full h-[20px] md:h-[25px] lg:h-[30px] z-0"
      >
        <path
          d="M0 10 Q 100 20, 250 10 T 500 10" // Path for the wave effect
          stroke="#4A00E0"
          strokeWidth="2"
          fill="transparent"
        />
      </svg>
    </div>
  );
};

export default WavyUnderline;
