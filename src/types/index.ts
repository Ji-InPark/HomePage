export type Project = {
  imageUrl: string;
  title: string;
  subTitle: string;
  links: Array<ProjectLink>;
  description: string;
};

export type ProjectLink = {
  icon: JSX.Element;
};
