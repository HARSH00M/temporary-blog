


// page changing btn
export const handlePageChange = (pageNumbere) => {
    setCurrentPage(pageNumber);
}
// category changing btn
export const handleCategoryChange = (category) => {
    setSelCate(category);
    setCurrentPage(1);
    setActiveCategory(category)
}


