
import './index.css';
import Home from "./views/Home";

function App() {

  return (
    <>
      <div>
        <Home />
        <footer className="text-center">
          <p className="text-[#8E7B7B] text-sm font-semibold">
            Created by -
            <a
              href="https://www.frontendmentor.io/profile/Heph-zibah"
              className="text-[#61A8A8] font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tosin Daramola
            </a>
          </p>
        </footer>
      </div>
    </>
  );
}

export default App
