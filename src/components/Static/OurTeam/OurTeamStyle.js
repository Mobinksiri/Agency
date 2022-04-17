import Styled from "styled-components";

export const OurTeamItemEl = Styled.div`
   width: 100%;
   
   * {
      user-select: none;
   }
   
   .our-team--item---head {
      width: 100%;
      height: 272px;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      border: 1px solid #3A3C56;
      border-radius: 6px;
      margin-bottom: 25px;

      img {
         height: 90%;
         max-width: 100%;
      }
      
   }

   .our-team--item---information {
      
      h4 {
         margin-bottom: 5px;
      }
   }
`;
