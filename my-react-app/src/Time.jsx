const Time=()=>{
const date=new Date()
const currentTime=date.toLocaleTimeString()
return(
    <div>
        <h2>current time</h2>
<h2>{currentTime}</h2>
{/* <h2>hggik</h2> */}

    </div>
)



}
export default Time