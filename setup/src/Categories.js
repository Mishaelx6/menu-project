import React from 'react';

const Categories = ({filterbtn , categories }) => {
  return(
  <div className="btn-container">
    {
      categories.map((category,index)=>{
       return(
        <button type="button" className="filter-btn" key ={index} onClick={()=> filterbtn(category)}>{category}</button>
       )
      })

    }
    

  </div>
  )
};

export default Categories;
