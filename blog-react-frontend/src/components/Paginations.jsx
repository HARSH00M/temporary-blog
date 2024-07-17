import { useState } from "react"


export default function Paginations({currentpage, onPageChange, blogs ,pageSize}) {

    // const [inc, setInc] = useState(null)
    // const [dec, setDec] = useState(null)
    
    const [activePage, setActivePage] = useState(1);

    const pageCount = Math.ceil(blogs.length/pageSize);
    
    
    const arr = []

   

    for(let i =1; i<=pageCount; i++){
        arr.push(i);
    }

    function ChangeActivePage(num){
        if(num<=0)num=1;
        else if(num>=pageCount) num=pageCount;
        setActivePage(num);
        onPageChange(num);
      
    }
   

  return (
    <div className="w-full flex justify-center my-5"> 
    <div className="inline-flex ">

        <button className={` mx-2 my-1 ${activePage==1 ? "hidden":""}`} onClick={()=>ChangeActivePage(activePage-1)}>Prev</button>

        <div className="flex items-center gap-1">
        {
            arr.map((i, k)=> <button onClick={()=>ChangeActivePage(i)} key={k} className={`${i===activePage ? "bg-violet-400 text-white": "bg-white"} px-2 border border-gray-400 rounded-md`}>{i}</button>)
        }
        </div>

        <button className={` mx-2 my-1 ${activePage===pageCount ? "hidden":""}`} onClick={()=>ChangeActivePage(activePage+1)} >Next</button>
    </div>

    </div>
  )
}
