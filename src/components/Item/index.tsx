import React from "react";
import { Data, DataContainer, DataImage } from "./styles";
import { Church, Artist, Painting } from "src/utils/mockData";
import ArtistText from "./texts/ArtistText";
import ChurchText from "./texts/ChurchText";
import PaintingText from "./texts/PaintingText";

const Item = ({ data, type, fixedImgHeight = false }) => {
  return (
    <DataContainer>
      {data.map((item: Church | Artist | Painting, index: number) => (
        <Data key={index}>
          <DataImage
            height={fixedImgHeight ? "100%" : "auto"}
            src={item.image}
            alt={item.name}
          />
          {getTypeInfo(type, item)}
        </Data>
      ))}
    </DataContainer>
  );
};

const getTypeInfo = (type: string, item: Church | Artist | Painting) => {
  switch (type) {
    case "artists":
      return <ArtistText artist={item as Artist} />;
    case "churches":
      return <ChurchText church={item as Church} />;
    case "paintings":
      return <PaintingText painting={item as Painting} />;
    default:
      return <></>;
  }
};
export default Item;
