import { Marker, Popup } from "react-leaflet";
import L from "leaflet";

export default function CustomMarker({ position, text }) {
  const size = 32;
  const customIcon = L.divIcon({
    className: "custom-icon",
    html: `<svg
		width=${size}
		height=${size}
		viewBox="0 0 32 32"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="m 16,3.0007656 c -6.0416649,0 -10.9999999,4.734718 -10.9999999,10.5996094 0,3.27969 2.690162,6.842151 5.2382809,9.835937 2.54812,2.993786 5.089844,5.302735 5.089844,5.302735 a 1.0001,1.0001 0 0 0 1.345703,0 c 0,0 2.539771,-2.308949 5.087891,-5.302735 C 24.309839,20.442526 27,16.880065 27,13.600375 a 1,1 0 0 0 -1,-1 1,1 0 0 0 -1,1 c 0,2.022304 -2.309843,5.658354 -4.761719,8.539062 C 18.122013,24.625841 16.54126,26.056044 16,26.559359 15.458241,26.055567 13.877584,24.625367 11.761719,22.139437 9.309844,19.258729 7,15.622679 7,13.600375 7,8.8613976 10.995977,5.0007656 16,5.0007656 c 3.652913,0 6.500229,1.601965 8.03125,4.7695315 A 1,1 0 0 0 25.367188,10.23514 1,1 0 0 0 25.832031,8.8992036 C 23.979656,5.0667776 20.270479,3.0007666 16,3.0007656 Z"
			fill="#BD489D"
		/>
		<path
			d="m 16,11.399203 c -1.209199,0 -2.25,0.975519 -2.25,2.201172 0,1.225663 1.040868,2.199219 2.25,2.199219 0.828143,0 1.573038,-0.44111 1.964844,-1.126954 C 18.145077,14.357136 18.25,13.986585 18.25,13.600375 18.25,12.374722 17.2092,11.399203 16,11.399203 Z"
			fill="#BD489D"
		/>
	</svg>`,
    iconSize: [32, 32],
  });

  return (
    <Marker position={position} icon={customIcon}>
      <Popup>{text}</Popup>
    </Marker>
  );
}
