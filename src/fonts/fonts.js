import { createGlobalStyle } from "styled-components";

import PretendardRegular from "./Pretendard-Regular.woff2";
import PretendardBlack from "./Pretendard-Black.woff2";
import PrentendardBold from "./Pretendard-Bold.woff2";
import RFLEXBlack from "./R-FLEX-BLACK.woff2";
import RFLEXRegular from "./R-FLEX-REGULAR.woff2";

export const FontStyles = createGlobalStyle`		    
  @font-face{
    font-family: "PRE-BLACK";
    src: url(${PretendardBlack}) format('woff2');
  }
  @font-face{
    font-family: "PRE-REGULAR";
    src: url(${PretendardRegular}) format('woff2');
  }
  @font-face{
    font-family: "PRE-BOLD";
    src: url(${PrentendardBold}) format('woff2');
  }
  @font-face{
    font-family: "RFLEX-BLACK";
    src: url(${RFLEXBlack}) format('woff2');
  }
  @font-face{
    font-family: "RFLEX-REGULAR";
    src: url(${RFLEXRegular}) format('woff2');
  }
`;
