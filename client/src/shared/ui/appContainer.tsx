// import { Container } from "@mantine/core";
import type { ReactNode } from "react";
interface Props {
    children: ReactNode;
    bg?: string;
}

const AppContainer = ({ children, bg = "#fff" }: Props) => {
    return (
        <div
            style={{
                background: bg,
                minHeight: "100vh",
                width: "100%",
            }}
            // size={1400}
        >
            {children}
        </div>
    );
};

export default AppContainer;
