import React, { Suspense, useContext } from "react";
import { Route, Switch } from "react-router-dom";

import { GlobalStyle } from "./global.styles";
import { UserContext } from "./providers/user/user.provider";

const CheckoutPage = React.lazy(() => import("./pages/chekout-page"));
const SummaryPage = React.lazy(() => import("./pages/summary-page"));

function App() {
  const { user } = useContext(UserContext);
  return (
    <>
      <GlobalStyle />
      {console.log("user", user)}
      <Switch>
        <Suspense fallback={<div>...Is Loading</div>}>
          <Route
            exact
            path="/checkout"
            render={() => (user ? <SummaryPage /> : <CheckoutPage />)}
          />
        </Suspense>
      </Switch>
    </>
  );
}

export default App;
