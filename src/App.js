import "./styles.css";
function PDetails(){
  
  const pdeatils = {
    head: "PRODUCT DETAILS",
    desc : "This season set a sporty fashion trend with the HRX Men's Athleisure T-shirt. This striped casual T-shirt can be worn on its own or layered under a jacket or a hoodie.",
    listofFeature : [{
      fTittle1: "Features",
       fDesc1: "Athleisure T-shirt can be paired with tracks, khakis or jeans",
       style:"Round Neck",
      sleeve: "Short Sleeves",
     colour: "Teal",
     print: "Geometric",
     fit: "Regular",
    }, {
      fTittle2: "Size & Fit",
      fDesc2: "The model (height 6') is wearing a size M",
      },{
        fTittle3: "Material & Care",
        fDesc3 : ["100% cotton","Machine-wash"]
      }]

  }
const{head,desc, listofFeature: [{fTittle1,fDesc1,style,sleeve,colour,print,fit},{fTittle2,fDesc2},{fTittle3,fDesc3}]} = pdeatils  
 
return(

    <>
    <div className="details-box">
      <div className="pdetails-first-box">
        <div className="pDetails-heading"> {head} </div>
        <div> {desc}</div>
        <div className="pdetails-second-box">
          <div className="pDetails-subheading"> {fTittle1}</div>
          <div> {fDesc1}</div>
          <div> {style}</div>
          <div> {colour}</div> 
          <div> {print}</div>
          <div> {fit}</div>
        </div>
        <div className="pdetails-third-box">
             <div  className="pDetails-subheading"> {fTittle2} </div>
             <div  className=""> {fDesc2} </div>

        </div>
        <div className="pdetails-fourth-box">
             <div  className="pDetails-subheading"> {fTittle3} </div>
             <div  className=""> {fDesc3} </div>

        </div>

      </div>
      
      
       </div>
    
  </>
  )
}
export default function App() {
  return (
    <div className="App">
    <PDetails/> 
    </div>
  );
}
