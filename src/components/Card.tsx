import tw from "twin.macro";

export const StatCard = tw.div`
flex flex-col bg-white rounded-sm shadow-md overflow-hidden p-5 rounded
`;

export const Card = tw.div`
flex flex-col bg-white rounded-sm shadow-md overflow-hidden p-5 rounded
`;

export const Title = tw.h1`text-lg font-semibold  text-gray-900 uppercase`;
export const TitleWrapper = tw.div`mx-auto px-4 sm:px-6 md:px-8`;


export const Layer = tw.div`mx-auto px-4 sm:px-6 md:px-8 my-4`

export const ButtonOutline = tw.button`bg-white  border border-color-500 px-4 p-1 text-color-500 rounded hover:bg-color-500 hover:text-white transform transition-all duration-1000 `;
