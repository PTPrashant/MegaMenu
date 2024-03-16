import './CSS.css';
import search from './search.png';
import user from './user.png';
import { useContext, useEffect, useState } from 'react'
import AppContext from '../Context/Context';

function Navbar() {

  const [myGenre, setMyGenre]= useState(null)
  


    
  const {contextGenre} = useContext(AppContext)

    useEffect(()=>{
      setMyGenre(contextGenre)
    },[contextGenre])
  
 

    
  return (
   <div className='bgColor'>
   <div style={{paddingLeft:'9em'}} className='container'>

   <nav className="navbar navbar-expand-lg ">
 <div className="container-fluid">
   <a className="mx-3 navbar-brand text-light" href="#">prime video</a>
   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
   </button>
   <div className="collapse navbar-collapse" id="navbarSupportedContent">
     <ul className="navbar-nav me-auto mb-2 mb-lg-0">

     
       <li className="nav-item mainTitle dropdown">
         <a className="mx-3  text-light nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Home
         </a>
         <div className="dropdown-menu dropBg">
           <ul>
           <li><a className="dropdown-item" href="#">All</a></li>
            <li><a className="dropdown-item" href="#">Movies</a></li>
            <li><a className="dropdown-item" href="#">TV Shows</a></li>

           </ul>
       

         </div>

         
       </li>

       <li className="nav-item mainTitle dropdown">
       <a className="mx-3 text-light nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         Store
       </a>
       <div className="dropdown-menu dropBg">
         <ul>
          <li><a className="dropdown-item" href="#">All</a></li>
          <li><a className="dropdown-item" href="#">Rental</a></li>
          <li><a className="dropdown-item" href="#">Channels</a></li>
         </ul>
        

       </div>

       
     </li>
     <li className="mainTitle nav-item ">
         <a className="mx-3 text-light nav-link active" aria-current="page" href="#">Live TV</a>
     </li>

     <li  className="nav-item mainTitle dropdown">
     <a className="mx-3 text-light nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
       Category
     </a>
     <div id='category'  className=" dropdown-menu dropBg">
     <div>
       
       <h5><a style={{padding:'0 4em 0 4em'}}  className=" subTitle dropdown-item" href="#">Genre</a></h5>
       
       <div style={{display:'flex',padding:'0 5em'}}>
       <ul >
       
        { myGenre && <li><a className="dropdown-item" href="#">{myGenre[0].name}</a></li> }
        { myGenre && <li><a className="dropdown-item" href="#">{myGenre[1].name}</a></li> }
        { myGenre && <li><a className="dropdown-item" href="#">{myGenre[2].name}</a></li> }
        { myGenre && <li><a className="dropdown-item" href="#">{myGenre[3].name}</a></li> }
        { myGenre && <li><a className="dropdown-item" href="#">{myGenre[4].name}</a></li> }
        { myGenre && <li><a className="dropdown-item" href="#">{myGenre[10].name}</a></li> }
        { myGenre && <li><a className="dropdown-item" href="#">{myGenre[11].name}</a></li> }

      

       </ul>
       <ul style={{padding:'0 5em'}}>

       { myGenre && <li><a className="dropdown-item" href="#">{myGenre[5].name}</a></li> }
       { myGenre && <li><a className="dropdown-item" href="#">{myGenre[6].name}</a></li> }
       { myGenre && <li><a className="dropdown-item" href="#">{myGenre[7].name}</a></li> }
       { myGenre && <li><a className="dropdown-item" href="#">{myGenre[8].name}</a></li> }
       { myGenre && <li><a className="dropdown-item" href="#">{myGenre[9].name}</a></li> }

       </ul>
       </div>
      </div>


       
      <div>
       
       <h5><a style={{paddingRight:'10em'}}   className="subTitle dropdown-item" href="#">Featured Collections</a></h5>
       
       <div style={{display:'flex'}}>
       <ul>
       
       <li><a className="textLightGrey dropdown-item" href="#">Hindi</a></li>
       <li><a className="textLightGrey dropdown-item" href="#">English</a></li>
       <li><a className="textLightGrey dropdown-item" href="#">Telugu</a></li>
       <li><a className="textLightGrey dropdown-item" href="#">Tamil</a></li>
       <li><a className="textLightGrey dropdown-item" href="#">Malayalam</a></li>

      

       </ul>
       <ul>

       <li><a className="textLightGrey dropdown-item" href="#">Kannada</a></li>
       <li><a className="textLightGrey dropdown-item" href="#">Marathi</a></li>
       <li><a className="textLightGrey dropdown-item" href="#">Punjabi</a></li>
       <li><a className="textLightGrey dropdown-item" href="#">Gujarati</a></li>
       <li><a className="textLightGrey dropdown-item" href="#">Bengali</a></li>



       </ul>
       </div>
      </div>


     </div>

     
   </li>

   <li className="nav-item mainTitle dropdown">
   <a className="mx-3 text-light nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
     My Stuff
   </a>
   <div className="dropdown-menu  dropBg">
     <ul>
      <li><a className="textLightGrey fcBold dropdown-item" href="#">All</a></li>
      <li><a className="textLightGrey dropdown-item" href="#">WatchList</a></li>
      <li><a className="textLightGrey dropdown-item" href="#">Rentals</a></li>
     </ul>
    


   </div>

   
 </li>
      
     </ul>
     <form className="d-flex" role="search">
     <img src={search} style={{ marginRight:'1em' ,height:'2.2em', marginTop:'0.3em'}}  />
     <img src={user} style={{marginLeft : '2em', height:'2.4em', marginTop:'0.2em'}} />
     

     
     </form>
     </div>
     </div>
     </nav>
     
     </div></div>
     )
    }


export default Navbar
