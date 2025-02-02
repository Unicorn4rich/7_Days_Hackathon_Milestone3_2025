import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher([ '/sign-in(.*)', '/', '/products', '/products/id(.*)', '/pagess', '/about-us', '/studio(.*)' ])

export default clerkMiddleware(async (auth, request) => { 
  if (!isPublicRoute(request)) { // (request) jis page ki request ki hai wo (isPublicRoute) ke andar wo page hai to usy dey do warna nahi.
    await auth.protect()
  }
})

export const config = {
  runtime: "nodejs",
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}