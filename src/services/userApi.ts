"use server"

import { client } from "@/sanity/lib/client";
import { auth, currentUser } from "@clerk/nextjs/server"

export async function getClerk_UserData(){   // Clerk website se User ka data mangwany wala Function
   const {userId} = await auth();    // user id nikali
   const user = await currentUser(); // user name email picture waghera waghera. 


// console hamne isliye lgaye taky ham dekh saken Clerk se data aa bhi rha hai ya nahi or agr aa rha hai to kahn kahn rakha hua hai.

//    console.log("❤  UserId", userId);  // User id mili
//    console.log("🤬 User", user);      // User Object with multiple propertys

//    console.log("🤦‍♀️ User Name", `${user?.firstName} ${user?.lastName}`);  // User FirstName and LastName
//    console.log("🤬 User", user?.externalAccounts[0].emailAddress);    // array ke 0 index waly object ke andar se (emailAddress) ki property nikal rhy hain.
//    console.log("🤬 User", user?.imageUrl); 


   const userName = `${user?.firstName} ${user?.lastName}`
   const userEmail = user?.externalAccounts[0].emailAddress
   const userImage = user?.imageUrl

//    console.log(userName, userEmail, userImage); // last time confirm data a rha hai variable se hokar ya nahi.

   return{  // in propertys ko return krwa diyya ab jo bhi ye function chlaega usy in propertys ka data milega.
      userId,
      userName,
      userEmail,
      userImage
   }
}


export async function Sending_UserData_ToSanity(){  // Sanity CMS pe user ka data bhejne wala function.

   const user =  await getClerk_UserData() // is function ko yahn call krwa ke iske andar ka sra data variable mein nikal liya.

   const UserObject = {
      _type: "user",
      _id: `user-${user.userId}`,
      name: user.userName,
      email: user.userEmail,
      userId: user.userId,
      userImage: user.userImage
   }

   const res = client.createOrReplace(UserObject)  // is function ko id zror chahiye hoti hai data bhejne ke liye => _id:"dae2ac80-dce8-403c-8253-86fa658b7e01",

   return res
}