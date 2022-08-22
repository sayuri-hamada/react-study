import { SVGProps, FC, memo } from 'react';

export const IconTwitter: FC<SVGProps<SVGSVGElement>> = memo((props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M7.55685 22C16.6131 22 21.561 14.6961 21.561 8.35623C21.561 8.15172 21.561 7.93747 21.551 7.73296C22.5006 7.05126 23.3403 6.21374 24 5.24962C23.1204 5.62942 22.1708 5.89236 21.1712 6.00923C22.1908 5.41517 22.9704 4.48027 23.3403 3.36033C22.3907 3.90569 21.3411 4.30497 20.2116 4.52896C19.312 3.58432 18.0325 3 16.6231 3C13.9042 3 11.7051 5.15223 11.7051 7.79139C11.7051 8.17119 11.7451 8.53152 11.8351 8.88211C7.73678 8.68734 4.10829 6.77858 1.6793 3.87647C1.25948 4.58739 1.00958 5.40543 1.00958 6.29165C1.00958 7.95695 1.87922 9.42747 3.19867 10.2845C2.399 10.2553 1.63932 10.041 0.969596 9.68068C0.969596 9.70015 0.969596 9.71963 0.969596 9.73911C0.969596 12.0666 2.66889 14.0046 4.91795 14.4428C4.50812 14.55 4.0683 14.6084 3.61849 14.6084C3.29863 14.6084 2.98875 14.5792 2.68888 14.5208C3.31862 16.4295 5.12786 17.8124 7.28696 17.8514C5.59767 19.1369 3.47855 19.9062 1.16951 19.9062C0.769679 19.9062 0.379842 19.8867 0 19.838C2.18909 21.2014 4.77801 22 7.55685 22Z" />
  </svg>
));
IconTwitter.displayName = 'IconTwitter';
