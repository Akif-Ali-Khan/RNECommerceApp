export type Category = {
  category: string;
  url: string;
  img: string;
  subCategories: Array<SubCategory>;
};

export type SubCategory = {
  title: string;
  links: Array<SubCategoryLinks>;
};

export type SubCategoryLinks = {
  name: string;
  url: string;
};
