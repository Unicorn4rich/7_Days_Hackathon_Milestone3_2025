import Category from "@/components/category";
import Hero from "@/components/hero";
import LogoFeature from "@/components/logoFeature";
import OurProduct from "@/components/ourProduct";

export default function Home() {
  return (
    <div className=" md:px-[300px]">
        <Hero/>
        <LogoFeature/>
        <Category/>
        <OurProduct/>
    </div>
  );
}




/* NOTES


Creat new Sanity project command

npm create sanity@latest -- --create-project "E Commerce Furtniture Figma" --dataset production --template clean

landingPage => file data extension or schema ka naam same rakhenge.


gpt command for groq query presentaing data


make an final object of groq having 4 propertiese of heroImg, heroSmHeading, heroHeading, herobtnText,
from this Output

""

I am getting this output from this 
*[_type == 'landingPage']



<----------------------------------------------MockAPi Sanity--------------------------------------------->  
Snipcart Website for => Add to Cart + Checkout + Biling method   

Ye functionality total 3 files mein apply ho rhi hai hai. 
1. layout.tsx
2. env.local file.
3. Dynamic page.
or iske Code mein total 4 steps hain layout mein kuch COde likhna hai uske bad env.local mein snipcart ki api key deni hai
or last mein dynamicpage par jaa kar fcomponent ke opar aik object lgana hai or button ke click par aik function chlana hai bas.



1- Sign Up for Snipcart

2- Get Your API Key

3- <head>
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css"/>
   </head>


4- (body me add karna he)
	<Script
          src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js"
          strategy="afterInteractive"/>

         <div hidden id="snipcart" data-api-key={process.env.NEXT_PUBLIC_SNIPCART_API_KEY} data-config-modal-style="none"></div>                => after div + NEXT_PUBLIC_SNIPCART_API_KEY => past in env file


5- (dynamic page)
	declare global {
  		interface Window {
    		Snipcart: any;
  		}}


6- (add to cart btn ke onclick par function chalega)
 const handleAddToCart = () => {
      window.Snipcart.api.cart.items.add({
      id: heading,
      name: heading,
      price: price,
      url: `/products/productDetail?heading=${heading}&subHeaeding=${subHeaeding}&price=${price}&src=${src}`,
      description: subHeaeding,
      image: src,
    });
  };




<----------------------------------------------MockAPi Sanity--------------------------------------------->  
mock APi for sanity


1. conect Next.js project to sanity project.
2. fetch mockApi data in .ts file and check the data.
3. conect APi develeper token of sanity project to .env.local file.
4. get lib client.ts file and make (useCdn: false,) and then create => token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN, <= Apitoken id variable.
5. check console of every respose in fetched data.
6. make schema for mockApi fetched data recived and import index.ts.
7. write fetched vision query to import cards data fron sanity in code.
8. pass that data to component to show in page.



<----------------------------------------------Add to Cart functionality--------------------------------------------->  

1. Add cart button ke link se query parameter se data bhejna hai cart ke route mein.
2. client component mein is useSearchParams() hook se hamne wo values get karli jo bheji thi.



<----------------------------------------------Extra tips--------------------------------------------->  

{[1,2,3].map((_, index: number)=>{
                return()
                })}

return ke andar ham jo bhi likhenge wo 3 bar repeat ho kar show hoga kiyun ispe hamne loop chala diyya hai.

<----------------------------------------------Extra tips--------------------------------------------->  
for cart 


const price = [10, 3, 5, 2]

const final = price.reduce((total, item)=>{return total + item }, 0)
console.log(final) output: 20 

for summry:
{cartItem.reduce((total: number, item_Objct: Dyn_Data)=>{ return total + (+item_Objct.newPrice * item_Objct.quantity) }, 0)} 

Total summry nikal rhy hain jitne bhi Object Cards hain unki jo prices hain hain mein unko usi Object ki quanitity ke sath multiply kardo. 




<----------------------------------------------Clerk Authintication Form--------------------------------------------->  
Clerk Auth

Clerk ek authentication aur identity management platform hai jo aapki web apps mein login, signup aur user profiles add
karna asaan banata hai. Ismein pre-built components aur modern security features shamil hain.


1. Sign Up for Clerk
2. Clerk Authentication Website Next.js Docs... => SDK References => Next.js => Guides => (Add a custom sign-in-or-up page) and Enter this page.
3. Copy and make route => sign-in/[[...sign-in]] => page.tsx => copy Code of this Box => past in page.tsx
4. install => npm i @clerk/nextjs
5. make file in Src directory => middleware.ts
6. .env.local => NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
7. npm run dev => Error => Missing publishableKey for API key
8. Clerk Dashborad => Overvew => Step 2 => env.local and Box Code => past in .env.local
9. Error for <ClerkProvider /> => layout.tsx => <ClerkProvider> (html) </ClerkProvider> = after return beafore html.
10. make button in Header => <UserButton/> => for log id
11. Benifit => User sign-In karne par uska data hmare Clerk Dashborad par save ho jaega.
Now We get User_Data from CLerk.
12. In Products route create useEffect() and run function is init => Create this function in services folder => userApi.ts
13. Get propertys from auth and currentUser => userName, Email, Id, Picture.
14. Make schema in schemaTypes folder for => sanity after succesfully getting Userdata from => Clerk.
15. Create anthoer function in => userApi.ts to send data in sanity CMS
16. function Call in ussEffect() jo sanity CMS mein data bhej rha hai and then get User data in sanity succecfully, 



Details....


/sign-in(.*)

localhost 300 => sign-in page =>  (.*) iska matlab sign-in ke page ke bad url mein kuch bhi likha hua aye acceptible hai
ye isliye likhty hain ke hamne query parameter bhi bhejna hota hai url mein.

request
browser ko request karte hain ti hamne page milta hai.
auth
iske andar user ka sara data hota hai uska naam number email address.


[ '/sign-in(.*)', '/', '/products', '/products/id(.*)' ]

website mein ('/sign-in(.*)') ka page bagher Authentication ke users ko show hoga, ('/') Home ka page, ('/products') ka route,
'/products/id(.*)' or localhost 300 ke andar products ka jo route hai uske andar jo (id) dynamic page hai wo open ho or (.*) uske 
url mein jo query-parameter aaen wo sab show hon matlab ye ke isme jin jin pages ko ham likhnege wo sirf wo page show honge baqi nahi.


<----------------------------------------------Clerk Authintication Admin Page--------------------------------------------->  
Admin Page
Admin Page Protect & any Other page protect with Clerk Authintication


middleware.ts
ye file bydefault server component hoti hai or ye client component mein aisy nahi chalti.


Admin page
is page ki authentication ham (middleware) se bhi kar sakty hain or (Component) se bhi.


Make User Admin
Jis bande ko bhi Admin dashborad ka ccess dena hai yani usko Admin bnana hai to ye step karne honge.

1. Clerk Website Dashborad => Users tab => Click On User => Metadata => Public => Click Edit => Change Code => Save

2. By default Code
   {
    "example": "data"
   }


3. Changing Code
   {
    "role": "admin"
   }


Ab wo User Succesfully Admin ban chuka hai.   

4. Go to Admin Component Page and import => import { useUser } from '@clerk/nextjs' => and then Console => Get Object of 3 propertys => isLoaded, isSignedIn, user.
5. If you dont want to change your Admin component in ("use client") then make => Component and get in your => Admin component.
6. Destructre Propertys => const {isLoaded, isSignedIn, user} = useUser() => Check Console agian for confirmation.
7. Create useEffect() hook => make conditions for Admin & Normal user for giving them to access according to their role.









































*/