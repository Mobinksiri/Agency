import Styled from "styled-components";
import { Device } from "../../Styles/Devices";

export const BlogPostsEl = Styled.div`
   display: flex;
   justify-content: space-between;
   margin-bottom: 18px;
   flex-wrap: wrap;

   @media screen and ${Device.tablet} {
      margin-bottom: 0;
   }
`;
