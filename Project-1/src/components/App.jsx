const App =()=>{
    return(
         <div>
            <nav>
                <div className="img-logo">
                   <img src="images\brand_logo.png"></img>
                </div>
                <div className="menu">
                    <ul>
                        <li href="" className="h">Home</li>
                        <li href="">Location</li>
                        <li href="">About</li>
                        <li href="">Contact</li>
                    </ul>

                </div>
                <div className="searchbar">
                <input type="text" name="search" placeholder="Search Choes"></input>
                <button><i class="fa-solid fa-magnifying-glass"></i></button>
                
                </div>
                
            </nav>
            
            </div>
       
       
    );
};

export default App;