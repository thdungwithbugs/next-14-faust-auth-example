import { getAuthClient, getClient } from "@faustwp/experimental-app-router";
import { gql } from "@apollo/client";
import { hasPreviewProps } from "./hasPreviewProps";
import { PleaseLogin } from "@/components/please-login";
import Container from "../_components/ui/Container";
import Image from "next/image";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Button from "../_components/ui/Button";
import DetailBanner from "../_blocks/Detailbanner";
import { LongArrowIcon } from "../_blocks/Slidertype2";

export function CheckboxComp() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  );
}
export function TextareaWithLabel() {
  return (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message">Your message</Label>
      <Textarea placeholder="Type your message here." id="message" />
    </div>
  );
}

export function InputWithLabel() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  );
}

const PhoneIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12.6675 13.5032L14.3036 11.8664C14.5239 11.6487 14.8027 11.4997 15.1061 11.4374C15.4095 11.3752 15.7244 11.4024 16.0127 11.5157L18.0067 12.3121C18.2979 12.4304 18.5477 12.6323 18.7245 12.8924C18.9013 13.1525 18.9971 13.459 19 13.7735V17.427C18.9983 17.6409 18.9534 17.8523 18.8678 18.0484C18.7823 18.2445 18.6581 18.4212 18.5025 18.568C18.3469 18.7148 18.1632 18.8285 17.9625 18.9024C17.7618 18.9763 17.5483 19.0088 17.3347 18.998C3.36224 18.1284 0.542915 6.29127 0.00972701 1.76099C-0.015024 1.53852 0.00759034 1.31333 0.0760821 1.10024C0.144574 0.887139 0.257391 0.690964 0.407111 0.524618C0.556831 0.358272 0.740062 0.225524 0.944748 0.135108C1.14943 0.0446917 1.37094 -0.00134385 1.59468 2.98626e-05H5.12249C5.4373 0.000962066 5.74463 0.0960917 6.00495 0.273183C6.26528 0.450274 6.46669 0.701229 6.58328 0.993768L7.37941 2.98855C7.49646 3.27576 7.52632 3.59111 7.46527 3.8952C7.40422 4.19929 7.25495 4.47864 7.03613 4.69836L5.40004 6.33511C5.40004 6.33511 6.34225 12.714 12.6675 13.5032Z"
        fill="white"
      />
    </svg>
  );
};

export default async function Page(props: { params: { slug: string } }) {
  const slug = props.params.slug;
  const isPreview = hasPreviewProps(props);

  let client = isPreview ? await getAuthClient() : await getClient();

  if (!client) {
    return <PleaseLogin />;
  }

  /**
   * There is currently a bug in WPGraphQL where you can not query for previews
   * using the contentNode type. This bug will need to be resolved for preview
   * functionality in the below query to work properly. For now, it returns
   * the production ready data for the given contentNode regardless if
   * asPreview is true or false.
   *
   * @see https://github.com/wp-graphql/wp-graphql/issues/1673
   */
  const { data } = await client.query({
    query: gql`
      query GetContentNode($uri: ID!, $asPreview: Boolean!) {
        contentNode(id: $uri, idType: URI, asPreview: $asPreview) {
          ... on NodeWithTitle {
            title
          }
          ... on NodeWithContentEditor {
            content
          }
          date
        }
      }
    `,
    variables: {
      uri: slug,
      asPreview: isPreview,
    },
  });

  return (
    <main>
      {/* <h2>{data?.contentNode?.title}</h2>
      <div
        dangerouslySetInnerHTML={{ __html: data?.contentNode?.content ?? "" }}
      /> */}

      <DetailBanner />
      {/* Post detail */}
      <Container className="grid grid-cols-1 lg:grid-cols-[_auto,500px] items-start relative py-[178px] gap-14">
        <section className="flex flex-col">
          <article className="w-full mx-auto lg:mb-[64px] flex flex-col">
            This is detail post...
          </article>

          <div className="h-[1px] w-full bg-[#C4C4C4] lg:mb-24" />

          {/* Form Reply */}
          <div>
            <h3 className="text-3xl font-semibold">Leave a Reply</h3>
            <span className="block mt-4 text-sm mb-9">
              Your email address will not be published. Required fields are
              marked *
            </span>
            <div className="flex flex-col gap-6">
              <InputWithLabel />
              <TextareaWithLabel />
              <CheckboxComp />
              <Button htmlType="submit" className="text-white bg-black">
                Post Comment
              </Button>
            </div>
          </div>
        </section>

        <div className="flex flex-col gap-14">
          <div className="flex flex-col gap-6 px-6 pt-6 rounded-lg shadow-xl pb-14">
            <h4>Recent Post</h4>
            {[0, 1, 2].map((item, index) => (
              <div key={index} className="flex items-center gap-6">
                <Image
                  src={
                    "https://images.unsplash.com/photo-1707046427366-9501870756a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  alt="avatar"
                  width={150}
                  height={99}
                  className="relative object-contain object-center h-[99px] w-[150px]"
                />
                <div className="flex flex-col justify-between flex-1 gap-3">
                  <span className="text-lg leading-[27px] font-medium">
                    Travel Stories for Now and the Future
                  </span>
                  <span className="font-light text-lg leading-[33px]">
                    14 Dec 2022
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-6 px-6 pt-6 rounded-lg shadow-xl pb-14">
            <h4>Catagories</h4>
            {[0, 1, 2, 3].map((item, index) => (
              <div key={index} className="flex flex-col gap-3">
                <div className="flex items-center gap-5">
                  <LongArrowIcon /> <span>Travel</span>
                </div>
                <div className="h-[1px] w-full bg-[#C4C4C4]" />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-6 px-6 pt-6 bg-black rounded-lg shadow-xl pb-14">
            <h4 className="text-white">Have Any Question?</h4>
            <span className="text-white leading-[22px]">
              Do not hesitage to give us a call. We are an expert team and we
              are happy to talk to you.
            </span>
            <div className="flex flex-col gap-4 pt-8">
              {[0, 1].map((item, index) => (
                <div className="flex items-center gap-4">
                  <PhoneIcon />
                  <span className="text-white">+62 6943 6956</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
