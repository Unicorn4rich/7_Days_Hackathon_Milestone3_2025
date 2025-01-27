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


*/