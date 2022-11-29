import {
  Route as ReactDOMRoute,
  RouteProps as ReactRouterProps,
} from "react-router-dom";
import { DefaultLayout } from "../pages/_layouts/default";

interface RouteProps extends ReactRouterProps {
  component: React.ComponentType;
}
const Route: React.FC<RouteProps> = ({ component: Component, ...rest }) => {
  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return (
          <DefaultLayout>
            <Component />
          </DefaultLayout>
        );
      }}
    />
  );
};

export default Route;
