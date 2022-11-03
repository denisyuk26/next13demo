import Header from "../../components/header/header";

function BeerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
}

export default BeerLayout;
