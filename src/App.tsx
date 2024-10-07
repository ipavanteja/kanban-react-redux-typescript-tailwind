import Board from "./components/Board";

function App() {
  return (
    <>
      <div className="p-8">
        {/* Heder Section */}
        <div className="w-full h-32 p-6 mb-8 bg-[#ecf2ff] flex items-center justify-between rounded-lg overflow-hidden relative">
          <div className="flex flex-col gap-1">
            <h4 className="text-2xl text-gray-800 font-semibold">Kanban app</h4>
            <div className="flex gap-2">
              <h6 className="text-sm">Home</h6>
              <span>•</span>
              <h6 className="text-sm">Kanban</h6>
            </div>
          </div>
          <div className="relative w-40 h-40">
            <img
              src="https://modernize-react.adminmart.com/assets/ChatBc-d3c45db6.png"
              alt="img"
              className="absolute top-[70%] left-0 transform translate-x-[-10%] -translate-y-1/2 object-contain"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <Board />
        </div>
      </div>
    </>
  );
}

export default App;
