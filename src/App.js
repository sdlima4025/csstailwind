import "./App.css";

function App() {
  return (

    <div className="bg-blue-300 p-5 ">
      <input 
      className=" outline-none border-transparent bg-white p-3 rounded-md focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
      type="text" placeholder="Digite alguma coisa"/>
      <button className="ml-2 p-3 bg-sky-400 hover:bg-sky-600 rounded-md font-bold text-white">
        clique aqui!
      </button>
    </div>
  );
}

export default App;
