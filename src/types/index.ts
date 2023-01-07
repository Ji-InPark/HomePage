export type Project = {
  imageIcon: JSX.Element;
  title: string;
  subTitle: string;
  links: Array<ProjectLink>;
};

export type ProjectLink = {
  icon: JSX.Element;
  description: string;
};
