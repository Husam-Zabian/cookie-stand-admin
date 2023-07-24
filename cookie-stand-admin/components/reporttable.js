import { hours } from "@/data";


export default function ReportTable({report}){
    const h = hours
    if(report.length == 0) {
    return(
        <p className=" py-10 w-1/2 m-auto w-full text-center text-2xl font-normal ">No Cookie Stands Available</p>
     );
    }else{
        return(
            <table className=" my-10 w-1/2 mx-auto text-xl text-center">
                <thead className="bg-green-500">
                    <tr>
                    <th className="p-2">
                        Location
                    </th>  
                    {h.map(item => (
                       <th className="p-2">{item}</th>
                    ))}
                    <th className="p-2">
                        Totals
                    </th>
                    </tr>
                    
                   
                </thead>
                <tbody className="bg-green-300">
                    {report.map(item => (
                       <tr className="p-2">
                       <td>
                        {item.Location}
                       </td>
                        {item.random.map(item2 => (
                        <td>{[item2]}</td>
                        ))}
                        <td>
                            {item.Total}
                        </td>
                       </tr>
                    ))} 
                </tbody>
                <tfoot className="bg-green-500">
                <tr>
                    <th className="p-2">
                       Totals
                    </th> 
                    <th>
                            
                    </th> 
                </tr>        
                </tfoot>
            </table>
         ); 
    }
}