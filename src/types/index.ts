export type Project = {
  imageUrl: string;
  title: string;
  subTitle: string;
  links: Array<ProjectLink>;
};

export type ProjectLink = {
  icon: JSX.Element;
  description: string;
};
