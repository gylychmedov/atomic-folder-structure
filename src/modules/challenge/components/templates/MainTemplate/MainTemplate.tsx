import Header from "../../organisms/Header/Header";

interface MainTemplateProps {
  children: React.ReactNode;
  searchTerm: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchSubmit: () => void;
}

const MainTemplate = ({
  children,
  searchTerm,
  onSearchChange,
  onSearchSubmit,
}: MainTemplateProps) => {
  return (
    <div className="main-template">
      <Header
        searchTerm={searchTerm}
        onSearchChange={onSearchChange}
        onSearchSubmit={onSearchSubmit}
      />
      <main>{children}</main>
    </div>
  );
};

export default MainTemplate;
