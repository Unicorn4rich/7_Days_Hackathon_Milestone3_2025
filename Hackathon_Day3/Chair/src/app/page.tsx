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



Snipcart Website for => Add to Cart + Checkout + Biling method   

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






*/