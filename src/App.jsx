import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="p-2 flex gap-1 flex-wrap justify-between">
      <img
        className="h-[200px]"
        src="https://images.unsplash.com/photo-1683491753112-604719ba1797?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <img
        className="h-[200px] "
        src="https://images.unsplash.com/photo-1725452119307-14e2642a78a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <img
        className="h-[200px] "
        src="https://images.unsplash.com/photo-1724961766924-b4574a0ef4d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <img
        className="h-[200px] "
        src="https://images.unsplash.com/photo-1730886769116-2cbaf94588d0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fHw%3D"
        alt=""
      />
      <img
        className="h-[200px] "
        src="https://plus.unsplash.com/premium_photo-1725408115671-b67df9364179?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <img
        className="h-[200px] "
        src="https://images.unsplash.com/photo-1729717069574-e25f4bb69d87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <img
        className="h-[200px] "
        src="https://images.unsplash.com/photo-1731156639378-1b3170abb35d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fHw%3D"
        alt=""
      />
      <img
        className="h-[200px] "
        src="https://images.unsplash.com/photo-1731574573959-993dda686d36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fHw%3D"
        alt=""
      />
      <img
        className="h-[200px] "
        src="https://plus.unsplash.com/premium_photo-1670333350726-82baeb8d9e21?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjB8fHxlbnwwfHx8fHw%3D"
        alt=""
      />
      <img
        className="h-[200px] "
        src="https://images.unsplash.com/photo-1731484636405-35018e2a8a86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fHw%3D"
        alt=""
      />
      <img
        className="h-[200px] "
        src="https://media.istockphoto.com/id/2169335248/photo/a-handwritten-business-strategy-flow-chart-on-blackboard-conceptual-hand-drawn-innovation.webp?a=1&b=1&s=612x612&w=0&k=20&c=OEYNp9b0YPOXFuHqAzrYl0hPVU1mpxD9VfukgZKUWJk="
        alt=""
      />
      <img
        className="h-[200px] "
        src="https://media.istockphoto.com/id/1993983703/photo/themis-statue-of-justice-law-legal-system-justice-crime-concept-3d-render.webp?a=1&b=1&s=612x612&w=0&k=20&c=uzwqbRIyG6thqiidNQiUz10p0PuQ-l6iSbv9unU01tA="
        alt=""
      />
      <img
        className="h-[200px] "
        src="https://images.unsplash.com/photo-1732365319544-4b09b3bbf6f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjJ8fHxlbnwwfHx8fHw%3D"
        alt=""
      />
      <img
        className="h-[200px] "
        src="https://images.unsplash.com/photo-1732398171679-b0dbcf2204e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjV8fHxlbnwwfHx8fHw%3D"
        alt=""
      />
      <img
        className="h-[200px] "
        src="https://images.unsplash.com/photo-1731688687534-183fc21e6c9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjF8fHxlbnwwfHx8fHw%3D"
        alt=""
      />
      <img
        className="h-[200px] "
        src="https://images.unsplash.com/photo-1734120284108-e5e0ecdb738b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzF8fHxlbnwwfHx8fHw%3D"
        alt=""
      />
      <img
        className="h-[200px] "
        src="https://plus.unsplash.com/premium_photo-1690522330262-5bdf16b17e26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzJ8fHxlbnwwfHx8fHw%3D"
        alt=""
      />
      <img
        className="h-[200px] "
        src="https://images.unsplash.com/photo-1734120284108-e5e0ecdb738b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzF8fHxlbnwwfHx8fHw%3D"
        alt=""
      />
      <img
        className="h-[200px] "
        src="https://images.unsplash.com/photo-1733886280356-eafa96a0c140?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzB8fHxlbnwwfHx8fHw%3D"
        alt=""
      />
      <img
        className="h-[200px] "
        src="https://plus.unsplash.com/premium_photo-1674147611133-be87db07f597?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzV8fHxlbnwwfHx8fHw%3D"
        alt=""
      />
      <img
        className="h-[200px] "
        src="https://images.unsplash.com/photo-1734122415415-88cb1d7d5dc0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzR8fHxlbnwwfHx8fHw%3D"
        alt=""
      />
      <img className="h-[200px]"src="https://images.unsplash.com/photo-1734117928667-c7f943a27e80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDF8fHxlbnwwfHx8fHw%3D" alt="" />
    </div>
  );
}

export default App;
