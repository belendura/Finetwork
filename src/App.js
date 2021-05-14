import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import { GlobalStyle } from "./global.styles";

const CheckoutPage = React.lazy(() => import("./pages/chekout-page"));
const SummaryPage = React.lazy(() => import("./pages/summary-page"));

function App() {
  return (
    <>
      <GlobalStyle />

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
