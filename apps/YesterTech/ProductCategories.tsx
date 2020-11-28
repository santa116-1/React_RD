import * as React from "react";
import { Link } from "react-router-dom";
import { FaGamepad, FaDesktop } from "react-icons/fa";
import { GiKeyboard } from "react-icons/gi";
import { IoIosSave } from "react-icons/io";
import { MdSpeaker } from "react-icons/md";

import Tiles from "YesterTech/Tiles";
import Centered from "YesterTech/Centered";
import "YesterTech/ProductCategories.scss";

interface CategoryTileBaseProps extends React.ComponentProps<Link> {}

interface CategoryTileProps extends CategoryTileBaseProps {
  icon: React.ElementType | React.ExoticComponent;
}

const CategoryTile: React.FC<CategoryTileProps> = function CategoryTile({
  children,
  icon: Icon,
  ...rest
}) {
  return (
    <Link className="category-tile" {...rest}>
      <span className="category-icon">
        <Icon />
      </span>
      <span className="title">{children}</span>
    </Link>
  );
};

export function CategoryComputers(
  props: CategoryTileBaseProps
): React.ReactElement {
  return (
    <CategoryTile {...props} icon={FaDesktop}>
      Computers
    </CategoryTile>
  );
}

export function CategoryAccessories(
  props: CategoryTileBaseProps
): React.ReactElement {
  return (
    <CategoryTile {...props} icon={GiKeyboard}>
      Gadgets
    </CategoryTile>
  );
}

export function CategoryStorage(
  props: CategoryTileBaseProps
): React.ReactElement {
  return (
    <CategoryTile {...props} icon={IoIosSave}>
      Storage
    </CategoryTile>
  );
}
export function CategoryGaming(
  props: CategoryTileBaseProps
): React.ReactElement {
  return (
    <CategoryTile {...props} icon={FaGamepad}>
      Games
    </CategoryTile>
  );
}

export function CategoryMusic(
  props: CategoryTileBaseProps
): React.ReactElement {
  return (
    <CategoryTile {...props} icon={MdSpeaker}>
      Music
    </CategoryTile>
  );
}

export default function ProductCategories(): React.ReactElement {
  return (
    <Centered size={40}>
      <Tiles minSize={7}>
        <CategoryComputers to={`/products?categories=computers`} />
        <CategoryAccessories to={`/products?categories=gadgets`} />
        <CategoryStorage to={`/products?categories=storage`} />
        <CategoryGaming to={`/products?categories=games`} />
        <CategoryMusic to={`/products?categories=music`} />
      </Tiles>
    </Centered>
  );
}
