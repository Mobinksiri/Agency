import Styled from "styled-components";
import { Container } from "./Container";

const LineEl = Styled.div`
   width: 100%;
   height: 1px;
   background-color: #F3D1BF;
`;

const Line = () => {
   return <LineEl id="line" />;
};

export default Line;
