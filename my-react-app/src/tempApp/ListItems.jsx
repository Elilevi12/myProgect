import "./ListItems.css"
const ListItems=()=>{
const arrList=["Shopping","car cleaning","doctor appointment"]
return(
    <div>
<h2 className="list">my list </h2>
{arrList.map((item)=>{
return  <div className="myItems" ><h3>{item}</h3>  <input type="checkbox"/></div>
})
}
    </div>
)




}
export default ListItems