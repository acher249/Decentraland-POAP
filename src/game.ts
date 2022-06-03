import { createDispenser } from './booth/dispenser'

createDispenser(
  {
    position: new Vector3(8, 0, 8),
    rotation: Quaternion.Euler(0, 0, 0)
  },
  'f9243e52-3b17-47fa-bd42-5e40208f3209'
)

// AJC Next Steps

// created postman collection for POST calls to get back UUID and add claim codes to the event.
// When making POST call to get the UUID you need to input the correct lat longs for the event.
// on first try I put the actual x/y of the event but then tested on my own parcel, and of course id not work.
// I also took out the timer before you can grab the POAP in dispenser.ts

// then need to use UUID above, and deploy

// next create final Poap Event, and integrate into main larger scene. 
// Make sure to be carefull inputting the information and create a backup POAP in case you need it,
