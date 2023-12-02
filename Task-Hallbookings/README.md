# Hall Booking API

# Rendered Information

This document provides essential information about the Hall Booking API project, including relevant URLs and the last committed hash ID.

## Render URL

- **URL:** [https://hallbooking-p7rj.onrender.com](https://hallbooking-p7rj.onrender.com)

## API Endpoints

### Create a Room

This API endpoint allows you to create a new room with details such as the number of seats, amenities, and price per hour.

**URL:** https://hallbooking-p7rj.onrender.com/createroom

**Method:** POST
**schema** :  {
      "roomNumber" : 3,
    "seatsAvailable" : 550,
         "amenities" : "Wi-fi,Washing Machine,Air-conditioning",
       "pricePerHour" : "$850"
    }

### Book a Room

This API endpoint allows you to book a room for a specific customer with details like customer name, date, start time, end time, and room ID.

**URL:** https://hallbooking-p7rj.onrender.com/bookroom

**Method:** POST

**Schema :** {
     "roomId" : 1,
    "customerName" :"Hariharsudhan",
    "date": "02-12-2023",
    "startTime": "09:00",
    "endTime": "14:00"
   
   
}

### List All Rooms with Booked Data

This API endpoint retrieves a list of all rooms with their booking status, customer names, date, start time, and end time.

**URL:** https://hallbooking-p7rj.onrender.com/roomswithbookings

**Method:** GET

### List All Customers with Booked Data

This API endpoint retrieves a list of all customers with their booked room names, date, start time, and end time.

**URL:** https://hallbooking-p7rj.onrender.com/customerswithbookings

**Method:** GET

### Count How Many Times a Customer Has Booked

This API endpoint allows you to count how many times a specific customer has booked a room.

**URL:** https://hallbooking-p7rj.onrender.com/customerhistory/:customerName

**Method:** GET

## GitHub Repository

- **URL:** [https://github.com/sudhansmart/B49-Task-Resubmission.git](https://github.com/sudhansmart/B49-Task-Resubmission.git)

---
