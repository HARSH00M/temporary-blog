import { useEffect, useState } from "react"
import BlogSection from "./BlogCardsSection";
import Paginations from "./Paginations";
import CategorySection from "./CategorySection";
import SideBar from "./SideBar";

export default function BlogPage() {


    const [blogData, setBlogData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 12 // blogs per page
    const [selCat, setSelCat] = useState(null);
    const [activeCat, setActCat] = useState(null);

    useEffect(()=>{
        async function fetchData(){
            try{
                // const url = `http://localhost:5000/blogs/page=${currentPage}&limit=${pageSize}`;
                let url = `http://localhost:5000/blogs`;
                
                // if(selCat){
                //     url+= `&category=${selCat}`
                // }
                const res = await fetch(url);
                const json = await res.json();
                setBlogData(json);
                
            }catch(e){
                console.log("The error found: \n" + e);
            }
        }
        fetchData();
        
    },[pageSize, selCat, currentPage])








// page changing btn
const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
}
// category changing btn
const handleCategoryChange = (category) => {
    setSelCat(category);
    setCurrentPage(1);
    setActCat(category)
}



  return (
    <div className=" bg-white text-black w-full">
        
{/* PageCategory */}

        <div><CategorySection onSelectCategory={handleCategoryChange} SelectCategory={selCat} activeCategory={activeCat} /></div>

{/* BlogCard */}

        <div className="flex md:flex-row flex-col">
            <BlogSection blog_data={blogData} currentPage={currentPage} selCat={selCat} pageSize={pageSize} />
            <SideBar/>
        </div>

{/* Paginations */}

        <div><Paginations currentpage={currentPage} onPageChange={handlePageChange} pageSize={pageSize} blogs={blogData} /></div>

   </div>
  )
}
