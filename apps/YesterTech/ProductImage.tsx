import * as React from "react";
import classnames from "classnames";

import "YesterTech/ProductImage.scss";

interface ProductImageProps extends React.ComponentPropsWithoutRef<"img"> {
  size?: number;
}

const ProductImage: React.FC<ProductImageProps> = function ProductImage({
  size = 7,
  className,
  ...rest
}) {
  return (
    <img
      className={classnames("product-image", className)}
      style={{ fontSize: `${size}rem` }}
      alt={rest.alt || ""}
      {...rest}
    />
  );
};

export default ProductImage;
