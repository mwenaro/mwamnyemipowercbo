import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MainNav, { LovelyNav } from "./app/MainNav";

function App() {
  return (
    <div className="container-fluid wrapper">
      <header>
       <LovelyNav />
     
        <div className='site-title'>
          <h1>Mwamnyemi Power CBO</h1>
          <p>Giving back to the society . . . </p>
        </div>

        
      </header>
      <main></main>
      <footer>
        <div>
          <h4>&copy;mwamnyemicbo.tk 2022</h4>
        </div>
        <MainNav />
      </footer>
    </div>
  );
}


export default App;
