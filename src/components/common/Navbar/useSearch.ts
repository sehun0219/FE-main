import { ChangeEvent, useState } from "react";

function useSearch() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    // 검색어를 처리하는 로직
    console.log(searchTerm);
  };

  return {
    searchTerm,
    handleSearchChange,
    handleSubmit,
  };
}

export default useSearch;
