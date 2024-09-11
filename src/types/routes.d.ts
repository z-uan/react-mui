type ComponentType = () => JSX.Element;

declare type RouteType = {
  path: string;
  loged_redirect_to?: string;
  component: ComponentType | React.LazyExoticComponent<ComponentType>;
};
