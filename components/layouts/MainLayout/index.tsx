import Container from "@mui/material/Container";
import React from "react";

interface IMainLayoutProps {
  children?: React.ReactNode;
}
export default function MainLayout(props: IMainLayoutProps) {
  return <Container maxWidth="xl">{props.children}</Container>;
}
