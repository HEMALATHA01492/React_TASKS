import React, { useState } from 'react';
import NavBar from '../homeComponent/NavBar';
import Header from '../homeComponent/Header'
import Footer from '../homeComponent/Footer';


import '../home.css';

function Home(props) {
    const {data}=props;
    const [counter,setCounter]=useState(0);
     //Button-0
   
    const [countval,setCountval]=useState('Add to card');
    const [btnstage,setBtnstage]=useState(true);
    const handleClick =()=>{
         setBtnstage(!btnstage);
         if(btnstage){
            setCounter(counter + 1);
            setCountval('Remove to Cart')
        }else{
         setCounter(counter - 1);
         setCountval('Add to Cart')}}
//Button-1
         const [countval1,setCountval1]=useState('Add to card');
         const [btnstage1,setBtnstage1]=useState(true);
         const handleClick1 =()=>{
         setBtnstage1(!btnstage1);
         if(btnstage1){
            setCounter(counter + 1);
            setCountval1('Remove to Cart')
        }else{
         setCounter(counter - 1);
         setCountval1('Add to Cart')}}
                                                                    //Button-2
                                                                    const [countval2,setCountval2]=useState('Add to card');
                                                                    const [btnstage2,setBtnstage2]=useState(true);
                                                                    const handleClick2 =()=>{
                                                                    setBtnstage2(!btnstage2);
                                                                    if(btnstage2){
                                                                    setCounter(counter + 1);
                                                                    setCountval2('Remove to Cart')
                                                                    }else{
                                                                    setCounter(counter - 1);
                                                                    setCountval2('Add to Cart')}}
//Button-3
const[countval3,setCountval3]=useState('Add to card');
const [btnstage3,setBtnstage3]=useState(true);
const handleClick3 =()=>{
setBtnstage3(!btnstage3);
if(btnstage3){
   setCounter(counter + 1);
   setCountval3('Remove to Cart')
}else{
setCounter(counter - 1);
setCountval3('Add to Cart')}}
                                                                        //Button-4
                                                                        const[countval4,setCountval4]=useState('Add to card');
                                                                        const [btnstage4,setBtnstage4]=useState(true);
                                                                        const handleClick4 =()=>{
                                                                        setBtnstage4(!btnstage4);
                                                                        if(btnstage4){
                                                                        setCounter(counter + 1);
                                                                        setCountval4('Remove to Cart')
                                                                        }else{
                                                                        setCounter(counter - 1);
                                                                        setCountval4('Add to Cart')}}
//Button-5
const[countval5,setCountval5]=useState('Add to card');
const [btnstage5,setBtnstage5]=useState(true);
const handleClick5 =()=>{
setBtnstage5(!btnstage5);
if(btnstage5){
   setCounter(counter + 1);
   setCountval5('Remove to Cart')
}else{
setCounter(counter - 1);
setCountval5('Add to Cart')}}
                                                                        //Button-6
                                                                        const[countval6,setCountval6]=useState('Add to card');
                                                                        const [btnstage6,setBtnstage6]=useState(true);
                                                                        const handleClick6 =()=>{
                                                                        setBtnstage6(!btnstage6);
                                                                        if(btnstage6){
                                                                        setCounter(counter + 1);
                                                                        setCountval6('Remove to Cart')
                                                                        }else{
                                                                        setCounter(counter - 1);
                                                                        setCountval6('Add to Cart')}}
//Button-7
const[countval7,setCountval7]=useState('Add to card');
const [btnstage7,setBtnstage7]=useState(true);
const handleClick7 =()=>{
setBtnstage7(!btnstage7);
if(btnstage7){
   setCounter(counter + 1);
   setCountval7('Remove to Cart')
}else{
setCounter(counter - 1);
setCountval7('Add to Cart')}}
  
 return (
    <div>
    <NavBar counter={counter}/>
    {/* <Header /> */}
       {/* <!-- Section--> */}
      <section className="py-5">
          <div className="container px-4 px-lg-5 mt-5">
              <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
 {/* //Card1                */}

                    <div className="col mb-5">
                    <div className="card h-100">
                        {/* <!-- Product image--> */}
                        <img className="card-img-top"
                         src="https://www.shutterstock.com/image-photo/bouquet-white-thrush-flowers-spring-260nw-1102204928.jpg" alt="..." />
                        {/* <!-- Product details--> */}
                        <div className="card-body p-4">
                            <div className="text-center">
                                {/* <!-- Product name--> */}
                                <h5 className="fw-bolder">{data[0].content}</h5>
                                 {/* <!-- Product reviews--> */}
                                
                                 
                          
                                {/* <!-- Product price--> */}
                                <span className="text-muted text-decoration-line-through">₹700 </span>
                                ₹{data[0].price}
                            </div>
                        </div>
                        {/* <!-- Product actions--> */}
                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div className="text-center">
                              <button className="btn btn-outline-dark mt-auto"
                               href="#" onClick={handleClick}>{countval}</button>
                              </div>
                        </div>
                    </div>
                </div>


{/* //Card2               */}

                  <div className="col mb-5">
                      <div className="card h-100">
                          {/* <!-- Product image--> */}
                          <img className="card-img-top" src="https://www.shutterstock.com/image-photo/bouquet-white-thrush-flowers-spring-260nw-1102204928.jpg" alt="..." />
                          {/* <!-- Product details--> */}
                          <div className="card-body p-4">
                              <div className="text-center">
                                  {/* <!-- Product name--> */}
                                  <h5 className="fw-bolder">{data[1].content}</h5>

                                  <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                                  {/* <!-- Product price--> */}
                                  <span className="text-muted text-decoration-line-through">₹590 </span>
                                  ₹{data[1].price}
                              </div>
                          </div>
                          {/* <!-- Product actions--> */}
                          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                              <div className="text-center">
                                <button className="btn btn-outline-dark mt-auto"
                                 href="#" onClick={handleClick1}>{countval1}</button>
                                </div>
                          </div>
                      </div>
                  </div>

{/* //Card3                */}
                  <div className="col mb-5">
                      <div className="card h-100">
                          {/* <!-- Sale badge--> */}
                          <div className="badge bg-dark text-white position-absolute"
                        //    style="top: 0.5rem; right: 0.5rem"
                           >Sale</div>
                          {/* <!-- Product image--> */}
                          <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Bauhinia_acuminata_31_08_2012_%281%29.jpg/2560px-Bauhinia_acuminata_31_08_2012_%281%29.jpg" alt="..." />
                          {/* <!-- Product details--> */}
                          <div className="card-body p-4">
                              <div className="text-center">
                                  {/* <!-- Product name--> */}
                                  <h5 className="fw-bolder">{data[2].content}</h5>
                                  {/* <!-- Product reviews--> */}
                                  <div className="d-flex justify-content-center small text-warning mb-2">
                                      <div className="bi-star-fill"></div>
                                      <div className="bi-star-fill"></div>
                                      <div className="bi-star-fill"></div>
                                      <div className="bi-star-fill"></div>
                                      <div className="bi-star-fill"></div>
                                  </div>
                                  {/* <!-- Product price--> */}
                                  <span className="text-muted text-decoration-line-through">₹600 </span>
                                  ₹{data[2].price}

                              </div>
                          </div>
                          {/* <!-- Product actions--> */}
                          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                              <div className="text-center">

                                <a className="btn btn-outline-dark mt-auto" href="#"
                                onClick={handleClick2}>{countval2}</a>
                                </div>
                          </div>
                      </div>
                  </div>
                  
{/* //Card4                */}                


                  <div className="col mb-5">
                      <div className="card h-100">
                          {/* <!-- Sale badge--> */}
                          <div className="badge bg-dark text-white position-absolute"
                        //    style={{top:"0.5rem"} ,{ right:"0.5rem"}}
                           >Sale</div>
                          {/* <!-- Product image--> */}
                          <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf50CrQG_yspu-WE557M1BxmtSRRersJ2EzQ&usqp=CAU" alt="..." />
                          {/* <!-- Product details--> */}
                          <div className="card-body p-4">
                              <div className="text-center">
                                  {/* <!-- Product name--> */}
                                  <h5 className="fw-bolder">{data[3].content}</h5>
                                 
                                  {/* <!-- Product price--> */}
                                  <span className="text-muted text-decoration-line-through">₹500 </span>
                                   ₹{data[3].price}
                              </div>
                          </div>
                          {/* <!-- Product actions--> */}
                          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                              <div className="text-center">

                                <a className="btn btn-outline-dark mt-auto" href="#"
                                onClick={handleClick3} >{countval3}</a>

                                </div>
                          </div>
                      </div>
                  </div>

{/* //Card5 */}
                  <div className="col mb-5">
                      <div className="card h-100">
                          {/* <!-- Product image--> */}
                          <img className="card-img-top" src="https://www.shutterstock.com/image-photo/bouquet-white-thrush-flowers-spring-260nw-1102204928.jpg" alt="..." />
                          {/* <!-- Product details--> */}
                          <div className="card-body p-4">
                              <div className="text-center">
                                  {/* <!-- Product name--> */}
                                  <h5 className="fw-bolder">{data[4].content}</h5>
                                  {/* <!-- Product reviews--> */}
                                  <div className="d-flex justify-content-center" >
                                      <div className="bi-star-fill"></div>
                                      <div className="bi-star-fill"></div>
                                      <div className="bi-star-fill"></div>
                                      <div className="bi-star-fill"></div>
                                      <div className="bi-star-fill"></div>
                                  </div>
                                  {/* <!-- Product price--> */}
                                  <span className="text-muted text-decoration-line-through">₹500 </span>
                                  ₹{data[4].price}
                              </div>
                          </div>
                          {/* <!-- Product actions--> */}
                          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                              <div className="text-center"><a className="btn btn-outline-dark mt-auto"
                               href="#" onClick={handleClick4}>{countval4}</a></div>
                          </div>
                      </div>
                  </div>

{/* //Card6 */}             
                     <div className="col mb-5">
                      <div className="card h-100">
                          {/* <!-- Sale badge--> */}
                          <div className="badge bg-dark text-white position-absolute" 
                        //   style="top: 0.5rem; right: 0.5rem"
                          >Sale</div>
                          {/* <!-- Product image--> */}
                          <img className="card-img-top" src="https://www.shutterstock.com/image-photo/bouquet-white-thrush-flowers-spring-260nw-1102204928.jpg" alt="..." />
                          {/* <!-- Product details--> */}
                          <div className="card-body p-4">
                              <div className="text-center">
                                  {/* <!-- Product name--> */}
                                  <h5 className="fw-bolder">{data[5].content}</h5>
                                  {/* <!-- Product price--> */}
                                  <span className="text-muted text-decoration-line-through">₹500 </span>                                  ₹{data[5].price}
                              </div>
                          </div>
                          {/* <!-- Product actions--> */}
                          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                              <div className="text-center">
                                <a className="btn btn-outline-dark mt-auto" href="#"
                                onClick={handleClick5}>{countval5}</a></div>
                          </div>
                      </div>
                  </div>
{/* //Card7 */}                
                     <div className="col mb-5">
                      <div className="card h-100">
                          {/* <!-- Product image--> */}
                          <img className="card-img-top" src="https://www.shutterstock.com/image-photo/bouquet-white-thrush-flowers-spring-260nw-1102204928.jpg" alt="..." />
                          {/* <!-- Product details--> */}
                          <div className="card-body p-4">
                              <div className="text-center">
                                  {/* <!-- Product name--> */}
                                  <h5 className="fw-bolder">{data[6].content}</h5>
                                  {/* <!-- Product price--> */}
                                  <span className="text-muted text-decoration-line-through">₹500 </span>
                                  ₹{data[6].price}
                              </div>
                          </div>
                          {/* <!-- Product actions--> */}
                          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                              <div className="text-center"><a className="btn btn-outline-dark mt-auto"
                               href="#" onClick={handleClick6}>{countval6}</a></div>
                          </div>
                      </div>
                  </div>
{/* //Card8 */}

                  <div className="col mb-5">
                      <div className="card h-100">
                          {/* <!-- Sale badge--> */}
                          <div className="badge bg-dark text-white position-absolute" 
                        //   style="top: 0.5rem; right: 0.5rem"
                          >Sale</div>
                          {/* <!-- Product image--> */}
                          <img className="card-img-top" src="https://www.shutterstock.com/image-photo/bouquet-white-thrush-flowers-spring-260nw-1102204928.jpg" alt="..." />
                          {/* <!-- Product details--> */}
                          <div className="card-body p-4">
                              <div className="text-center">
                                  {/* <!-- Product name--> */}
                                  <h5 className="fw-bolder">{data[7].content}</h5>
                                  {/* <!-- Product reviews--> */}
                                  <div className="d-flex justify-content-center small text-warning mb-2">
                                      <div className="bi-star-fill"></div>
                                      <div className="bi-star-fill"></div>
                                      <div className="bi-star-fill"></div>
                                      <div className="bi-star-fill"></div>
                                      <div className="bi-star-fill"></div>
                                  </div>
                                  {/* <!-- Product price--> */}
                                  <span className="text-muted text-decoration-line-through">₹500 </span>                                  ₹{data[7].price}
                              </div>
                          </div>
                          {/* <!-- Product actions--> */}
                          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                              <div className="text-center">
                                <a className="btn btn-outline-dark mt-auto" href="#"
                              onClick={handleClick7}>{countval7}</a></div>
                          </div>
                      </div>
                  </div>



              </div>
          </div>
      </section> 
    <Footer />
</div> 
  ) 
}

export default Home;
