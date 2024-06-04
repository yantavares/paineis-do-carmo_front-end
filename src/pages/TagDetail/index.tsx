import React from "react";
import { useParams } from "react-router-dom";
import Item from "src/components/Item";
import colors from "src/utils/colors";
import {
  brazilianArtists,
  brazilianChurches,
  brazilianPaintings,
} from "src/utils/mockData";
import { capitalize } from "src/utils/strings";
import {
  SearchContainer,
  SearchHeader,
  SearchResult,
  SearchResultsContainer,
  SearchSubHeader,
} from "./styles";

const TagDetail = () => {
  const { tag } = useParams();
  return (
    <SearchContainer>
      <SearchHeader>
        Tópico: <span style={{ color: colors.green }}>{parseTag(tag)}</span>
      </SearchHeader>
      <SearchSubHeader>Artífices</SearchSubHeader>
      <SearchResultsContainer>
        {brazilianArtists
          .concat(brazilianArtists)
          .map((item: any, index: number) => (
            <SearchResult key={index}>
              <Item tagCount={2} width="20rem" item={item} type={"artists"} />
            </SearchResult>
          ))}
      </SearchResultsContainer>
      <SearchSubHeader>Igrejas</SearchSubHeader>
      <SearchResultsContainer>
        {brazilianChurches
          .concat(brazilianChurches)
          .map((item: any, index: number) => (
            <SearchResult key={index}>
              <Item tagCount={2} width="20rem" item={item} type={"churches"} />
            </SearchResult>
          ))}
      </SearchResultsContainer>
      <SearchSubHeader>Obras</SearchSubHeader>
      <SearchResultsContainer>
        {brazilianPaintings
          .concat(brazilianPaintings)
          .map((item: any, index: number) => (
            <SearchResult key={index}>
              <Item tagCount={2} width="20rem" item={item} type={"paintings"} />
            </SearchResult>
          ))}
      </SearchResultsContainer>
    </SearchContainer>
  );
};

const parseTag = (tag: string) => {
  return capitalize(tag.replace(/-/g, " "));
};

export default TagDetail;
