

export default function CategorySection({onSelectCategory, SelectCategory, activeCategory}) {
  
  const categories = ["AI", "Security", "Fintech", "Startups", "Apps", "Tech"]
  return (
    <div className="flex items-center justify-center my-3 gap-1 md:gap-3">

        <button onClick={()=>onSelectCategory(null)} className={`p-1 md:p-3  ${activeCategory===null ? "text-violet-500 underline underline-offset-[7px] decoration-voilet-500":  ""}`}>All</button>
        
         {categories.map((category, k)=><button key={k} className={`p-1 md:p-3  ${activeCategory===category ? "text-violet-500 underline underline-offset-[7px] decoration-voilet-500":  ""}`}
         onClick={()=>onSelectCategory(category)} >{category}</button>)}
        
    </div>
  )
}
