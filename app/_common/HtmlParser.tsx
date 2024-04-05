import clsx from "clsx";
import { CSSProperties } from "react";

interface HtmlParserProps {
  data?: string;
  className?: string;
  style?: CSSProperties;
  as?: React.ElementType;
  applyPresetClass?: boolean;
}

const IconChecked = `<svg
                  class='mr-1 relative top-[6px]'
                  style='display: inline;'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    opacity='0.4'
                    d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
                    fill='#FF37A5'
                  />
                  <path
                    d='M10.5799 15.58C10.3799 15.58 10.1899 15.5 10.0499 15.36L7.21994 12.53C6.92994 12.24 6.92994 11.76 7.21994 11.47C7.50994 11.18 7.98994 11.18 8.27994 11.47L10.5799 13.77L15.7199 8.62998C16.0099 8.33998 16.4899 8.33998 16.7799 8.62998C17.0699 8.91998 17.0699 9.39998 16.7799 9.68998L11.1099 15.36C10.9699 15.5 10.7799 15.58 10.5799 15.58Z'
                    fill='#FF37A5'
                  />
                </svg>`;

const IconLike = `<svg
      className='mr-2'
      style='display: inline;'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        opacity='0.4'
        d='M21.6499 10.03C21.2599 9.47001 20.5699 9.15001 19.7799 9.15001H15.6799C15.4099 9.15001 15.1599 9.04001 14.9899 8.84001C14.8099 8.64001 14.7399 8.36001 14.7799 8.07001L15.2899 4.79001C15.5099 3.81001 14.8599 2.71001 13.8799 2.38001C12.9699 2.04001 11.8999 2.50001 11.4699 3.15001L7.24988 9.42001L7.12988 9.62001V18.46L7.27988 18.61L10.4499 21.06C10.8699 21.48 11.8199 21.71 12.4899 21.71H16.3899C17.7299 21.71 19.0799 20.7 19.3799 19.47L21.8399 11.98C22.0999 11.27 22.0299 10.58 21.6499 10.03Z'
        fill='#FF37A5'
      />
      <path
        d='M5.21 6.38H4.18C2.63 6.38 2 6.98 2 8.46V18.52C2 20 2.63 20.6 4.18 20.6H5.21C6.76 20.6 7.39 20 7.39 18.52V8.46C7.39 6.98 6.76 6.38 5.21 6.38Z'
        fill='#FF37A5'
      />
    </svg>`;

export default function HtmlParser({
  data,
  className,
  applyPresetClass = true,
  style,
  as = "div",
}: HtmlParserProps) {
  if (!data) return <></>;

  const Component = as;
  return (
    <Component
      className={clsx(applyPresetClass ? "block-content" : "", className)}
      style={style}
      dangerouslySetInnerHTML={{
        __html: data
          ?.replace(/\(icon\)/g, IconChecked)
          ?.replace(/\(like\)/g, IconLike)
          .replace(
            /(<table\b[^>]*>.*?<\/table>)/gs,
            '<div class="table-wrapper">$1</div>'
          ),
      }}
    />
  );
}
