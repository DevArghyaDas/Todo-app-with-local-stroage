import { ReactNode } from "react";

export type RootLayoutType = Readonly<{
    children: ReactNode;
}>;

export type TodoCardType = {
    id: number;
    content: string;
};
