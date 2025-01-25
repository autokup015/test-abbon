// import { useState } from "react";
// import { DATA_IMG_USER } from "../constant/data-localstroage";
// import { IMG_PATH } from "../constant/img-user";

// type TImg = {
//   name: string;
//   path: string;
// };

// // ---------------------------------------------------------------------------------

// const useUserProfile = () => {
//   const getUserProfileImg =
//     localStorage.getItem(DATA_IMG_USER) || IMG_PATH.BLANK;

//   const listImg: TImg[] = Object.entries(IMG_PATH)
//     .map((item) => ({
//       name: item[0],
//       path: item[1],
//     }))
//     .slice(1);

//   const [selectedImg, setSelectedImg] = useState<TImg | null>(null);

//   // --------------------------- Function ---------------------------

//   const onChangeImg = (path: string) => {
//     localStorage.setItem(DATA_IMG_USER, path);
//   };

//   const onSelected = (item: TImg) => setSelectedImg(item);

//   const onClearSelected = () => setSelectedImg(null);

//   const onSaveImg = () => {
//     if (!selectedImg) {
//       return;
//     }

//     onChangeImg(selectedImg.path);
//   };

//   return {
//     getUserProfileImg,
//     listImg,
//     selectedImg,
//     onSaveImg,
//     onChangeImg,
//     onSelected,
//     onClearSelected,
//   };
// };

// export default useUserProfile;
