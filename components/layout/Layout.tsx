import { Global } from "@emotion/react";
import * as Styled from "./Layout.styled";
import { globalStyles } from "../../shared/global";

interface ILayout {
    children: React.ReactNode;
}

export const Layout: React.FC<ILayout> = ({ children }) => (
    <Styled.LayoutWrapper>
        <Global styles={ globalStyles } />
        { children }
    </Styled.LayoutWrapper>
)