import { type SchemaTypeDefinition } from 'sanity'
import { aboutAndImage } from './About-page/aboutAndImage'
import { AboutPage } from './About-page/AboutPage'
import { brandInfo } from './About-page/brandInfo'
import { landingPage } from './All-landingPage-sections/landingPage'
import { hero } from './All-landingPage-sections/hero'
import { featureTopLogos } from './All-landingPage-sections/featureTopLogos'
import { featureProduct } from './All-landingPage-sections/featureProduct'
import { header } from './All-landingPage-sections/header'
import { categoriesData } from './All-landingPage-sections/categoriesData'
import { categoriesDataTwo } from './All-landingPage-sections/categoriesDataTwo'
import { ourProducts } from './All-landingPage-sections/ourProducts'
import { cardsSection } from './Product-page-Sections/cardsSection'
import { cardBottomSection } from './Product-page-Sections/cardBottomSection'
import { populerProducts } from './About-page/populerProducts'
import { varifications } from './Contact_Page/Varifications'
import { touchUS } from './Contact_Page/touchUS'
import { questions } from './questions-page/Questions'
import { ProductPage } from './Product-page-Sections/ProductPage'
import { ContactPage } from './Contact_Page/ContactPage'



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [

    // Home page alla sections
    landingPage, 
    hero, 
    featureTopLogos, 
    featureProduct, 
    header,
    categoriesData, 
    categoriesDataTwo, 
    ourProducts,

    // Products Route page all section
    ProductPage,
    cardsSection,
    cardBottomSection,

    // About Route Page
    AboutPage,
    aboutAndImage,
    brandInfo,
    populerProducts,

    // Contact Route Page
    ContactPage,
    varifications,
    touchUS,

    // question route
    questions,

  ],  // files names write and export
}
