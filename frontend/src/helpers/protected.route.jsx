import { Route, Redirect } from "react-router-dom";

export default function ProtectedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        console.log(localStorage.getItem('access_token'))
        console.log(props, "<<< component");
        if (localStorage.getItem("access_token")) {
          return <Component />;
        } else {
          return <Redirect to={{ pathname: "/login", state: { from: props.location } }} />;
        }
      }}
    />
  );
}
