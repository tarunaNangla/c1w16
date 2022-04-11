import React from "react"
import data from '../data.json'


const GroceryDetails = ()=>{
console.log(data)

    return(
        <>
        <h1>Groceries</h1>
        <div className="container">
            {/* map through the data and display the cards */}
            <ol>
                <div className="leftside" >
                   
                    TOP DEALS
                  
                    </div>
                {
                    data.map( (ele)=>{
                     return(
                            <>
                            <div className="productsdata">
                            <div>

<img src={ele.imgURL} alt="" />
<h6>{ele.title}</h6>
<div className="flexdata">
<p>{ele.sellingPrice}</p>
<p>M.R.P</p>
<s>{ele.mrp}</s>
</div>
<div className="flexdata1" >
    <p>Add to Cart</p>
    <button>+</button>
</div>
</div>

                            </div>
                            </>
                     )
    
                    })

                }
            </ol>
        </div>
        </>
    )
}
export default GroceryDetails