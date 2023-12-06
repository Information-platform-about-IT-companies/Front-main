import PropTypes from "prop-types";

export default function IconHeart({ size, extClassName, fill }) {
  function path(fillHeart) {
    if (fillHeart) {
      return (
        <path d="M 9.1640625,2.8085938 C 6.742255,2.6331175 4.5640466,3.6110834 2.9941406,5.1699219 -0.1456713,8.2875988 -0.99366179,13.863727 2.7773438,17.634766 c 0.00953,0.01 0.019297,0.01977 0.029297,0.0293 L 15.423828,29.091797 c 0.326828,0.29668 0.825516,0.29668 1.152344,0 L 29.193359,17.664062 c 0.01,-0.0095 0.01977,-0.0193 0.0293,-0.0293 C 32.973088,13.884279 32.122866,8.3106674 28.990234,5.1875 27.423919,3.6259163 25.251049,2.6428949 22.832031,2.8144531 20.620055,2.9713279 18.266598,4.2370552 16,6.5566406 13.732976,4.2365509 11.378643,2.9690549 9.1640625,2.8085938 Z" />
      );
    }
    return (
      <path d="M 9.1738281,2.6660156 C 6.7082087,2.4873649 4.4877059,3.4844769 2.8925781,5.0683594 -0.29767746,8.2361244 -1.1522964,13.908217 2.6757813,17.736328 a 1.0001,1.0001 0 0 0 0.035156,0.0332 L 15.328125,29.199219 a 1.0001,1.0001 0 0 0 1.359375,-0.01563 l 4,-3.791016 a 1,1 0 0 0 0.03906,-1.414062 1,1 0 0 0 -1.414062,-0.03711 L 15.984375,27.09375 4.0839844,16.314453 C 1.0637081,13.285714 1.8207594,8.9508058 4.3027344,6.4863281 5.5447512,5.2530672 7.1770537,4.5279019 9.0292969,4.6621094 10.88154,4.7963168 13.027704,5.7986844 15.25,8.3183594 a 1.0001,1.0001 0 0 0 1.5,0 c 2.222323,-2.5197111 4.365153,-3.5193479 6.212891,-3.6503907 1.847737,-0.1310427 3.476804,0.5977377 4.716796,1.8339844 2.477917,2.4704312 3.231069,6.8092239 0.236329,9.8124999 l -3.25,2.945313 a 1,1 0 0 0 -0.07031,1.412109 1,1 0 0 0 1.412109,0.07031 l 3.28125,-2.972656 a 1.0001,1.0001 0 0 0 0.03516,-0.0332 C 33.132105,13.928386 32.274631,8.259156 29.091797,5.0859375 27.50038,3.4993283 25.285227,2.4972002 22.822266,2.671875 20.602963,2.8292694 18.255447,4.1029549 16,6.3730469 13.744087,4.1023955 11.395587,2.826997 9.1738281,2.6660156 Z" />
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={extClassName}
    >
      {path(fill)}
    </svg>
  );
}

IconHeart.propTypes = {
  size: PropTypes.oneOf(["24", "32", "60"]),
  extClassName: PropTypes.string,
  fill: PropTypes.string,
};

IconHeart.defaultProps = {
  size: "32",
  extClassName: null,
  fill: "",
};
