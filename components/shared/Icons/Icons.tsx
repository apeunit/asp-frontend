export const ArrowLeft = (props: any) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M26.6663 16H5.33301M5.33301 16L13.333 24M5.33301 16L13.333 8"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Dots = (props) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={32} height={32} fill="white" fillOpacity={0.01} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.3996 5.33335C18.3996 6.65883 17.3251 7.73335 15.9996 7.73335C14.6741 7.73335 13.5996 6.65883 13.5996 5.33335C13.5996 4.00787 14.6741 2.93335 15.9996 2.93335C17.3251 2.93335 18.3996 4.00787 18.3996 5.33335ZM18.3996 16C18.3996 17.3255 17.3251 18.4 15.9996 18.4C14.6741 18.4 13.5996 17.3255 13.5996 16C13.5996 14.6745 14.6741 13.6 15.9996 13.6C17.3251 13.6 18.3996 14.6745 18.3996 16ZM15.9996 29.0667C17.3251 29.0667 18.3996 27.9921 18.3996 26.6667C18.3996 25.3412 17.3251 24.2667 15.9996 24.2667C14.6741 24.2667 13.5996 25.3412 13.5996 26.6667C13.5996 27.9921 14.6741 29.0667 15.9996 29.0667Z"
      fill="white"
    />
  </svg>
);
