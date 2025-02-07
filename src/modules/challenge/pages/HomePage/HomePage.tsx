import { ChangeEvent, useState } from "react";
import MainTemplate from "../../components/templates/MainTemplate/MainTemplate";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    alert(`Searching for: ${searchTerm}`);
  };

  return (
    <MainTemplate
      searchTerm={searchTerm}
      onSearchChange={handleSearchChange}
      onSearchSubmit={handleSearchSubmit}
    >
      <h2>Welcome</h2>
      <p>Content</p>
    </MainTemplate>
  );
};

export default HomePage;
