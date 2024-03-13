import classNames from "classnames";
import styles from "./StatusIndicator.module.css";
import { tourStatus } from "@/types";
import { TEMP_animationOptions, getStatusColor } from "@/lib/utils";
import { motion } from "framer-motion";

const WaitingIcon = (props) => (
  <svg
    width={16}
    height={17}
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 1.93018C8 1.37789 8.44944 0.923734 8.99741 0.992592C10.1655 1.13937 11.2911 1.54276 12.2916 2.17872C13.5745 2.99417 14.5984 4.15824 15.2436 5.53462C15.8888 6.911 16.1285 8.44271 15.9347 9.9504C15.7408 11.4581 15.1214 12.8793 14.149 14.0477C13.1766 15.2161 11.8915 16.0833 10.4441 16.5477C8.99664 17.0121 7.44686 17.0545 5.97621 16.67C4.50556 16.2854 3.1749 15.4898 2.14006 14.3764C1.33301 13.508 0.73193 12.4744 0.375485 11.3523C0.208269 10.826 0.573266 10.3015 1.11637 10.2013L7.18158 9.0813C7.65582 8.99373 8 8.58017 8 8.09792L8 1.93018Z"
      fill="#DDDDE3"
    />
  </svg>
);

const CheckIcon = (props) => (
  <svg
    width={14}
    height={11}
    viewBox="0 0 14 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.3333 1.79053L4.99996 9.12386L1.66663 5.79053"
      stroke="#193B2D"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CarIcon = (props) => (
  <svg
    width={16}
    height={13}
    viewBox="0 0 16 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.53337 5.31763H11.4667C12.5868 5.31763 13.1469 5.31763 13.5747 5.53561C13.951 5.72736 14.257 6.03332 14.4487 6.40965C14.6667 6.83747 14.6667 7.39752 14.6667 8.51763V10.3176C14.6667 10.6274 14.6667 10.7823 14.6411 10.9111C14.5359 11.44 14.1224 11.8535 13.5935 11.9587C13.4647 11.9843 13.3098 11.9843 13 11.9843H12.6667C11.9303 11.9843 11.3334 11.3873 11.3334 10.651C11.3334 10.4669 11.1841 10.3176 11 10.3176H5.00004C4.81595 10.3176 4.66671 10.4669 4.66671 10.651C4.66671 11.3873 4.06975 11.9843 3.33337 11.9843H3.00004C2.69027 11.9843 2.53539 11.9843 2.40659 11.9587C1.87767 11.8535 1.4642 11.44 1.35899 10.9111C1.33337 10.7823 1.33337 10.6274 1.33337 10.3176V8.51763C1.33337 7.39752 1.33337 6.83747 1.55136 6.40965C1.74311 6.03332 2.04907 5.72736 2.42539 5.53561C2.85322 5.31763 3.41327 5.31763 4.53337 5.31763Z"
      fill="#0B68CB"
    />
    <path
      d="M1.33337 4.65096L2.66671 5.31763L3.5138 2.77634C3.68865 2.25179 3.77608 1.98952 3.93823 1.79561C4.08143 1.62438 4.26532 1.49184 4.47304 1.41014C4.70828 1.31763 4.98474 1.31763 5.53766 1.31763H10.4624C11.0153 1.31763 11.2918 1.31763 11.527 1.41014C11.7348 1.49184 11.9187 1.62438 12.0618 1.79561C12.224 1.98952 12.3114 2.25179 12.4863 2.77634L13.3334 5.31763L14.6667 4.65096M4.53337 5.31763H11.4667C12.5868 5.31763 13.1469 5.31763 13.5747 5.53561C13.951 5.72736 14.257 6.03332 14.4487 6.40965C14.6667 6.83747 14.6667 7.39752 14.6667 8.51763V10.3176C14.6667 10.6274 14.6667 10.7823 14.6411 10.9111C14.5359 11.44 14.1224 11.8535 13.5935 11.9587C13.4647 11.9843 13.3098 11.9843 13 11.9843H12.6667C11.9303 11.9843 11.3334 11.3873 11.3334 10.651C11.3334 10.4669 11.1841 10.3176 11 10.3176H5.00004C4.81595 10.3176 4.66671 10.4669 4.66671 10.651C4.66671 11.3873 4.06975 11.9843 3.33337 11.9843H3.00004C2.69027 11.9843 2.53539 11.9843 2.40659 11.9587C1.87767 11.8535 1.4642 11.44 1.35899 10.9111C1.33337 10.7823 1.33337 10.6274 1.33337 10.3176V8.51763C1.33337 7.39752 1.33337 6.83747 1.55136 6.40965C1.74311 6.03332 2.04907 5.72736 2.42539 5.53561C2.85322 5.31763 3.41327 5.31763 4.53337 5.31763Z"
      stroke="#0B68CB"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FlagIcon = (props) => (
  <svg
    width={14}
    height={17}
    viewBox="0 0 14 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.66663 10.5111C1.66663 10.5111 2.33329 9.84448 4.33329 9.84448C6.33329 9.84448 7.66663 11.1778 9.66663 11.1778C11.6666 11.1778 12.3333 10.5111 12.3333 10.5111V2.51115C12.3333 2.51115 11.6666 3.17782 9.66663 3.17782C7.66663 3.17782 6.33329 1.84448 4.33329 1.84448C2.33329 1.84448 1.66663 2.51115 1.66663 2.51115V10.5111Z"
      fill="#0B68CB"
    />
    <path
      d="M1.66663 2.51115C1.66663 2.51115 2.33329 1.84448 4.33329 1.84448C6.33329 1.84448 7.66663 3.17782 9.66663 3.17782C11.6666 3.17782 12.3333 2.51115 12.3333 2.51115V10.5111C12.3333 10.5111 11.6666 11.1778 9.66663 11.1778C7.66663 11.1778 6.33329 9.84448 4.33329 9.84448C2.33329 9.84448 1.66663 10.5111 1.66663 10.5111V2.51115ZM1.66663 2.51115L1.66663 15.1778"
      stroke="#0B68CB"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AbortIcon = (props) => (
  <svg
    width={10}
    height={10}
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.33329 1.5968L1.66663 8.26347M1.66663 1.5968L8.33329 8.26347"
      stroke="#641723"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type StatusIndicator = {
  status: tourStatus;
  className?: string;
};

const StatusIndicator = (props) => {
  const { status, className, ...rest } = props;

  const statusIconMap = {
    geplant: WaitingIcon,
    "fahrzeug kommt": WaitingIcon,
    "kunde eingestiegen": CarIcon,
    "fahre zum ziel": CarIcon,
    "auftrag abgeschlossen": FlagIcon,
    "auftrag storniert": AbortIcon,
  };

  const lowerCaseStatus = status.toLowerCase();
  const Icon = statusIconMap[lowerCaseStatus] || null;

  const statusColor = getStatusColor(status);

  return (
    <motion.div
      className={classNames(styles.indicator, styles[statusColor], className)}
      data-status={lowerCaseStatus}
      {...rest}
    >
      <div className={styles.inner}>
        <Icon />
      </div>
    </motion.div>
  );
};

export default StatusIndicator;
