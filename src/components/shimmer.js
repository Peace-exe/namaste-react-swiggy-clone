const ShimmerCard = ()=>{
    return <div
    style={{
        width : "200px",
        height : "160px",
        
        borderRadius : "10px",
        boxShadow: "2px 5px 5px rgba(0, 0, 0, 0.2)"
    }}>
    <div
    className="shimmer-img"
    style={{
        width : "100%",
        height : "60%",
        backgroundColor : "#d3d3d3",
        borderRadius : "10px 10px 0 0",
    }}>
    </div>
    <div
    className="restaurant-name-shimmer"
    style={{
        height:"15px",
        width:"75%",
        margin:"4px 0px 4px 4px",
        backgroundColor : "#d3d3d3",
        borderRadius:"10px",
        
    }}>

    </div>
    <div
    className="restaurant-avgRating-shimmer"
    style={{
        height:"15px",
        width:"20%",
        margin:"4px 0px 4px 4px",
        backgroundColor : "#d3d3d3",
        borderRadius:"10px",
        
    }}>

    </div>
    <div
    className="restaurant-locality-shimmer"
    style={{
        height:"15px",
        width:"30%",
        margin:"4px 0px 4px 4px",
        backgroundColor : "#d3d3d3",
        borderRadius:"10px",
        
    }}>

    </div>
    
    </div>
};

/**
 * const DisplayShimmer = (counter) => {
    if (counter <= 0) {
        return null; // Base case: return null when count is 0 or less
    }
    return (
        <>
            <ShimmerCard />
            {DisplayShimmer(counter - 1)}
        </>
    );
};
 */

const DisplayShimmer = ()=>{
    return (
        <>
        {Array(21).fill("").map((e,index)=><ShimmerCard key={index}/>)}
        </>
    );
}





export const Shimmer = ()=>{

    return( 
    <>
    <div
    style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px", // Adjust the gap between Shimmer-Cards
        justifyContent: "flex-start", // Align items to the left
        margin:"20px"
    }}>
    {DisplayShimmer(21)}    
        
    </div>
    
    </>)
};

export default Shimmer