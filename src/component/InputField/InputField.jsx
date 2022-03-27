import './inputfield.scss'
const InputField=({name,type})=>{
   
return(
    <div className="inputFieldContainer">
        <div className="container">
            <div className="labelContainer">
                <label className='labelName'>{name}</label>
            </div>
            <div className="inputFieldContainer">
                <input type={type} className='inputText'/>

            </div>

        </div>

    </div>
)
}
export default InputField