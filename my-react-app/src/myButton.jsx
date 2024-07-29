
    const MyButton = () => {
const arrAlert=["a","b","c"]
let i=0
        const handleClick = (e) => {
            alert(arrAlert[i%3],i++);
            
        }
    
    return(
        <div>

<button onClick={handleClick}>alert</button>

        </div>
    )
}
export default MyButton