import React, {useState, useEffect} from 'react'

export default function useDraggable() {


  const [position, setPosition] = useState({
    x:0,
    y:0,
  });
  
  useEffect(() => {
  
    const handle = document.getElementById("handle")
    handle.addEventListener("mousedown", (e) => {
      e.preventDefault()
      handle.style.pointerEvents = "none"
  
  
  
      document.body.addEventListener("mousemove", move)
      document.body.addEventListener("mouseup", () => {
        document.body.removeEventListener("mousemove", move)
        handle.style.pointerEvents= "initial"
      })
    })
  
    return () => {
      document.body.removeEventListener("mousedown", move);
      document.body.removeEventListener("mouseup", move);
      document.body.removeEventListener("mousemove", move)
    }
  }, [])
  
  
  const move = (e) => {
    const pos = {
      x: e.clientX,
      y: e.clientY,
    }
  
    setPosition(pos);
  
  }



  return {
    position
  }
}


