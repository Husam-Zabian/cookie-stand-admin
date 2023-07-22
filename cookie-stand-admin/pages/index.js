import Head from "next/head"
import {useState} from 'react';

function Home() {

  function formHandler(event){
    event.preventDefault();
    alert(event.target.Location.value);
    alert(event.target.Min.value);
    alert(event.target.Max.value);
    alert(event.target.Avg.value);
  }

  return(
  <>
    <Head>
      <title>
        Cookie Stand Admin
      </title>
    </Head>
    <body>
      <Header />
    <main className="py-10 ">
      <div className=" w-2/3 m-auto bg-green-300 rounded-lg ">
          <h2 className=" text-4xl p-5 font-semibold w-full justify-center flex ">Create Cookie Stand</h2>

         <Form handler={formHandler} />

      </div>
      <div className="py-10 w-1/2 m-auto ">
          <p className="w-full text-center text-2xl font-normal ">Report Table Comming Soon...</p>
      </div>
    </main>
    <footer className="bg-green-500">
       <p className="text-2xl font-semibold p-10"> &copy;2023 </p>
    </footer>
    </body>
  </>
  )
}

function Header(){
  return(
    <header>
      <div className="bg-green-500">
       <h1 className="text-5xl font-semibold p-10 ">Cookie Stand Admin</h1> 
      </div>
    </header>
  )
}

function Form(props){
  return(
    <form className="flex-col" onSubmit={props.handler}>
          <div className="flex p-5">
            <p className="text-2xl pr-3 font-semibold ">Location</p>
            <input name="Location" className="w-full text-normal"></input>
          </div> 

          <div className="flex">

           <div className="flex-col p-5 ">
             <p className="text-2xl  font-semibold text-center ">Minimum Customers Per Hour</p>
             <input name="Min" className="w-full text-normal"></input>
           </div>

           <div className="flex-col p-5 ">
            <p className="text-2xl  font-semibold text-center ">Maximum Customers Per Hour</p>
            <input name="Max" className="w-full text-normal"></input>
          </div>

          <div className="flex-col p-5 ">
            <p className="text-2xl  font-semibold text-center ">Average Cookies Per Sale</p>
            <input name="Avg" className="w-full text-normal"></input>
          </div>

          <div className="flex-col p-4 ">            
          <button className=" p-10 pr-14 pl-14 bg-green-500 text-2xl font-semibold text-center">
              Create
          </button>
           </div>   
          </div>       
     </form>
  ); 
}



export default Home