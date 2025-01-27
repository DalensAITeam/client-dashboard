// FIXME REMOVE HYPHENS FROM SVGS

import { cn } from "@/lib/utils";
import type { ComponentProps, FC } from "react";

export const SmGoogleSvg: FC<ComponentProps<"svg">> = (props) => (
  <svg
    {...props}
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.5357 6.48447H12.9987V6.45234H6.9987V9.54911H10.7664C10.2167 11.3518 8.7397 12.6459 6.9987 12.6459C4.7897 12.6459 2.9987 10.566 2.9987 8.00072C2.9987 5.43543 4.7897 3.35556 6.9987 3.35556C8.01836 3.35556 8.94603 3.80227 9.65236 4.53195L11.538 2.34214C10.3474 1.0535 8.7547 0.258789 6.9987 0.258789C3.31703 0.258789 0.332031 3.72524 0.332031 8.00072C0.332031 12.2762 3.31703 15.7427 6.9987 15.7427C10.6804 15.7427 13.6654 12.2762 13.6654 8.00072C13.6654 7.48163 13.6194 6.97492 13.5357 6.48447Z"
      fill="#FFC107"
    />
    <path
      d="M1.10059 4.39724L3.29092 6.26266C3.88359 4.55866 5.31892 3.35556 6.99859 3.35556C8.01825 3.35556 8.94592 3.80227 9.65225 4.53195L11.5379 2.34214C10.3473 1.0535 8.75459 0.258789 6.99859 0.258789C4.43792 0.258789 2.21725 1.93763 1.10059 4.39724Z"
      fill="#FF3D00"
    />
    <path
      d="M6.99848 15.743C8.72048 15.743 10.2851 14.9777 11.4681 13.7332L9.40481 11.7055C8.71299 12.3165 7.86763 12.647 6.99848 12.6462C5.26448 12.6462 3.79214 11.3622 3.23748 9.57031L1.06348 11.5155C2.16681 14.0227 4.40748 15.743 6.99848 15.743Z"
      fill="#4CAF50"
    />
    <path
      d="M13.535 6.48428H12.998V6.45215H6.99805V9.54892H10.7657C10.5028 10.4069 10.0292 11.1566 9.40338 11.7054L9.40438 11.7047L11.4677 13.7323C11.3217 13.8863 13.6647 11.8715 13.6647 8.00054C13.6647 7.48144 13.6187 6.97473 13.535 6.48428Z"
      fill="#1976D2"
    />
  </svg>
);

export const LgGoogleSvg: FC<ComponentProps<"svg">> = (props) => (
  <svg
    {...props}
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M39.611 16.083H38V16H20V24H31.303C29.654 28.657 25.223 32 20 32C13.373 32 8 26.627 8 20C8 13.373 13.373 8 20 8C23.059 8 25.842 9.154 27.961 11.039L33.618 5.382C30.046 2.053 25.268 0 20 0C8.955 0 0 8.955 0 20C0 31.045 8.955 40 20 40C31.045 40 40 31.045 40 20C40 18.659 39.862 17.35 39.611 16.083Z"
      fill="#FFC107"
    />
    <path
      d="M2.30566 10.691L8.87666 15.51C10.6547 11.108 14.9607 8 19.9997 8C23.0587 8 25.8417 9.154 27.9607 11.039L33.6177 5.382C30.0457 2.053 25.2677 0 19.9997 0C12.3177 0 5.65566 4.337 2.30566 10.691Z"
      fill="#FF3D00"
    />
    <path
      d="M20.0003 40.0002C25.1663 40.0002 29.8603 38.0232 33.4093 34.8082L27.2193 29.5702C25.1439 31.1486 22.6078 32.0023 20.0003 32.0002C14.7983 32.0002 10.3813 28.6832 8.71731 24.0542L2.19531 29.0792C5.50531 35.5562 12.2273 40.0002 20.0003 40.0002Z"
      fill="#4CAF50"
    />
    <path
      d="M39.611 16.083H38V16H20V24H31.303C30.5142 26.2164 29.0934 28.1532 27.216 29.571L27.219 29.569L33.409 34.807C32.971 35.205 40 30 40 20C40 18.659 39.862 17.35 39.611 16.083Z"
      fill="#1976D2"
    />
  </svg>
);

export const MobileMenu = () => (
  <svg
    width="18"
    height="12"
    viewBox="0 0 18 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 2V0H12V2H0Z" fill="#2E3A59" />
    <path d="M0 7H18V5H0V7Z" fill="#2E3A59" />
    <path d="M0 12H12V10H0V12Z" fill="#2E3A59" />
  </svg>
);

export const HeroStreaks: FC<ComponentProps<"svg">> = ({
  className,
  ...props
}) => (
  <svg
    {...props}
    className={cn("h-[88.83px] w-[121.97px]", className)}
    width="126"
    height="90"
    viewBox="0 0 126 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M30.0333 60.6079L78.27 48.4125L65.1622 66.8122M65.1622 66.8122L17.3108 78.2281L4.37117 66.8627M65.1622 66.8122L123.243 56.3229L119.786 76.4289L67.2862 68.213L52.6371 89.8866M4.37117 66.8627L21.1387 39.8888M4.37117 66.8627L25.7876 60.6114L44.1059 41.8956M21.1387 39.8888L44.1059 41.8956M21.1387 39.8888L39.8507 30.523M44.1059 41.8956L84.6289 36.7194L84.6238 30.4859L108.171 33.5831L101.039 44.3418L87.3307 36.7171M39.8507 30.523L4.34104 30.5525M39.8507 30.523L71.4912 19.1206M39.8507 30.523L84.6263 33.6026L71.4912 19.1206M39.8507 30.523L36.9488 21.9543M71.4912 19.1206L91.1708 13.0266M71.4912 19.1206L88.7659 21.9114M36.9488 21.9543L36.9393 10.5782L52.567 5.42258L68.9773 13.045M36.9488 21.9543L10.8844 8.57392M4.3382 27.124L68.9773 13.045M68.9773 13.045L75.3395 5.40369L87.3019 1.96533L55.6548 5.42002M68.9773 13.045L84.6072 10.5386L91.1708 13.0266M10.8844 8.57392L29.9875 5.44132M10.8844 8.57392L10.891 16.5216L4.33393 21.9814M89.0539 20.1969L88.7659 21.9114M91.1708 13.0266L91.1777 21.286L123.214 21.8828L87.3256 30.4836L88.7659 21.9114M84.6386 48.4072L119.769 56.3258L104.708 46.3647L84.6386 48.4072Z"
      stroke="#01A9F2"
      strokeOpacity="0.5"
      strokeWidth="0.27188"
    />
    <g filter="url(#filter0_f_876_1296)">
      <ellipse
        cx="43.5257"
        cy="41.7408"
        rx="2.12286"
        ry="1.71422"
        transform="rotate(-0.0475338 43.5257 41.7408)"
        fill="#01A9F2"
        fillOpacity="0.5"
      />
    </g>
    <g filter="url(#filter1_f_876_1296)">
      <ellipse
        cx="121.863"
        cy="22.3521"
        rx="2.12286"
        ry="1.71422"
        transform="rotate(-0.0475338 121.863 22.3521)"
        fill="#01A9F2"
        fillOpacity="0.5"
      />
    </g>
    <g filter="url(#filter2_f_876_1296)">
      <ellipse
        cx="39.2708"
        cy="29.9009"
        rx="2.12286"
        ry="1.71422"
        transform="rotate(-0.0475338 39.2708 29.9009)"
        fill="#01A9F2"
        fillOpacity="0.5"
      />
    </g>
    <g filter="url(#filter3_f_876_1296)">
      <ellipse
        cx="21.9104"
        cy="39.8882"
        rx="2.12286"
        ry="1.71422"
        transform="rotate(-0.0475338 21.9104 39.8882)"
        fill="#01A9F2"
        fillOpacity="0.5"
      />
    </g>
    <g filter="url(#filter4_f_876_1296)">
      <ellipse
        cx="85.0142"
        cy="36.2521"
        rx="1.92987"
        ry="1.55838"
        transform="rotate(-0.0475338 85.0142 36.2521)"
        fill="#01A9F2"
        fillOpacity="0.5"
      />
    </g>
    <g filter="url(#filter5_f_876_1296)">
      <ellipse
        cx="69.1694"
        cy="12.8891"
        rx="1.15792"
        ry="0.935027"
        transform="rotate(-0.0475338 69.1694 12.8891)"
        fill="#01A9F2"
        fillOpacity="0.5"
      />
    </g>
    <g filter="url(#filter6_f_876_1296)">
      <ellipse
        cx="35.9819"
        cy="21.021"
        rx="1.15792"
        ry="0.935027"
        transform="rotate(-0.0475338 35.9819 21.021)"
        fill="#01A9F2"
        fillOpacity="0.5"
      />
    </g>
    <g filter="url(#filter7_f_876_1296)">
      <ellipse
        cx="86.9155"
        cy="2.58998"
        rx="1.92987"
        ry="1.55838"
        transform="rotate(-0.0475338 86.9155 2.58998)"
        fill="#01A9F2"
        fillOpacity="0.5"
      />
    </g>
    <g filter="url(#filter8_f_876_1296)">
      <ellipse
        cx="11.6558"
        cy="8.88588"
        rx="1.92987"
        ry="1.55838"
        transform="rotate(-0.0475338 11.6558 8.88588)"
        fill="#01A9F2"
        fillOpacity="0.5"
      />
    </g>
    <g filter="url(#filter9_f_876_1296)">
      <ellipse
        cx="89.6343"
        cy="21.9113"
        rx="1.92987"
        ry="1.55838"
        transform="rotate(-0.0475338 89.6343 21.9113)"
        fill="#01A9F2"
        fillOpacity="0.5"
      />
    </g>
    <g filter="url(#filter10_f_876_1296)">
      <ellipse
        cx="72.2622"
        cy="19.1203"
        rx="1.92987"
        ry="1.55838"
        transform="rotate(-0.0475338 72.2622 19.1203)"
        fill="#01A9F2"
        fillOpacity="0.5"
      />
    </g>
    <g filter="url(#filter11_f_876_1296)">
      <ellipse
        cx="54.4966"
        cy="5.73256"
        rx="1.92987"
        ry="1.55838"
        transform="rotate(-0.0475338 54.4966 5.73256)"
        fill="#01A9F2"
        fillOpacity="0.5"
      />
    </g>
    <g filter="url(#filter12_f_876_1296)">
      <ellipse
        cx="102.39"
        cy="45.2763"
        rx="2.31585"
        ry="1.87005"
        transform="rotate(-0.0475338 102.39 45.2763)"
        fill="#01A9F2"
        fillOpacity="0.5"
      />
    </g>
    <g filter="url(#filter13_f_876_1296)">
      <ellipse
        cx="27.7161"
        cy="60.4546"
        rx="2.12286"
        ry="1.71422"
        transform="rotate(-0.0475338 27.7161 60.4546)"
        fill="#01A9F2"
        fillOpacity="0.5"
      />
    </g>
    <g filter="url(#filter14_f_876_1296)">
      <ellipse
        cx="18.0823"
        cy="77.9166"
        rx="2.12286"
        ry="1.71422"
        transform="rotate(-0.0475338 18.0823 77.9166)"
        fill="#01A9F2"
        fillOpacity="0.5"
      />
    </g>
    <g filter="url(#filter15_f_876_1296)">
      <ellipse
        cx="4.17799"
        cy="67.3306"
        rx="2.12286"
        ry="1.71422"
        transform="rotate(-0.0475338 4.17799 67.3306)"
        fill="#01A9F2"
        fillOpacity="0.5"
      />
    </g>
    <g filter="url(#filter16_f_876_1296)">
      <ellipse
        cx="81.7429"
        cy="47.3194"
        rx="3.28079"
        ry="2.64924"
        transform="rotate(-0.0475338 81.7429 47.3194)"
        fill="#01A9F2"
        fillOpacity="0.5"
      />
    </g>
    <g filter="url(#filter17_f_876_1296)">
      <ellipse
        cx="119.575"
        cy="56.6381"
        rx="2.50884"
        ry="2.02589"
        transform="rotate(-0.0475338 119.575 56.6381)"
        fill="#01A9F2"
        fillOpacity="0.5"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_876_1296"
        x="40.3148"
        y="38.9388"
        width="6.42114"
        height="5.60375"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="0.543761"
          result="effect1_foregroundBlur_876_1296"
        />
      </filter>
      <filter
        id="filter1_f_876_1296"
        x="118.652"
        y="19.5502"
        width="6.42114"
        height="5.60375"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="0.543761"
          result="effect1_foregroundBlur_876_1296"
        />
      </filter>
      <filter
        id="filter2_f_876_1296"
        x="36.0599"
        y="27.099"
        width="6.42114"
        height="5.60375"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="0.543761"
          result="effect1_foregroundBlur_876_1296"
        />
      </filter>
      <filter
        id="filter3_f_876_1296"
        x="18.6996"
        y="37.0863"
        width="6.42114"
        height="5.60375"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="0.543761"
          result="effect1_foregroundBlur_876_1296"
        />
      </filter>
      <filter
        id="filter4_f_876_1296"
        x="82.0953"
        y="33.7047"
        width="5.83766"
        height="5.0945"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="0.494328"
          result="effect1_foregroundBlur_876_1296"
        />
      </filter>
      <filter
        id="filter5_f_876_1296"
        x="67.4185"
        y="11.3609"
        width="3.50182"
        height="3.0565"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="0.296597"
          result="effect1_foregroundBlur_876_1296"
        />
      </filter>
      <filter
        id="filter6_f_876_1296"
        x="34.231"
        y="19.4927"
        width="3.50182"
        height="3.0565"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="0.296597"
          result="effect1_foregroundBlur_876_1296"
        />
      </filter>
      <filter
        id="filter7_f_876_1296"
        x="83.9967"
        y="0.0425944"
        width="5.83766"
        height="5.0945"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="0.494328"
          result="effect1_foregroundBlur_876_1296"
        />
      </filter>
      <filter
        id="filter8_f_876_1296"
        x="8.73693"
        y="6.33849"
        width="5.83766"
        height="5.0945"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="0.494328"
          result="effect1_foregroundBlur_876_1296"
        />
      </filter>
      <filter
        id="filter9_f_876_1296"
        x="86.7154"
        y="19.3639"
        width="5.83766"
        height="5.0945"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="0.494328"
          result="effect1_foregroundBlur_876_1296"
        />
      </filter>
      <filter
        id="filter10_f_876_1296"
        x="69.3434"
        y="16.5729"
        width="5.83766"
        height="5.0945"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="0.494328"
          result="effect1_foregroundBlur_876_1296"
        />
      </filter>
      <filter
        id="filter11_f_876_1296"
        x="51.5778"
        y="3.18517"
        width="5.83766"
        height="5.0945"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="0.494328"
          result="effect1_foregroundBlur_876_1296"
        />
      </filter>
      <filter
        id="filter12_f_876_1296"
        x="98.8878"
        y="42.2199"
        width="7.00363"
        height="6.11301"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="0.593193"
          result="effect1_foregroundBlur_876_1296"
        />
      </filter>
      <filter
        id="filter13_f_876_1296"
        x="24.5053"
        y="57.6527"
        width="6.42114"
        height="5.60375"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="0.543761"
          result="effect1_foregroundBlur_876_1296"
        />
      </filter>
      <filter
        id="filter14_f_876_1296"
        x="14.8715"
        y="75.1146"
        width="6.42114"
        height="5.60375"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="0.543761"
          result="effect1_foregroundBlur_876_1296"
        />
      </filter>
      <filter
        id="filter15_f_876_1296"
        x="0.967166"
        y="64.5287"
        width="6.42114"
        height="5.60375"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="0.543761"
          result="effect1_foregroundBlur_876_1296"
        />
      </filter>
      <filter
        id="filter16_f_876_1296"
        x="76.7812"
        y="42.9892"
        width="9.92295"
        height="8.66026"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="0.840357"
          result="effect1_foregroundBlur_876_1296"
        />
      </filter>
      <filter
        id="filter17_f_876_1296"
        x="115.781"
        y="53.3271"
        width="7.58808"
        height="6.62226"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="0.642626"
          result="effect1_foregroundBlur_876_1296"
        />
      </filter>
    </defs>
  </svg>
);

export const CopyCameraIP: FC<ComponentProps<"svg">> = (props) => (
  <svg
    {...props}
    width="165"
    height="165"
    viewBox="0 0 165 165"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M73.7094 48.6885C71.4676 48.6885 69.3176 49.579 67.7324 51.1643C66.1471 52.7495 65.2566 54.8995 65.2566 57.1413V99.4057C65.2566 101.648 66.1471 103.798 67.7324 105.383C69.3176 106.968 71.4676 107.859 73.7094 107.859H99.0681C101.31 107.859 103.46 106.968 105.045 105.383C106.63 103.798 107.521 101.648 107.521 99.4057V57.1413C107.521 54.8995 106.63 52.7495 105.045 51.1643C103.46 49.579 101.31 48.6885 99.0681 48.6885H73.7094ZM69.483 57.1413C69.483 56.0204 69.9283 54.9454 70.7209 54.1528C71.5135 53.3602 72.5885 52.9149 73.7094 52.9149H99.0681C100.189 52.9149 101.264 53.3602 102.057 54.1528C102.849 54.9454 103.294 56.0204 103.294 57.1413V99.4057C103.294 100.527 102.849 101.602 102.057 102.394C101.264 103.187 100.189 103.632 99.0681 103.632H73.7094C72.5885 103.632 71.5135 103.187 70.7209 102.394C69.9283 101.602 69.483 100.527 69.483 99.4057V57.1413ZM56.8037 65.5942C56.8037 64.1105 57.1943 62.6529 57.9362 61.3679C58.6781 60.0829 59.7452 59.0159 61.0301 58.274V101.519C61.0301 104.321 62.1434 107.009 64.1249 108.99C66.1064 110.972 68.7939 112.085 71.5962 112.085H97.9354C97.1935 113.37 96.1265 114.437 94.8415 115.179C93.5565 115.921 92.0989 116.311 90.6152 116.311H71.5962C67.673 116.311 63.9105 114.753 61.1363 111.979C58.3622 109.205 56.8037 105.442 56.8037 101.519V65.5942Z"
      fill="#70E000"
    />
    <circle
      cx="82.4996"
      cy="82.4996"
      r="61.3115"
      stroke="#8AFF14"
      strokeWidth="0.901639"
    />
    <circle
      cx="82.4997"
      cy="82.4997"
      r="71.1571"
      stroke="#8AFF14"
      strokeWidth="1.04643"
    />
    <circle
      cx="82.5"
      cy="82.5"
      r="81.8978"
      stroke="#8AFF14"
      strokeWidth="1.20438"
    />
  </svg>
);

export const ChooseAnimalType: FC<ComponentProps<"svg">> = (props) => (
  <svg
    {...props}
    width="166"
    height="166"
    viewBox="0 0 166 166"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M89.4386 112.386H54.2147C52.3463 112.386 50.5544 111.644 49.2333 110.323C47.9121 109.002 47.1699 107.21 47.1699 105.342V56.0282C47.1699 54.1598 47.9121 52.3679 49.2333 51.0468C50.5544 49.7256 52.3463 48.9834 54.2147 48.9834H110.573C112.441 48.9834 114.233 49.7256 115.554 51.0468C116.875 52.3679 117.618 54.1598 117.618 56.0282V91.252"
      stroke="#70E000"
      strokeWidth="3.62842"
      strokeLinecap="round"
    />
    <path
      d="M47.1699 63.0737H117.618M57.7371 56.0641L57.7723 56.0254M68.3042 56.0641L68.3395 56.0254M78.8714 56.0641L78.9066 56.0254"
      stroke="#70E000"
      strokeWidth="3.62842"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M117.908 103.103C119.648 104.174 119.542 106.777 117.749 106.978L108.711 108.007L104.653 116.15C103.85 117.764 101.367 116.975 100.955 114.974L96.534 93.431C96.1888 91.7402 97.7069 90.6765 99.1758 91.5817L117.908 103.103Z"
      stroke="#70E000"
      strokeWidth="3.62842"
    />
    <circle
      cx="82.9999"
      cy="82.9999"
      r="61.6831"
      stroke="#8AFF14"
      strokeWidth="0.907104"
    />
    <circle
      cx="82.9995"
      cy="82.9995"
      r="71.5884"
      stroke="#8AFF14"
      strokeWidth="1.05277"
    />
    <circle
      cx="83"
      cy="83"
      r="82.3942"
      stroke="#8AFF14"
      strokeWidth="1.21168"
    />
  </svg>
);

export const EnjoyYourExperience: FC<ComponentProps<"svg">> = (props) => (
  <svg
    {...props}
    width="165"
    height="167"
    viewBox="0 0 165 167"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M68.4732 83.9559L83.9182 96.9731L104.511 70.9387M86.4924 120.404C81.7597 120.404 77.0735 119.461 72.7011 117.63C68.3288 115.798 64.3559 113.113 61.0095 109.729C57.663 106.344 55.0084 102.326 53.1974 97.904C51.3863 93.4819 50.4541 88.7423 50.4541 83.9559C50.4541 79.1695 51.3863 74.4299 53.1974 70.0078C55.0084 65.5857 57.663 61.5677 61.0095 58.1832C64.3559 54.7987 68.3288 52.1139 72.7011 50.2823C77.0735 48.4506 81.7597 47.5078 86.4924 47.5078C96.0503 47.5078 105.217 51.3479 111.975 58.1832C118.734 65.0186 122.531 74.2893 122.531 83.9559C122.531 93.6225 118.734 102.893 111.975 109.729C105.217 116.564 96.0503 120.404 86.4924 120.404Z"
      stroke="#70E000"
      strokeWidth="3.64481"
    />
    <path
      d="M143.698 83.5004C143.698 117.726 116.266 145.462 82.4382 145.462C48.6101 145.462 21.1783 117.726 21.1783 83.5004C21.1783 49.275 48.6101 21.5386 82.4382 21.5386C116.266 21.5386 143.698 49.275 143.698 83.5004Z"
      stroke="#8AFF14"
      strokeWidth="0.911202"
    />
    <path
      d="M153.535 83.5001C153.535 123.222 121.698 155.412 82.4375 155.412C43.1772 155.412 11.3403 123.222 11.3403 83.5001C11.3403 43.7787 43.1772 11.5883 82.4375 11.5883C121.698 11.5883 153.535 43.7787 153.535 83.5001Z"
      stroke="#8AFF14"
      strokeWidth="1.05753"
    />
    <path
      d="M164.266 83.5C164.266 129.217 127.624 166.266 82.4375 166.266C37.2511 166.266 0.608577 129.217 0.608577 83.5C0.608577 37.7829 37.2511 0.733577 82.4375 0.733577C127.624 0.733577 164.266 37.7829 164.266 83.5Z"
      stroke="#8AFF14"
      strokeWidth="1.21715"
    />
  </svg>
);

export const Hailday = () => (
  <svg
    width="44"
    height="43"
    viewBox="0 0 44 43"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.4979 30C19.8957 30 20.2773 30.158 20.5586 30.4394C20.8399 30.7207 20.9979 31.1022 20.9979 31.5C20.9979 31.8978 20.8399 32.2794 20.5586 32.5607C20.2773 32.842 19.8957 33 19.4979 33C19.1 33 18.7185 32.842 18.4372 32.5607C18.1559 32.2794 17.9978 31.8978 17.9978 31.5C17.9978 31.1022 18.1559 30.7207 18.4372 30.4394C18.7185 30.158 19.1 30 19.4979 30ZM14.2476 28.5C14.6455 28.5 15.027 28.6581 15.3083 28.9394C15.5897 29.2207 15.7477 29.6022 15.7477 30C15.7477 30.3978 15.5897 30.7794 15.3083 31.0607C15.027 31.342 14.6455 31.5 14.2476 31.5C13.8498 31.5 13.4682 31.342 13.1869 31.0607C12.9056 30.7794 12.7476 30.3978 12.7476 30C12.7476 29.6022 12.9056 29.2207 13.1869 28.9394C13.4682 28.6581 13.8498 28.5 14.2476 28.5ZM24.7481 28.5C25.146 28.5 25.5275 28.6581 25.8088 28.9394C26.0902 29.2207 26.2482 29.6022 26.2482 30C26.2482 30.3978 26.0902 30.7794 25.8088 31.0607C25.5275 31.342 25.146 31.5 24.7481 31.5C24.3503 31.5 23.9687 31.342 23.6874 31.0607C23.4061 30.7794 23.2481 30.3978 23.2481 30C23.2481 29.6022 23.4061 29.2207 23.6874 28.9394C23.9687 28.6581 24.3503 28.5 24.7481 28.5ZM19.5009 9.01362C24.2531 9.01362 26.9502 12.1591 27.3417 15.9586H27.4618C28.1882 15.9576 28.9077 16.0997 29.5792 16.3768C30.2507 16.654 30.861 17.0606 31.3753 17.5737C31.8896 18.0867 32.2978 18.696 32.5766 19.3667C32.8553 20.0375 32.9992 20.7567 33 21.4831C32.999 22.2093 32.855 22.9283 32.5761 23.5989C32.2973 24.2695 31.8891 24.8786 31.3748 25.3915C30.8605 25.9044 30.2502 26.3109 29.5788 26.5879C28.9074 26.8649 28.1881 27.007 27.4618 27.006H11.5385C10.8122 27.007 10.0928 26.8649 9.42142 26.5879C8.75002 26.3109 8.13976 25.9044 7.62548 25.3915C7.11121 24.8786 6.70299 24.2695 6.42413 23.5989C6.14528 22.9283 6.00124 22.2093 6.00026 21.4831C6.00105 20.7567 6.14493 20.0375 6.4237 19.3667C6.70247 18.696 7.11066 18.0867 7.62495 17.5737C8.13925 17.0606 8.74957 16.654 9.42107 16.3768C10.0926 16.0997 10.8121 15.9576 11.5385 15.9586H11.6585C12.053 12.1336 14.7487 9.01362 19.5009 9.01362ZM6.54779 15.2461C6.6521 15.4973 6.66186 15.7778 6.57526 16.0357C6.48866 16.2935 6.31157 16.5113 6.07676 16.6486L5.94026 16.7161L4.54969 17.2921C4.28665 17.3993 3.99278 17.403 3.72709 17.3026C3.4614 17.2021 3.24355 17.0048 3.11728 16.7504C2.991 16.496 2.96565 16.2032 3.04631 15.9308C3.12698 15.6585 3.30768 15.4267 3.55215 15.2821L3.68865 15.2131L5.07922 14.6371C5.21573 14.5805 5.36205 14.5514 5.50981 14.5514C5.65758 14.5514 5.80389 14.5806 5.9404 14.6371C6.07692 14.6937 6.20095 14.7765 6.30542 14.881C6.4099 14.9855 6.49126 15.1096 6.54779 15.2461ZM16.2787 7.99663L16.0222 8.08363C13.3446 9.02862 11.4275 11.0911 10.5995 13.8181L10.4945 14.1931L10.406 14.5501L10.0969 14.6086C9.19948 14.797 8.34813 15.161 7.59183 15.6796C6.90431 14.4979 6.64749 13.1146 6.8651 11.7649C7.0827 10.4152 7.76128 9.18266 8.78535 8.27694C9.80943 7.37122 11.1157 6.84831 12.4819 6.7972C13.8481 6.7461 15.1898 7.16995 16.2787 7.99663ZM4.40869 8.04313L4.56619 8.09563L5.95526 8.67163C6.21576 8.78144 6.42538 8.98529 6.5424 9.24263C6.65941 9.49997 6.67525 9.79193 6.58676 10.0604C6.49826 10.3289 6.31193 10.5542 6.06483 10.6916C5.81773 10.8289 5.52798 10.8682 5.25323 10.8016L5.09422 10.7506L3.70515 10.1746C3.44396 10.0651 3.23366 9.86116 3.11626 9.60344C2.99886 9.34571 2.98298 9.05319 3.0718 8.78427C3.16063 8.51536 3.34761 8.28983 3.59543 8.15272C3.84324 8.01562 4.13366 7.97552 4.40869 8.04313ZM10.1315 3.56415L10.199 3.70065L10.775 5.08964C10.8837 5.35291 10.8886 5.64763 10.7885 5.91433C10.6885 6.18103 10.491 6.39985 10.2359 6.52663C9.98081 6.65341 9.68712 6.6787 9.41411 6.59741C9.14109 6.51612 8.90908 6.3343 8.76489 6.08864L8.69588 5.95064L8.11986 4.56165C8.01264 4.29861 8.0089 4.00476 8.10938 3.73909C8.20986 3.47341 8.40712 3.25557 8.66157 3.1293C8.91601 3.00303 9.20881 2.97769 9.48117 3.05834C9.75353 3.139 9.9868 3.3197 10.1315 3.56415ZM16.6613 3.08565C16.9106 3.18875 17.1146 3.37802 17.236 3.61894C17.3574 3.85987 17.3882 4.13641 17.3228 4.39815L17.2703 4.55565L16.6958 5.94464C16.5875 6.20755 16.3838 6.41974 16.1255 6.53854C15.8672 6.65734 15.5735 6.67394 15.3034 6.58501C15.0334 6.49607 14.807 6.3082 14.6699 6.05916C14.5327 5.81012 14.495 5.51839 14.5642 5.24264L14.6167 5.08364L15.1912 3.69465C15.2477 3.55813 15.3306 3.43409 15.435 3.32959C15.5395 3.2251 15.6636 3.14221 15.8001 3.08566C15.9366 3.02911 16.0829 3 16.2307 3C16.3784 3 16.5247 3.0291 16.6613 3.08565Z"
      fill="#01A9F2"
    />
  </svg>
);

export const Night = () => (
  <svg
    width="41"
    height="42"
    viewBox="0 0 41 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.607 2.17957L19.0586 4.95222L19.6832 6.03257L22.502 4.31402L21.6852 9.67968L22.1896 10.5492L26.9062 7.67238L26.2816 6.59203L23.2947 8.4082L24.1035 3.045L23.607 2.17957ZM11.7795 4.96699C8.98918 6.55718 6.66381 8.88155 5.04351 11.7001C3.42322 14.5186 2.56673 17.7291 2.5625 21C2.5625 25.8733 4.45234 30.5471 7.81627 33.9931C11.1802 37.4391 15.7427 39.375 20.5 39.375C24.3784 39.3729 28.1517 38.0832 31.2542 35.6992C34.3568 33.3151 36.6215 29.9652 37.7088 26.1516C36.155 27.8373 34.2821 29.1809 32.2046 30.1005C30.127 31.0201 27.8882 31.4963 25.625 31.5C21.2075 31.5 16.9709 29.7023 13.8473 26.5025C10.7236 23.3027 8.96875 18.9628 8.96875 14.4375C8.97155 11.0655 9.94963 7.76996 11.7795 4.96699ZM31.3586 9.23671L30.8061 10.5902L34.3375 12.0996L28.8682 15.0445L28.4277 16.1273L34.3295 18.6539L34.882 17.3004L31.1424 15.7008L36.6117 12.7559L37.0522 11.673L31.3586 9.23671ZM22.1496 14.4867L14.318 17.3578L14.9666 19.2199L19.8193 17.4398L16.9846 25.4707L17.5051 26.9555L25.625 23.9859L24.9764 22.1238L19.8354 24.0105L22.6701 15.9797L22.1496 14.4867Z"
      fill="#4D4D4D"
    />
  </svg>
);

export const Chart = () => (
  <svg
    width="105"
    height="104"
    viewBox="0 0 105 104"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M103.991 52.0002C103.991 40.5669 100.111 29.4653 92.9751 20.4776L76.7812 33.0866C81.0629 38.4793 83.3905 45.1402 83.3905 52.0002H103.991Z"
      fill="#6B6B6B"
      stroke="white"
    />
    <path
      d="M92.9846 20.4775C85.4573 10.9971 74.7811 4.46495 62.8514 2.04092C50.9218 -0.383111 38.5106 1.45781 27.8217 7.23682C17.1327 13.0158 8.85765 22.359 4.46569 33.6074C0.0737396 44.8557 -0.150872 57.2814 3.83172 68.6783C7.81431 80.0751 15.7464 89.7056 26.2196 95.8598C36.6929 102.014 49.0295 104.294 61.0391 102.294C73.0488 100.294 83.9543 94.1448 91.8193 84.9372C99.6843 75.7297 104 64.0599 104 52H83.4C83.4 59.236 80.8106 66.2378 76.0916 71.7623C71.3726 77.2869 64.8293 80.9766 57.6235 82.1764C50.4177 83.3761 43.0157 82.0083 36.7318 78.3158C30.4478 74.6233 25.6886 68.8451 23.299 62.007C20.9095 55.1689 21.0443 47.7134 23.6794 40.9644C26.3146 34.2154 31.2796 28.6095 37.693 25.1421C44.1064 21.6747 51.553 20.5701 58.7108 22.0245C65.8686 23.479 72.2744 27.3982 76.7907 33.0865L92.9846 20.4775Z"
      fill="#42D9AD"
      stroke="white"
    />
  </svg>
);

export const Search = () => (
  <svg
    width="32"
    height="28"
    viewBox="0 0 32 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.9511 18C17.159 18 20.5701 15.0152 20.5701 11.3333C20.5701 7.65144 17.159 4.66667 12.9511 4.66667C8.7432 4.66667 5.33203 7.65144 5.33203 11.3333C5.33203 15.0152 8.7432 18 12.9511 18Z"
      stroke="#6B6B6B"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M26.7743 23.3333L18.2852 16"
      stroke="#6B6B6B"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
