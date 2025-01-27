import styled from 'styled-components';
import { LIGHT_MODE, DARK_MODE, getMode } from '@/common/constants';
const { themeColor, bodyColor, sideColor } =
    getMode() === 'LIGHT_MODE' ? LIGHT_MODE : DARK_MODE;
export const AppWrapper = styled.div`
    .app_main {
        /* display: flex; */
        height: 100%;
        min-width: 800px;
    }
    .app_left {
        position: fixed;
        width: 210px;
        height: 100%;
        background: ${sideColor};
    }
    .app_right {
        margin-left: 210px;
        padding-bottom: 80px;
        min-height: 1000px;
        background: ${bodyColor};
        /* overflow: auto; */
    }
`;

export const BackTopWrapper = styled.div`
    .ant-back-top {
        bottom: 85px;
    }
    .back_top {
        line-height: 40px;
        padding: 0 10px;
        background-color: ${themeColor};
        color: #fff;
        border-radius: 10px;
    }
`;
