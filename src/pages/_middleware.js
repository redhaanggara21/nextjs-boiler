import { NextResponse, NextRequest, NextFetchEvent } from "next/server";

export const config = {
  matcher: '/',
};

export function middleware(req, ev) {

  const basicAuth = req.headers.get('authorization');


  console.log("middleware");
  console.log(req);

  // if (basicAuth) {
  //   const auth = basicAuth.split(' ')[1];
  //   const [user, pwd] = Buffer.from(auth, 'base64').toString().split(':');

  //   if (user === 'user' && pwd === 'password') {
  //     return NextResponse.next();
  //   }
  // }

  // return new Response('Auth required', {
  //   status: 401,
  //   headers: {
  //     'WWW-Authenticate': 'Basic realm="Secure Area"',
  //   },
  // });


  // return NextResponse.rewrite("/underConstraction");
}

function generateNewUrl(url) {
    return url;
}