import { Header } from "../Header";

export const Layout = ({ children }: {children:JSX.Element}) => {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
    </>
  );
};
