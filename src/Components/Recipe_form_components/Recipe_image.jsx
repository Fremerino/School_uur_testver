

function Recipe_image(props) {
    return (
      <>
        <input type="file" id="myFile" name="filename" onChange={(e)=>{props.setImage(e.target.value)}} accept="image/*" required/> 
      </>
    )
  }
  export default Recipe_image