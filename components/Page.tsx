import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import CssBaseline from "@mui/material/CssBaseline";
import getTheme from "@theme/index";
import AOS from "aos";
import Header from "./Header";
import Nav from "./Nav";

interface PageProps {
  children: React.ReactNode;
}
// export default function Page({ children }: PageProps) {
//   return (
//     <div>
//       <Header />
//       <Nav />
//       {children}
//     </div>
//   );
// }

export default function Page({ children }: PageProps): JSX.Element {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }

    AOS.init({
      once: true,
      delay: 50,
      duration: 500,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <ThemeProvider theme={getTheme()}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Paper elevation={0}>{children}</Paper>
    </ThemeProvider>
  );
}
