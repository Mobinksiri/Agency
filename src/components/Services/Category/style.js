import Styled from "styled-components";
import { Device } from "../../Styles/Devices";

export const CategoriesEl = Styled.div`
      overflow: hidden;
      padding-bottom: 110px;

      #category-item {
         border-bottom: 1px solid #F3D1BF;

         .category-information {
            display: flex;
            flex-flow: column;
            align-items: flex-end;
            margin-bottom: 50px;

            #title-layout {
               h5 {
                  display: none;
               }
               h3 {
                  margin-bottom: 28px;
               }
               p:last-child {
                  max-width: 100%;
                  margin-bottom: 36px;
               }
            }

            .checks {
               min-width: 670px;

               .check {
                  display: flex;
                  margin-bottom: 16px;

                  svg {
                     margin-right: 16px;
                  }
               }

               .check:last-child {
                  margin-bottom: 0;
               }
            }
         }
      }

      #category-item:first-child {
         border-top: 1px solid #F3D1BF;
      }

      .active {
         /* height: 100%; */

         .category-head {
            margin-bottom: 125px;
            position: relative;

            h4 {
               color: var(--text-dark);
            }
            
            #arrow {
               transform: rotateZ(0)
            }

            &::after {
               content: '';
               position: absolute;
               width: 100%;
               height: 1px;
               background-color: #F3D1BF;
               left: 0;
               bottom: -49px;
            }
         }
      }

      @media screen and ${Device.tablet} {
         #category-item {

            .category-information {

               #title-layout {
                  max-width: 100%;
               }
               
               .checks {
                  min-width: 100%;
               }
            }
            
         }
      }
`;
