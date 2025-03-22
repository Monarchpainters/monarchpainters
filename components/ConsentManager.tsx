// 'use client';

// import { ReactNode, useEffect } from 'react';
// import { CookieBanner } from './CookieBanner';
// import Script from 'next/script';
// import { useCookieConsent } from '@/hooks/use-cookie-consent';

// interface ConsentManagerProps {
//   children?: ReactNode;
//   privacyPolicyUrl: string;
//   googleTagManagerId?: string;
// }

// export function ConsentManager({
//   children,
//   privacyPolicyUrl,
//   googleTagManagerId = 'GTM-NXNZWJVK',
// }: ConsentManagerProps) {
//   const { hasConsented, isLoaded } = useCookieConsent();

//   // Add console logging to track consent status
//   useEffect(() => {
//     if (isLoaded) {
//       const timestamp = new Date().toISOString();
//       if (hasConsented) {
//         console.log(`%c[${timestamp}] COOKIE CONSENT: ACCEPTED ✅`, 'color: green; font-weight: bold');
//         console.log('%cGoogle Ads tracking is ACTIVATED', 'color: green');
//       } else {
//         console.log(`%c[${timestamp}] COOKIE CONSENT: NOT GIVEN ❌`, 'color: red; font-weight: bold');
//         console.log('%cGoogle Ads tracking is BLOCKED', 'color: red');
//         console.log('%cUser must accept cookies to enable tracking', 'color: gray');
//       }
//     }
//   }, [isLoaded, hasConsented]);

//   return (
//     <>
//       {/* Google Tag Manager - only load if consent is given */}
//       {isLoaded && hasConsented && (
//         <>
//           <Script id="gtm-script" strategy="afterInteractive"
//             onLoad={() => {
//               console.log('%cGoogle Tag Manager script loaded successfully', 'color: green; font-weight: bold');
//             }}
//             onError={() => {
//               console.error('%cFailed to load Google Tag Manager script', 'color: red; font-weight: bold');
//             }}
//           >
//             {`
//               (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//               new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//               j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//               'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//               })(window,document,'script','dataLayer','${googleTagManagerId}');
//               console.log('%cGoogle Tag Manager initialized with ID: ${googleTagManagerId}', 'color: green');
//             `}
//           </Script>
//         </>
//       )}

//       {/* Google Ads - only load if consent is given */}
//       {isLoaded && hasConsented && (
//         <>
//           <Script
//             src="https://www.googletagmanager.com/gtag/js?id=AW-10890849904"
//             strategy="afterInteractive"
//             onLoad={() => {
//               console.log('%cGoogle Ads script loaded successfully', 'color: green; font-weight: bold');
//             }}
//             onError={() => {
//               console.error('%cFailed to load Google Ads script', 'color: red; font-weight: bold');
//             }}
//           />
//           <Script id="google-ads" strategy="afterInteractive">
//             {`
//               window.dataLayer = window.dataLayer || [];
//               function gtag(){dataLayer.push(arguments);}
//               gtag('js', new Date());
//               gtag('config', 'AW-10890849904');
//               console.log('%cGoogle Ads initialized', 'color: green');
//             `}
//           </Script>
//         </>
//       )}

//       {/* Cookie consent banner */}
//       <CookieBanner privacyPolicyUrl={privacyPolicyUrl} />

//       {/* Render children */}
//       {children}
//     </>
//   );
// }