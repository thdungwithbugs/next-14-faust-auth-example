import { gql } from "@apollo/client";
import { getClient } from "@faustwp/experimental-app-router";
import React from "react";
import BlocksUI from "./_blocks/utils/getBlocks";

// const queryGetBlocksByPageSlug = `
// query GetBlocksByPageSlug {
//   page(id: "home", idType: URI) {
//     pageBuilder {
//       blocks {
//         ... on PageBuilderBlocksHerobannerLayout {
//           buttonHref
//           content
//           note
//           title
//           imageBackground {
//             node {
//               title
//               altText
//               sourceUrl
//             }
//           }
//         }
//         ... on PageBuilderBlocksSlidertype1Layout {
//           aboveTitle
//           upperTitle
//           silderList {
//             slideDescription
//             slideTitle
//             slideImage {
//               node {
//                 title
//                 sourceUrl
//                 altText
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }
// `;

// export async function fetchGetEntry() {
//   try {
//     const response = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_URL, {
//       method: "POST",
//       body: JSON.stringify({ query: queryGetBlocksByPageSlug }),
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

export default async function Home({ params: { lang } }) {
  let client = await getClient();
  const { data } = await client.query({
    query: gql`
      query GetBlocksByPageSlug {
        page(id: "home", idType: URI) {
          pageBuilder {
            blocks {
              ... on PageBuilderBlocksHerobannerLayout {
                buttonHref
                content
                note
                title
                imageBackground {
                  node {
                    title
                    altText
                    sourceUrl
                  }
                }
              }
              ... on PageBuilderBlocksSlidertype1Layout {
                aboveTitle
                upperTitle
                silderList {
                  slideDescription
                  slideTitle
                  slideImage {
                    node {
                      title
                      sourceUrl
                      altText
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  const { blocks } = data?.page?.pageBuilder ?? [];

  return (
    <main>
      <BlocksUI data={blocks} lang={lang} />
    </main>
  );
}
