
export default function CreateForm(props){
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