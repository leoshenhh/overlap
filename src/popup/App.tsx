import "/src/tailwind.css";
const App = () => {
  return (
    <div className="h-40 w-36 p-4 shadow-2xl">
      <button
        type="button"
        className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        添加mask
      </button>
    </div>
  );
};
export default App;
