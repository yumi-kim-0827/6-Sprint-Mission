import TagMain from "./Tag";
import ProductTag from "./ProductTag";

export { default as TagList } from "./TagList";

export const Tag = Object.assign(TagMain, {
  Product: ProductTag,
});
