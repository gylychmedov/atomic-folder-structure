import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchSubmit: () => void;
}

const SearchBar = ({
  searchTerm,
  onSearchChange,
  onSearchSubmit,
}: SearchBarProps) => {
  return (
    <div className="search-bar">
      <Input
        placeholder="Search..."
        value={searchTerm}
        onChange={onSearchChange}
      />
      <Button label="Search" onClick={onSearchSubmit} />
    </div>
  );
};

export default SearchBar;
