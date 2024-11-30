"use client";

const DarkModeToggle = (): React.ReactNode => (
  <span className="p-3 cursor-pointer">{DarkMoonIcon}</span>
);

export default DarkModeToggle;

const DarkMoonIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path
      fill="#000"
      fill-opacity=".85"
      d="M12.476 10.731c-4.372 0-7.117-2.632-7.117-6.85 0-1.181.237-2.261.542-2.801.102-.236.136-.338.136-.506A.592.592 0 0 0 5.46 0c-.068 0-.237 0-.44.101A8.294 8.294 0 0 0 1.37 3.15 8.243 8.243 0 0 0 .005 7.694a8 8 0 0 0 2.357 5.954 8.094 8.094 0 0 0 5.979 2.348c3.457 0 6.236-1.79 7.557-4.759l.102-.472c0-.338-.305-.54-.542-.54a1.02 1.02 0 0 0-.407.067c-.678.27-1.627.439-2.575.439ZM1.259 7.661c0-2.464 1.287-4.826 3.355-6.075-.272.675-.407 1.519-.407 2.43 0 4.927 3.05 7.862 8.1 7.862.813 0 1.524-.067 2.168-.337a7.038 7.038 0 0 1-2.624 2.415 7.073 7.073 0 0 1-3.476.825c-4.1-.034-7.116-3.071-7.116-7.12Z"
    />
  </svg>
);

// const MightySunIcon = (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="18"
//     height="18"
//     fill="none"
//     viewBox="0 0 18 18"
//   >
//     <g clip-path="url(#a)">
//       <path
//         stroke="#E5E7EB"
//         stroke-linecap="round"
//         stroke-linejoin="round"
//         stroke-opacity=".85"
//         stroke-width="2"
//         d="M9 .75v1.5m0 13.5v1.5M3.165 3.165 4.23 4.23m9.54 9.54 1.065 1.065M.75 9h1.5m13.5 0h1.5M3.165 14.835 4.23 13.77m9.54-9.54 1.065-1.065M12.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
//       />
//     </g>
//     <defs>
//       <clipPath id="a">
//         <path fill="#fff" d="M0 0h18v18H0z" />
//       </clipPath>
//     </defs>
//   </svg>
// );
