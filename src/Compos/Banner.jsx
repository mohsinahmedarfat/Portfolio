const Banner = () => {
  return (
    <div className="bg-[url('https://i.ibb.co/ZJLbt7y/jason-leung-UMnc-YEf-O9-U-unsplash.jpg')] bg-no-repeat bg-cover bg-center ">
      <div className="flex items-center h-screen text-white bg-black bg-opacity-50">
        <div className="w-full px-52">
          <h6 className="text-xl">Hi, My name is</h6>
          <h1 className="my-4 text-5xl font-bold">Mohsin Ahmed Arfat</h1>
          <p className="text-xl">
            A passionate web developer specializing in creating dynamic and
            beautiful web applications...
          </p>
          <button className="btn btn-outline text-white mt-3">Projects</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
