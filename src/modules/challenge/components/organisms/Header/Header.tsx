import SearchBar from "../../molecules/Searchbar/Searchbar";

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchSubmit: () => void;
}

const Header = ({
  searchTerm,
  onSearchChange,
  onSearchSubmit,
}: HeaderProps) => {
  return (
    <header className="header">
      <h1>Website</h1>
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={onSearchChange}
        onSearchSubmit={onSearchSubmit}
      />
    </header>
  );
};

export default Header;
