"use server"
import { client } from "@/sanity/lib/client";

interface Category {
  _id: string;
  title: string;
}

interface Product {
  _id: string;
  title: string;
  price: number;
  priceWithoutDiscount: number | null;
  category: Category;
  tags: string[];
  badge: string | null;
  imageUrl: string;
  description: string;
  inventory: number;
}

const BASE_URL = "https://giaic-hackathon-template-08.vercel.app"; //Main url

async function UploadImageToSanity(imageUrl: string){  // image ka url yahn aya. 
   try{

    const res = await fetch(imageUrl);    // phir hamne us url se image ko fetch krwaya.
    if (!res.ok) throw new Error(`Failed to fetch image, ${res.statusText}`)  // response okay na ho to ye error aega.
    const blob = await res.blob()   // image ko blob mein convert krwaya.

    const asset = await client.assets.upload('image', blob);  // sanity par image bhejne ke bad return mein result aega image ka.
    // console.log("😡", asset); // checked image return data => 'image-b03c0230ab8a5afd5e6208be8560e4ded88aea05-679x513-jpg'

    return asset;  // phir us image ke normal string ke result ko hamne return krwa diyya function ko.


   } catch (error){  // image fetch na ho to ye error aye.
    console.error("Image upload Failed", error);
    throw error;
   }
}


// Products Cards
export async function fetchCardsData(){ // is function ko kisi bhi route page mein call krwa ke iska data check kar lenge. 
  try{

// Products Card data fetch
    const response = await fetch(`${BASE_URL}/api/products`);  // Get request to MockApi.
    // console.log("😡", response); // check fetched data

    if (!response.ok) throw new Error(`Failed to fetch products, ${response.statusText}`) // response agr okay na ho to error dey dega.
    const products =  await response.json(); // json mein convert ka rke varibale mein save krwa diyya.
    // console.log("😡", products);


// Category Data fetch
    const categoryResponse = await fetch(`${BASE_URL}/api/categories`);
    
    if(!categoryResponse.ok) throw new Error(`Failed to fetch categories, ${categoryResponse.statusText}`)
      const catData = await categoryResponse.json();
    // console.log("😫", catData);

    const categoryIdMap: { [key: string]: string } = {}; // Map to store migrated category IDs


//  Category data function sanity upload   
    for(const Caty of catData){
     const imageAsset = await UploadImageToSanity(Caty.imageUrl);

     const CategoryData = {
      _id: `category-${Caty._id}`,
      _type: "categories",
      title: Caty.title,
      image: {
        _type: 'image',
        asset: {
       _type: 'reference',
       _ref: imageAsset._id,  // imageAsset variable mein jourl ko convert kiyya hai normal wo ab isme pass kar rhy hain.
      },

      }}

      const result = await client.createOrReplace(CategoryData);
      categoryIdMap[Caty._id] = result._id; // Store the new category ID
    }


// Products Card data function sanity upload
    const UploadProductsData = products.map(async (product: Product) => { // array ke har aik object ko aik aik kar ke get kar rhy hain.
//          return save
       const imageAsset = await UploadImageToSanity(product.imageUrl); // product image ke url ko as an argument (UploadImageToSanity) ke function ko pass kar rhy hain.

        const SanitySend_Object = {       // ye pora ka pora object vision mein Grock query mein jo object milta hai wo hai same to same.
            _id: `products-${product._id}`,
            _type: "products",
            title: product.title,
            price: product.price,
            priceWithoutDiscount: product.priceWithoutDiscount,
            badge: product.badge,
            tags: product.tags ? [product.tags] : [],
              description: product.description,
              inventory: product.inventory,
              category: {
                    _type: "reference",
                    _ref: categoryIdMap[product.category._id], // Use the migrated category ID
                  },
              image: {
                _type: 'image',
                asset: {
                  _type: 'reference',
                  _ref: imageAsset._id,  // imageAsset variable mein jourl ko convert kiyya hai normal wo ab isme pass kar rhy hain.
                },
              },
        }


        await client.createOrReplace(SanitySend_Object); // sanity ke opar is object data ko bhejega is baat ka khayal rakhega ke data dublicate send na ho.
    });


    await Promise.all(UploadProductsData); // jab tak sary promise resolve na ho jaen tab tak wait kare uske bad hamen data show krwa dey.

  } catch (error){
    console.error("Unable to load products. Please try again later", error);
    throw error; 
  }

}


