import Cards from "./Cards";




export default function BlogSection(props) {
    console.log("data found");

    const currentPage = props.currentPage
    const selCat = props.selCat
    const pageSize = props.pageSize
    
    function check(blogs){
      return !selCat || blogs.category == selCat;
    }

    const data = props.blog_data.filter((blog)=>check(blog))
    .slice((currentPage -1)*pageSize, currentPage*pageSize)


    

    return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 px-10 w-full">

      {data.map((value, k)=>
        <Cards key={k} card_data={value}/>
      )}

    </div>
  )
}
