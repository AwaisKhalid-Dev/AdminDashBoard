import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ component: Component, layout: Layout }) => {
  if (true) {
    return (
      <Layout >
        <Component /> 
      </Layout>
    );
  }
  return <Navigate to="/login" />;
};
