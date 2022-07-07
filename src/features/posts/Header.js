import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  
  const navigate = useNavigate();
  return(<div style={{marginTop:"1rem",backgroundColor:"teal",display:"flex",justifyContent:"space-between", alignItems:"center", borderRadius:"7px"}}>
    <h2 >Posts</h2>
<div><button style={{margin: "0 auto",borderRadius:"5px"}}
   onClick={() => navigate("/new")}>
New Post
</button></div>
</div>
  );
};

export default Header;