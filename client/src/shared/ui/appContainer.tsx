import { Container } from "@mantine/core";
import type { ReactNode } from "react";
interface Props {
    children: ReactNode;
}

const AppContainer = ({ children }: Props) => {
    return <Container size={1400}> {children}</Container>;
};

export default AppContainer;
