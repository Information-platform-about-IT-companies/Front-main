import PropTypes from "prop-types";

export default function IconRound({ size, color, extClassName }) {
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
        d="M 16.542317,1.1780227 C 13.779199,1.076461 11.042889,1.7500076 8.6419265,3.121382 A 0.5,0.5 0 0 0 8.4563798,3.8030227 0.5,0.5 0 0 0 9.1380203,3.9905226 c 2.2391347,-1.2789428 4.7903107,-1.9072161 7.3671887,-1.8125 2.576978,0.094716 5.077597,0.9077785 7.216796,2.3476563 2.139193,1.4398656 3.832846,3.4490487 4.890624,5.8007811 1.057772,2.35174 1.435793,4.951862 1.09375,7.507812 -0.341939,2.555818 -1.390417,4.966169 -3.029296,6.957031 -1.638882,1.990865 -3.801618,3.483827 -6.244142,4.310547 -2.442536,0.826727 -5.068928,0.953405 -7.580077,0.367188 C 10.345828,28.88378 8.0544237,27.609298 6.2317703,25.791303 2.2631632,21.264477 1.8891199,17.17602 2.2923171,14.166304 2.6952812,11.158348 4.0746071,8.3674492 6.2200516,6.2209915 a 0.5,0.5 0 0 0 0,-0.7070314 0.5,0.5 0 0 0 -0.7070312,0 C 3.2126692,7.8153977 1.7321889,10.808353 1.3001296,14.033491 c -0.43134834,3.219853 0.031998,7.696138 4.1933595,12.433594 a 0.50005001,0.50005001 0 0 0 0.021484,0.02344 c 1.9558862,1.954449 4.4187072,3.324541 7.1113279,3.953127 2.692646,0.628584 5.507895,0.49194 8.126955,-0.394533 2.61907,-0.886476 4.937998,-2.488314 6.695309,-4.623047 1.757318,-2.134733 2.883342,-4.718408 3.250002,-7.458984 0.366757,-2.740647 -0.0396,-5.52907 -1.17383,-8.0507846 C 28.390519,7.394621 26.572449,5.2395321 24.278646,3.6956008 21.984846,2.1516616 19.305532,1.2795841 16.542317,1.1780227 Z"
        fill={color}
      />
    </svg>
  );
}

IconRound.propTypes = {
  size: PropTypes.oneOf(["24", "32", "60"]).isRequired,
  color: PropTypes.string.isRequired,
  extClassName: PropTypes.string.isRequired,
};
