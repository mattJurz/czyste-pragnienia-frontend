import Header from "./Header";
import Nav from "./Nav";

interface PageProps {
  children: React.ReactNode;
}
export default function Page({ children }: PageProps) {
  return (
    <div>
      <Header />
      <Nav />
      {children}
    </div>
  );
}
