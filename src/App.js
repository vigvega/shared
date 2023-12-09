import Header from "./components/Header";
import nodesImg from './components/imgs/node2.png'
import './App.css';

function App() {
  return (
    <>
    <Header/>

    <div className="flex flex-col md:flex-row h-screen items-center md:ml-12">
      <div className="w-full md:w-1/2 h-2/3 text-center md:text-left ml-12 md:mr-8">

        <h1 className="text-7xl mb-5 text-white font-semibold">Welcome to</h1>

        <blockquote className="text-7xl font-semibold">
          <span className="text-white">shar</span>
          <span className="text-red-500 italic">ED</span>
        </blockquote>
        <br></br>
        <span className="text-white w-2/3 items-center text-center md:text-left">An useful tool designed to share and make collaborative notes with your friends</span>

        <br></br>
        <div className="space-x-5 space-y-10 font-mono">
          <button class="bg-red-500 border-2 border-red-500 hover:bg-red-400 hover:border-red-400 text-white py-3 px-8 rounded-full">
            Create group
          </button>
          
          <button class="bg-transparent border-2 border-white hover:text-red-400 hover:border-red-400 text-white py-3 px-12 rounded-full">
            Join group
          </button>
        </div>
      <br></br>
      </div>
      
      <div className="w-2/3 md:w-1/3 h-2/3">
      <img src={nodesImg}></img>
    </div>

    </div>
    
  </>
  );
}

export default App;

