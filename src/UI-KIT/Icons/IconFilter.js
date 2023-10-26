import PropTypes from "prop-types";

export default function IconFilter({ size, color, extClassName }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={extClassName}
    >
      <path
        d="M26.7434 12.964C28.0074 12.252 28.6407 11.896 28.986 11.3213C29.3327 10.748 29.3327 10.056 29.3327 8.672V7.752C29.3327 5.984 29.3327 5.09867 28.746 4.54933C28.162 4 27.2193 4 25.3327 4H6.66602C4.78068 4 3.83802 4 3.25268 4.54933C2.66602 5.09867 2.66602 5.984 2.66602 7.75333V8.67333C2.66602 10.056 2.66602 10.748 3.01268 11.3213C3.35935 11.8947 3.99002 12.252 5.25535 12.964L9.13935 15.1507C9.98735 15.628 10.4127 15.8667 10.7167 16.1307C11.3487 16.6787 11.738 17.324 11.914 18.1173C11.9993 18.496 11.9993 18.9413 11.9993 19.8307V23.3907C11.9993 24.6027 11.9993 25.2093 12.3353 25.6813C12.6713 26.1547 13.2687 26.388 14.4607 26.8547C16.966 27.8333 18.218 28.3227 19.1087 27.7653C19.9993 27.2093 19.9993 25.936 19.9993 23.3893V19.8293C19.9993 18.9413 19.9993 18.496 20.0847 18.116C20.2521 17.3389 20.6739 16.6398 21.2833 16.1293"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

IconFilter.propTypes = {
  size: PropTypes.oneOf(["24", "32", "60"]),
  color: PropTypes.string.isRequired,
  extClassName: PropTypes.string,
};

IconFilter.defaultProps = {
  size: "32",
  extClassName: null,
};
