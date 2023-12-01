import PropTypes from "prop-types";

export default function IconCategoryBusiness({ size, color, extClassName }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={extClassName}
    >
      <g fill={color}>
        <path d="M 13.886719 1.6660156 C 13.82264 1.6669272 13.764767 1.6696646 13.701172 1.6738281 C 13.008523 1.7156371 12.342285 1.9537613 11.779297 2.359375 C 11.21632 2.7649785 10.778542 3.3211005 10.519531 3.9648438 L 10.517578 3.96875 L 10.517578 3.9726562 C 10.477928 4.0736935 10.440507 4.177112 10.382812 4.3515625 L 10.382812 4.3554688 L 10.351562 4.453125 L 10.3125 4.5664062 C 10.106465 5.1365815 9.3314778 5.6492787 8.6425781 5.6660156 L 8.6425781 5.6757812 C 7.7320357 5.6840345 6.9053716 5.7040107 6.2148438 5.7851562 C 5.1618468 5.9088981 4.2505386 6.1878193 3.5117188 6.7890625 C 3.2467792 7.0041367 3.0049085 7.2462114 2.7890625 7.5117188 C 2.1878193 8.2505387 1.9088981 9.1618461 1.7851562 10.214844 C 1.6614147 11.267841 1.6660156 12.511189 1.6660156 14.144531 C 1.6660156 14.973827 1.6159668 15.588883 2.015625 16.236328 L 2.0175781 16.238281 L 2.0175781 16.240234 C 2.0864201 16.350689 2.1653292 16.454964 2.2519531 16.552734 C 2.4789567 16.809322 2.7272361 16.973779 3.0019531 17.101562 C 3.0060531 19.25298 3.0321693 21.424114 3.2246094 23.287109 C 3.3379393 24.380408 3.5111097 25.405898 3.7871094 26.279297 C 4.0577691 27.140596 4.4590806 27.953579 5.09375 28.517578 C 6.4484186 29.721577 8.2428311 30.103394 10.605469 30.246094 C 10.736669 30.253994 10.869941 30.234306 10.994141 30.191406 C 11.118241 30.148406 11.231778 30.081341 11.330078 29.994141 C 11.428378 29.907041 11.508906 29.801694 11.566406 29.683594 C 11.623906 29.565394 11.658116 29.43784 11.666016 29.306641 C 11.673916 29.175541 11.654228 29.044122 11.611328 28.919922 C 11.568428 28.795722 11.501262 28.680331 11.414062 28.582031 C 11.326863 28.483731 11.221716 28.405056 11.103516 28.347656 C 10.985416 28.290156 10.857762 28.255947 10.726562 28.248047 C 8.4412548 28.110647 7.2432042 27.752737 6.421875 27.023438 C 6.1778752 26.806038 5.9193123 26.386287 5.6953125 25.679688 C 5.4766527 24.986288 5.3215136 24.10873 5.2148438 23.082031 C 5.0508672 21.500683 5.0130461 19.659771 5.0039062 17.744141 L 11.666016 19.742188 L 11.666016 20.214844 C 11.666016 20.547741 11.766499 20.874705 11.953125 21.150391 C 12.139501 21.425587 12.403793 21.639883 12.712891 21.763672 L 13.646484 22.136719 C 15.156558 22.741032 16.843442 22.741032 18.353516 22.136719 L 19.285156 21.763672 L 19.287109 21.763672 C 19.596207 21.639883 19.860427 21.426061 20.046875 21.150391 C 20.233501 20.874705 20.333735 20.549207 20.333984 20.216797 L 20.333984 19.744141 L 23.839844 18.691406 A 1 1 0 0 0 24.509766 17.447266 A 1 1 0 0 0 23.652344 16.740234 A 1 1 0 0 0 23.263672 16.777344 L 20.333984 17.65625 L 20.333984 17.333984 C 20.333984 16.892104 20.157945 16.466538 19.845703 16.154297 C 19.533242 15.841586 19.107519 15.666016 18.666016 15.666016 L 13.333984 15.666016 C 12.892481 15.666016 12.466758 15.841586 12.154297 16.154297 C 11.841586 16.466758 11.666016 16.892481 11.666016 17.333984 L 11.666016 17.654297 L 4.7304688 15.576172 C 3.9365145 15.337283 3.7478378 15.226068 3.75 15.228516 L 3.7480469 15.228516 L 3.7480469 15.226562 C 3.7369239 15.214015 3.7261249 15.20203 3.7167969 15.1875 L 3.7167969 15.185547 C 3.7162699 15.184247 3.6660156 14.972278 3.6660156 14.144531 C 3.6660156 12.511189 3.6708959 11.305221 3.7714844 10.449219 C 3.8720733 9.593306 4.0437503 9.1372829 4.3398438 8.7734375 C 4.4701438 8.6130676 4.6151569 8.46826 4.7734375 8.3398438 C 5.1372829 8.0437502 5.5932157 7.8720767 6.4492188 7.7714844 C 7.3052217 7.6708921 8.5111886 7.6660156 10.144531 7.6660156 L 21.855469 7.6660156 C 23.488811 7.6660156 24.694783 7.6708959 25.550781 7.7714844 C 26.40678 7.8720766 26.862696 8.0437399 27.226562 8.3398438 C 27.386901 8.4701361 27.531704 8.6151127 27.660156 8.7734375 C 27.956272 9.1372854 28.127917 9.5932214 28.228516 10.449219 C 28.329114 11.305215 28.333984 12.511189 28.333984 14.144531 C 28.333984 14.972278 28.283733 15.184208 28.283203 15.185547 C 28.273603 15.200637 28.263253 15.213825 28.251953 15.226562 L 28.25 15.228516 C 28.2536 15.224416 28.175297 15.293419 27.699219 15.443359 A 1 1 0 0 0 27.039062 16.515625 L 27 16.515625 C 27 18.958223 26.981719 21.337064 26.761719 23.289062 C 26.652419 24.263762 26.496603 25.094001 26.283203 25.75 C 26.064603 26.416699 25.812825 26.814038 25.578125 27.023438 C 24.918126 27.610037 24.007542 27.961831 22.464844 28.144531 C 20.904845 28.331131 18.853297 28.333984 16 28.333984 C 15.7347 28.333984 15.480469 28.439453 15.292969 28.626953 C 15.105369 28.814453 15 29.068785 15 29.333984 C 15 29.599184 15.105369 29.853516 15.292969 30.041016 C 15.480469 30.228615 15.7347 30.333984 16 30.333984 C 18.802597 30.333984 20.995127 30.334859 22.703125 30.130859 C 24.427123 29.92556 25.808951 29.493577 26.90625 28.517578 C 27.519649 27.972279 27.912341 27.193693 28.181641 26.371094 C 28.45634 25.533695 28.6327 24.556371 28.75 23.513672 C 28.966128 21.59578 28.993815 19.330143 28.998047 17.09375 C 29.271062 16.967968 29.525547 16.806181 29.748047 16.554688 L 29.75 16.552734 C 29.83617 16.455334 29.914086 16.349849 29.982422 16.240234 L 29.982422 16.238281 L 29.984375 16.236328 C 30.384034 15.588883 30.333984 14.973827 30.333984 14.144531 C 30.333984 12.511189 30.338584 11.267847 30.214844 10.214844 C 30.091045 9.1619298 29.812219 8.2505363 29.210938 7.5117188 C 28.9959 7.2468233 28.753761 7.004916 28.488281 6.7890625 C 27.749455 6.1878296 26.836197 5.9088982 25.783203 5.7851562 C 25.092207 5.7039542 24.266244 5.6840156 23.355469 5.6757812 L 23.355469 5.6660156 C 22.666553 5.6492754 21.893695 5.1371785 21.6875 4.5664062 L 21.681641 4.5546875 L 21.677734 4.5429688 C 21.688824 4.5712995 21.673634 4.5290325 21.646484 4.4492188 L 21.646484 4.4472656 L 21.613281 4.3496094 L 21.613281 4.3476562 C 21.558514 4.183208 21.525252 4.0843205 21.474609 3.9609375 C 21.215428 3.3192534 20.782166 2.7638879 20.220703 2.359375 C 19.657715 1.9537613 18.989524 1.7156375 18.296875 1.6738281 C 18.170729 1.6657081 18.064581 1.6660156 17.890625 1.6660156 L 14.107422 1.6660156 C 14.021082 1.6660156 13.950797 1.665104 13.886719 1.6660156 z M 14.107422 3.6660156 L 17.890625 3.6660156 C 18.067925 3.6660156 18.13932 3.6678719 18.169922 3.6699219 L 18.173828 3.6699219 L 18.177734 3.6699219 C 18.492681 3.6889329 18.794776 3.7960245 19.050781 3.9804688 C 19.306803 4.1649228 19.505375 4.4183217 19.623047 4.7109375 L 19.625 4.7148438 L 19.625 4.71875 C 19.63513 4.743391 19.660297 4.8129203 19.716797 4.9824219 L 19.716797 4.984375 L 19.751953 5.0898438 C 19.769063 5.1402145 19.782241 5.1809258 19.806641 5.2460938 C 19.859644 5.3928137 19.924376 5.5312313 19.994141 5.6660156 L 12.005859 5.6660156 C 12.075681 5.531194 12.140321 5.3928722 12.193359 5.2460938 L 12.197266 5.2363281 L 12.248047 5.0839844 L 12.283203 4.9804688 C 12.335903 4.8211072 12.35636 4.758796 12.375 4.7109375 L 12.376953 4.7089844 C 12.494823 4.4173312 12.692 4.1643778 12.947266 3.9804688 C 13.203271 3.7960245 13.507319 3.6889325 13.822266 3.6699219 L 13.826172 3.6699219 L 13.828125 3.6699219 C 13.854825 3.6681119 13.931422 3.6660156 14.107422 3.6660156 z M 13.666016 17.666016 L 18.333984 17.666016 L 18.333984 19.990234 L 17.609375 20.279297 C 16.575655 20.692979 15.424345 20.692979 14.390625 20.279297 L 13.666016 19.990234 L 13.666016 17.666016 z " />
      </g>
    </svg>
  );
}

IconCategoryBusiness.propTypes = {
  size: PropTypes.oneOf(["24", "32", "60"]),
  color: PropTypes.string,
  extClassName: PropTypes.string,
};

IconCategoryBusiness.defaultProps = {
  size: "32",
  color: "#4E4CBF",
  extClassName: null,
};