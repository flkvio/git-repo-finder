import React from "react";
import { ItemContainer } from "./styles";
const ItemRepo = ({ repo, handleRemoveRepo }) => {
  const handleRemove = () => {
    handleRemoveRepo(repo.id);
  };
  return (
    <ItemContainer onClick={handleRemove}>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href="#" rel="noreferer" className="remover">
        Remover
      </a>
      <a href={repo.html_url} rel="noreferer" target="blank">
        Ver repositório
      </a>
      <hr />
    </ItemContainer>
  );
};

export default ItemRepo;
