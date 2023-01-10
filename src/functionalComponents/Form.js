import React,{useState} from 'react'
import '../'

export default function Form() {
    const [name,setName]=useState("");
    const [price,setPrice] = useState(0);
    const [tnc,setTnc]=useState(false);
    const [color,setcolor]=useState(0);
    const [label,setLabel] = useState('')
    const [object,setObject] = useState("")
    const [newColor, setNewColor] = useState('')
    const [newSize, setNewSize] = useState('')
    const [lengthPrice, setLengthPrice] = useState('')

    function getFormData(e)
    {
      console.warn(name,tnc,color)
      e.preventDefault()
    }

    function setColor(e){
      // setcolor(parseInt(e.target.value))
      setNewColor(e.target.value)
    }

    function setSize(e){
      setNewSize(e.target.value)
    }

    function setLength(e){
      console.log("value",e.target.value.length)
      setName(e.target.value)
      setLengthPrice(e.target.value.length)

    }

    var obj = {
      color : {
        "red" : 100,
        "blue" : 200,
        "green" : 300
      } ,
      size : {
        "small" : 150,
        "medium" : 250,
        "large" : 350
      } ,
      input : {
        "small" : 1800 + (lengthPrice > 1 ? (lengthPrice - 1)*400 : 0),
        "medium" : 2500 + (lengthPrice > 1 ? (lengthPrice - 1)*400 : 0),
        "large" : 3200 + (lengthPrice > 1 ? (lengthPrice - 1)*400 : 0)
      }
    }

    // function totalPrice(){
       
    //    return <h2>price is :- {obj.color[newColor] + obj.size[newSize] + obj.input[newSize]}</h2>
    // }
    console.log("total price", (obj.color[newColor] ? obj.color[newColor] : 0) + (obj.size[newSize] ? obj.size[newSize] : 0) + (obj.input[newSize] ? obj.input[newSize] : 0),lengthPrice)
    return (
      <>
      <div className='bg-image' style ={{"background" : newColor ? newColor : "white"}}>
        <h1>{name ? name : "Hello World"}</h1>
      </div>
        <div className="">
        <h1 style ={{color : newColor ? newColor : "black"}}>Handle Form in React</h1>  
        <h2>price is :- {(obj.color[newColor] ? obj.color[newColor] : 0) + (obj.size[newSize] ? obj.size[newSize] : 0) + (obj.input[newSize] ? lengthPrice > 0 ?obj.input[newSize] : 0 : 0)}</h2>
        <form onSubmit={getFormData}>
          <h2>color setted is : {obj.color[newColor] ? obj.color[newColor] : 0}</h2>
          <select onChange={setColor} value = {newColor}>
            <option value = "0">Select Options</option>
            <option value = "green" >Green</option>
            <option value = "blue" >blue</option>
          </select> <br /><br />
          <h2>size setted is : {obj.size[newSize] ? obj.size[newSize] : 0}</h2>
          <select onChange={setSize} value = {newSize}>
            <option value = "0">Select size</option>
            <option value = "small">small</option>
            <option value = "medium">medium</option>
            <option value = "large">large</option>
          </select> <br /><br />
          <h3>selected size length price: {obj.input[newSize] ? obj.input[newSize] : 0}</h3>
          <input type="text" placeholder="enter name" value={name} onChange={setLength} /> <br /><br />
          <input type="checkbox"  onChange={(e)=>setTnc(e.target.checked)} /><span>Accept Terms and conditions</span>
          <br /><br />
          <button type="submit">Submit</button>
          <button>Clear</button>
    
        </form>
        </div>
      </>
    );
}
