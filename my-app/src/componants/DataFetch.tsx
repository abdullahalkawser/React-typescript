
type Userdilne=
{
    stattus: "loading" |"err" | "succses"
}
// user-defined props types - union. 

const DataFetch = ({stattus}: Userdilne) => {

    if (stattus ==="loading") {
    return <h2>data is loainduh</h2>
        
    }else if(stattus ==="err"){
   return <h2>data Fetching feild</h2>
    }
  return (
    <div>DataFetch succcsefuly</div>
  )
}

export default DataFetch