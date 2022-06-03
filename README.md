# Decentraland-POAP


Poap System for Decentraland. 

// AJC Next Steps  
  
// created postman collection for POST calls to get back UUID and add claim codes to the event.  
// When making POST call to get the UUID you need to input the correct lat longs for the event.  
// on first try I put the actual x/y of the event but then tested on my own parcel, and of course id not work.  
// I also took out the timer before you can grab the POAP in dispenser.ts  

// then need to use UUID above, and deploy

// next create final Poap Event, and integrate into main larger scene. 
// Make sure to be carefull inputting the information and create a backup POAP in case you need it.
  
//-----------------------------------------------
  
npm i  
dcl start  
dcl deploy  
  
// use postman POST call to create UUID (add location in DCL)  
// use postman POST call to Add claim codes to the event  
https://docs.decentraland.org/development-guide/poap-tokens/

// create poap event in the system. Keep edit code safe.  
https://app.poap.xyz/admin/events/new

// example repo to follow  
https://github.com/decentraland-scenes/POAP-Booth
