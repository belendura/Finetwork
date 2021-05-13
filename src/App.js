import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import { GlobalStyle } from "./global.styles";

const CheckoutPage = React.lazy(() => import("./pages/chekout-page"));

function App() {
  return (
    <>
      <GlobalStyle />

      <Switch>
        <Suspense fallback={<div>...Is Loading</div>}>
          <Route exact path="/checkout" component={CheckoutPage} />
        </Suspense>
      </Switch>
    </>
  );
}

export default App;
