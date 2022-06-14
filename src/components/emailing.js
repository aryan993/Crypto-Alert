import data from './mock-data.json'
//import emailjs from '@emailjs/browser';
export const one = (pricelist,currency) => {
  //console.log(pricelist);
  for(let key in pricelist){
      //console.log(pricelist[key])
      if(currency==='USD'){
        data[key]?.usd.forEach(element => {
          if(pricelist[key]===element){
              emailings(pricelist[key]);
          }    
      });
      }
      if(currency==='INR'){
        data[key]?.inr.forEach(element => {
          if(pricelist[key]===element){
              emailings(pricelist[key]);
          }    
      });
      }        
  }
}
  //code for email sending on call
  const emailings = (a) => {
    alert("the price target has been reached")
    alert("This should send an email to the user but that function is disabled now")
    alert("if required kindly change the code and enter your own key of emailjs")
   {/* emailjs.init("nlvIIXOCzN0Vr2PcS")
    var tempParams = {
      from_name: 'Aryan',
      to_name: 'Sanjay',
      message: a
    };
    emailjs.send('service_sjksxgh', 'template_wnra7ie', tempParams).then(function (res) {
      console.log("sucess", res.status);
    })
  */}
  }

