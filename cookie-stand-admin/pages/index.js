import Head from "next/head"
import Footer from "../components/footer"
import Header from "@/components/header"
import CreateForm from "@/components/createform"
import ReportTable from "@/components/reporttable"
import {hours} from "../data.js"
import {useState} from 'react';

function Home() {

  const [questions, setQuestions] = useState([])

  function formHandler(event){
    event.preventDefault();
    // alert(event.target.Location.value);
    // alert(event.target.Min.value);
    // alert(event.target.Max.value);
    // alert(event.target.Avg.value);
    // alert(hours)

    const Max = event.target.Max.value

    const Avg = event.target.Avg.value

    const Min = event.target.Min.value

    const randomArray = [];

    let count = 0;
    
    for (let i = 0; i < hours.length; i++) {
      let randomNumber = parseInt(Math.floor(Math.random() * (Max - Min + 1))) + parseInt(Min) ;
      count += randomNumber
      randomArray.push(randomNumber);
      
    }
    // alert(randomArray)


    const FormObj = {
      id : questions.length +1 ,
      Location : event.target.Location.value,
      random : randomArray,
      Total : count
    }

    setQuestions([...questions,FormObj])

    // alert(Max)
    // alert(Min)
    // alert(randomArray)
    // alert(randomArray.length)
  }

  return(
  <>
    <Head>
      <title>
        Cookie Stand Admin
      </title>
    </Head>
      <Header />
    <main className="py-10 ">
      <div className=" w-2/3 m-auto bg-green-300 rounded-lg ">
          <h2 className=" text-4xl p-5 font-semibold w-full justify-center flex ">Create Cookie Stand</h2>

         <CreateForm handler={formHandler} />

      </div>
     
        <ReportTable report={questions} />
     
    </main>
    <Footer location={questions.length} />
  </>
  )
}
export default Home