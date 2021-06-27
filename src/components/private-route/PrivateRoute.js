import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  // store.dispatch(getUser());
  return <Route
    {...rest}
    render={props =>
      {
        console.log("rest :", rest,"auth : ", auth);
        return auth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/signin" />
      )}
    }
  />
  };
PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.user,
});

// const mapStateToProps = (state,ownState) => {
//   const itemState = ownState.cake ? state.cake.numberOfCakes : state.icecream.numberOfIcecream;
//   return {
//       auth : state.user,
//       history : ownState.history
//   }
// }
export default connect(mapStateToProps)(PrivateRoute);