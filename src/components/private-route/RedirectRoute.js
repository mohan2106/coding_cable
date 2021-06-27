import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const RedirectRoute = ({ component: Component, auth, ...rest }) => (
  // store.dispatch(getUser());
   <Route
    {...rest}
    render={props =>
      {
        // console.log("rest :", rest,"auth : ", auth);
        console.log("Private route is called on address,");
        return <Redirect to="/blogs" />
    }}
  />
);
RedirectRoute.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.user,
});


export default connect(mapStateToProps)(RedirectRoute);