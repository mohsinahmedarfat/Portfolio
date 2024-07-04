import { Link } from "react-router-dom";

const Education = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const showModal = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-5">Education and Certification</h1>

      <div className="flex flex-col lg:flex-row gap-10 xl:gap-20">
        {/* education */}
        <div>
          <h1>
            <strong>Degree:</strong> HSC
          </h1>
          <h1>
            <strong>Institution:</strong> Islamia University College,
            Chittagong, Bangladesh.
          </h1>
          <h1>
            <strong>GPA:</strong> 5.00 (out of 5.00)
          </h1>
          <h1>
            <strong>Year:</strong> 2019-2021
          </h1>
        </div>

        <div className="border-l-2 border-slate-400 w-1"></div>

        {/* certification */}
        <div>
          <h1>
            <strong>Course:</strong> Complete Web Development
          </h1>
          <h1>
            <strong>Course by:</strong> Programming Hero
          </h1>

          <h1>
            <strong>Certificate:</strong>{" "}
            <Link
              className="underline"
              to="https://drive.google.com/file/d/1awTSUFmnNOl-OIFd3cOpE6CI7yJ8e3Tl/view?usp=sharing"
            >
              View
            </Link>
          </h1>

          {/* <button className="btn" onClick={() => showModal()}>
            open modal
          </button>
          {isOpen && (
            <dialog className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">Press ESC key or click outside to close</p>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Education;
