import Navbar from "./components/Navbar"


function App() {
  return (
    <section>
       <Navbar/>
       <div className="max-w-[1370px] mx-auto">
         <textarea className="border border-black/60 focus:0 w-full h-96 p-5" name="" id="" ></textarea>
       </div>
    </section>
  )
}

export default App