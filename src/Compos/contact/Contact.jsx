import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    toast.success("Your message sent successfully.");
    reset();
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-5 text-center">Contact me</h1>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <div className="w-full bg-[#CADEFC] rounded-lg shadow md:mt-0 sm:max-w-xl xl:p-0 border border-[#B9D7EA]">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 p-6 rounded-xl md:space-y-6 bg-[#F7FBFC]"
            >
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-[#B9D7EA] text-gray-900 sm:text-sm rounded-lg focus:ring-[#B9D7EA] focus:border-[#B9D7EA] block w-full p-2.5 placeholder-gray-400 focus:ring-2 focus:outline-none"
                  placeholder="Enter Your Name"
                  {...register("name", { required: true })}
                />
                {errors.title && (
                  <small className="text-red-400">This field is required</small>
                )}
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email"
                  className="bg-gray-50 border border-[#B9D7EA] sm:text-sm rounded-lg focus:ring-[#B9D7EA] focus:border-[#B9D7EA] block w-full p-2.5 placeholder-gray-400 focus:ring-2 focus:outline-none"
                  {...register("email")}
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Enter Your Message"
                  className="bg-gray-50 border border-[#B9D7EA] text-gray-900 sm:text-sm rounded-lg focus:ring-[#B9D7EA] focus:border-[#B9D7EA] block w-full p-2.5 placeholder-gray-400 focus:ring-2 focus:outline-none resize-none h-36"
                  {...register("message", { required: true })}
                />
                {errors.message && (
                  <small className="text-red-400">This field is required</small>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-[#88b3f3] hover:bg-opacity-90 text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
