
import './App.css';
import QRCode from "react-qr-code";
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="register" element={<Register />} />
    </Routes>
    </div>
    );
  }

  // Function to generate QR code 6 digits
  function returnQRCode(){
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  const QRCODE = returnQRCode();


  function Home() {

    return (
      <>
      <main>
      <header className="App-header font-sans  bg-gradient-to-r from-blue-500 to-red-500">

      <div className="page-1 rounded-xl">
      <h1 className="text-3xl pageHead font-bold">Access Code</h1>
      <div className="text-sm py-6 px-8 text-black leading-0">
      Я не могу говорить по-русски. <span className="font-bold">font bold</span> textSample text
      textSample texttextSample <span className="uppercase">font uppercase letters here</span>
      </div>
      {/* QR CODE & NUMBER SECTION START */}
      <div className="rounded-xl overflow-hidden flex justify-between items-center">

      <div className="p-2 shadow-lg rounded-xl lg:ml-5 m-3">
      <QRCode value={QRCODE} size={110} fgColor="#007AFF" />
      </div>
      <div className="shadow-lg rounded-xl py-5 px-9 lg:mr-5 m-3" style={{minHeight:"120px"}} >
      <div className="uppercase text-black  font-semibold text-5xl">{QRCODE}</div>

      <div className="mt-2 text-black text-sm leading-0">
      Сохранить код
      </div>
      </div>

      </div>
      {/* QR CODE & NUMBER SECION END */}
      {/* Details Start */}
      <div className="rounded-xl text-sm text-black shadow-md m-2 p-3 mt-10 leading-0">
      Я не могу говорить по-русски. <span className="font-bold">all bold font letters</span> textSample
      <a href="https://zypl.ai" className="text-blue-600"> здесь </a>
      textSample texttextSample <span className="uppercase">texttextSample texttextSample</span>
      </div>

      <div className="flex rounded-xl text-sm text-black shadow-lg m-2 p-2 mt-10">


      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#007AFF" className="w-16 h-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>

      <div className="pl-2 text-left leading-0">
      Random text Random textRandom textRandom textRandom textRandom text
      </div>
      </div>

      <Link type="button" to="/register" className="bg-blue-500 rounded-xl mb-10 mt-5 hover:bg-blue-700 px-20 text-white text-sm py-1 cursor-pointer">
      Continue
      </Link>
      {/* Details END */}
      </div>
      </header>
      </main>

      </>
      );
    }

    function Register() {
      // const QRCODE = returnQRCode();

      return (
        <>
        <main>
        <header className="App-header font-sans  bg-gradient-to-r from-red-500 to-purple-600">

        <div className="page-2 rounded-xl">
        <h1 className="text-3xl pageHead font-bold">
        <Link to="/" className="hover:text-red-600 text-sm float-left p-3 cursor-pointer text-gray-600">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>

        </Link>
        <span style={{marginLeft:"-41px"}} >
        Register
        </span>
        </h1>
        <div className="flex justify-between items-center px-3 mt-20">
        <input placeholder="First Name" className="text-black ml-sm border-2 p-2 rounded text-sm" style={{width:"49%"}} />
        <input placeholder="Last Name" className="text-black mr-sm border-2 p-2 rounded text-sm" style={{width:"49%"}} />
        </div>
        <div className="px-3">
        <input type="tel" placeholder="Number" className="text-black mr-sm border-2 p-2 rounded mt-3 text-sm" style={{width:"100%"}} />
        <input type="password" placeholder="Password" className="text-black mr-sm border-2 p-2 rounded mt-3 text-sm" style={{width:"100%"}} />
        <input type="password" placeholder="Confirm" className="text-black mr-sm border-2 p-2 rounded mt-3 text-sm" style={{width:"100%"}} />

        <Link type="button" to="/" className="bg-blue-500 rounded-xl mb-10 mt-5 hover:bg-blue-700 px-20 text-white text-sm py-1 cursor-pointer">
        Register
        </Link>
        </div>

        </div>
        </header>
        </main>

        </>
        );
      }
      export default App;

