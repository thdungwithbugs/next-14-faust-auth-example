import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import React from "react";

// const BlockDynamicImport = dynamic(()=>import('../BlockDynamicImport'), {
//     ssr: false
// })

export const getBlocksFuntion = async (name: string) => {
  // For blocks need dynamic import
  switch (
    name
    // case 'BlockDynamicImport':
    //   return BlockDynamicImport;
  ) {
  }
  return (await import("../" + name)).default;
};

export default async function BlocksUI({
  data,
  lang,
  detail,
}: {
  data: any;
  lang: string;
  detail?: any;
}) {
  const Blocks = {};

  await Promise.all(
    data.map(async (item: any) => {
      const blockName = item?.__typename
        .replace(/^PageBuilderBlocks/, "")
        .replace(/Layout$/, "");
      Blocks[blockName] = await getBlocksFuntion(blockName);
    })
  );

  return (
    <>
      {data?.map((item: any, index: number) => {
        const blockName = item?.__typename
          .replace(/^PageBuilderBlocks/, "")
          .replace(/Layout$/, "");
        let Block = null;
        Block = Blocks[blockName];
        if (!Block) return <></>;
        return (
          <React.Suspense
            fallback={
              <div className="container grid min-h-screen place-items-center">
                Loading...
              </div>
            }
            key={`${item?.__typename}-${index}`}
          >
            <Block key={blockName + index} lang={lang} {...item} />
          </React.Suspense>
        );
      })}
    </>
  );
}
