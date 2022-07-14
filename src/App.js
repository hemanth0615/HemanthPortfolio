import './App.css';
import Hemanth from "../src/Images/IMG_6284.CR2";
import url from "../src/Images/IMG_6284.CR2";

function App() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Hemanth Naidu.</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">About</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link active " href="#">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Blogs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Opensource</a>
        </li>
        
      </ul>
      <div class="nav-item " id="nav_end">
       <a class="nav-link active " id="nav_end_text" href="#">Get in touch</a>
    </div>
    </div>
    
  </div>
</nav>
  <div id="body1" class="container-fluid">
    <div class="row">
        <div class="col-lg-7" id="container1">
            <p class="greet">Hey there! 👋 I’m Hemanth Naidu </p>
            <p class="tag">Converting my dreams into efficient code</p>
            <p class="description">A Full Stack Developer with experience building open source projects. I am fond of solving complex problems encountered in daily life.</p>
            <div id="body_social_logos" class="container-fluid">
              <div class="row">
                <div class="col-lg-3" id="logo1">
                  <li href="#"> <img src={url} alt="" /></li>
                </div>
                <div class="col-lg-3" id="logo1"></div>
                <li href="#"> <img src={url} alt="" /></li>
                <div class="col-lg-3" id="logo1">
                  <li href="#"> <img src={url} alt="" /></li>
                </div>
                <div class="col-lg-3" id="logo1">
                  <li href="#"> <img src={url} alt="" /></li>
                </div>
              </div>
            </div>
        </div>

        <div class="col-lg-5" id="container2">
            <img src={Hemanth} class="img-fluid" alt="..." />
        </div>
        
    </div>
  </div> 
    </div>
  );
}

export default App;
