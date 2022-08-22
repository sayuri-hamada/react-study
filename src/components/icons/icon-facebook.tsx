import { SVGProps, FC, memo } from 'react';

export const IconFacebook: FC<SVGProps<SVGSVGElement>> = memo((props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M23 12.0645C23 5.95138 18.0775 1 12 1C5.9225 1 1 5.95138 1 12.0645C1 17.5876 5.02417 22.1609 10.2767 22.9908V15.2548H7.49V12.0645H10.2858V9.63034C10.2858 6.85499 11.9267 5.32439 14.4383 5.32439C15.6392 5.32439 16.9042 5.53646 16.9042 5.53646V8.2565H15.52C14.1542 8.2565 13.7233 9.114 13.7233 9.98072V12.0645H16.7758L16.29 15.264H13.7233V23C18.9758 22.1609 23 17.5876 23 12.0645Z" />
  </svg>
));
IconFacebook.displayName = 'IconFacebook';
