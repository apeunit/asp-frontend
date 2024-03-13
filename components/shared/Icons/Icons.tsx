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

export const Magnifier = (props: any) => (
  <svg
    width={16}
    height={17}
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      width={16}
      height={16}
      transform="translate(0 0.0878906)"
      fill="white"
      fillOpacity={0.01}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.6667 7.02125C10.6667 9.08312 8.99523 10.7546 6.93336 10.7546C4.8715 10.7546 3.20003 9.08312 3.20003 7.02125C3.20003 4.95939 4.8715 3.28792 6.93336 3.28792C8.99523 3.28792 10.6667 4.95939 10.6667 7.02125ZM9.92946 10.7715C9.10831 11.4285 8.06671 11.8213 6.93336 11.8213C4.2824 11.8213 2.13336 9.67222 2.13336 7.02125C2.13336 4.37029 4.2824 2.22125 6.93336 2.22125C9.58433 2.22125 11.7334 4.37029 11.7334 7.02125C11.7334 8.1546 11.3406 9.1962 10.6837 10.0173L13.7105 13.0441C13.9187 13.2524 13.9187 13.5901 13.7105 13.7984C13.5022 14.0066 13.1645 14.0066 12.9562 13.7984L9.92946 10.7715Z"
      fill="currentColor"
      fillOpacity={0.624}
    />
  </svg>
);

export const ChevronUp = (props) => (
  <svg
    width={12}
    height={7}
    viewBox="0 0 12 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.690868 6.52082C0.409684 6.23963 0.409684 5.78376 0.690868 5.50258L5.49087 0.702579C5.62589 0.567555 5.80903 0.491699 5.99999 0.491699C6.19093 0.491699 6.37407 0.567555 6.50911 0.702579L11.3091 5.50258C11.5902 5.78376 11.5902 6.23963 11.3091 6.52082C11.0278 6.80199 10.572 6.80199 10.2909 6.52082L5.99999 2.22992L1.70911 6.52082C1.42792 6.80199 0.972052 6.80199 0.690868 6.52082Z"
      fill="#1C2024"
    />
  </svg>
);

export const Time = (props) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.73393 3.82341V7.82341L10.4006 9.15674M14.4006 7.82341C14.4006 11.5053 11.4158 14.4901 7.73393 14.4901C4.05203 14.4901 1.06726 11.5053 1.06726 7.82341C1.06726 4.14151 4.05203 1.15674 7.73393 1.15674C11.4158 1.15674 14.4006 4.14151 14.4006 7.82341Z"
      stroke="white"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
