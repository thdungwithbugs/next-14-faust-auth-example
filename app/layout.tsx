import type { Metadata } from "next";
import "./globals.css";

import { Rubik } from "next/font/google";

import Footer from "./_blocks/Footer";
import HeaderMenu from "./_blocks/Headermenu";
import SubcribeSection from "./_blocks/Subcribesection";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coding test by HDung",
  description: "Coding test by HDung desc",
};

// const client = contentful.createClient({
//   space: process.env.CONTENTFUL_SPACE_ID!,
//   accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
// });

export const revalidate = 3600;

// export async function fetchGetEntry() {
//   try {
//     const response = await fetch(graphQlContentfulUrl, {
//       method: "POST",
//       body: JSON.stringify({ query: contentfulQuery }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const responseData = await response.json();

//     return responseData;
//   } catch (error) {
//     console.error("Error occurred while fetching data:", error);
//   }
// }

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <HeaderMenu />
        <div className="">{children}</div>
        <SubcribeSection />
        <Footer />
      </body>
    </html>
  );
}
