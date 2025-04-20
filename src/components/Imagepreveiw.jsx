import Loading from "./Loading";

const Imagepreveiw = (props) => {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
      {/* Original Image */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col">
        <h2 className="text-xl font-semibold text-center bg-gray-800 text-white py-2">
          Original Photo
        </h2>

        <div className="flex items-center justify-center h-[500px] bg-gray-100">
          {props.uploaded ? (
            <img
              src={props.uploaded}
              alt="Original"
              className="max-h-full max-w-full object-contain"
            />
          ) : (
            <div className="text-gray-500">No Image selected</div>
          )}
        </div>
      </div>

      {/* Enhanced Image */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col">
        <h2 className="text-xl font-semibold text-center bg-blue-800 text-white py-2">
          Enhanced Image
        </h2>

        <div className="flex items-center justify-center h-[500px] bg-gray-100">
          {props.enhanced ? (
            <img
              src={props.enhanced}
              alt="Enhanced"
              className="max-h-full max-w-full object-contain"
            />
          ) : props.loading ? (
            <Loading />
          ) : (
            <div className="text-gray-500">No Enhanced Image</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Imagepreveiw;
