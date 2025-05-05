import Header from "./components/Header";
import List from "./components/List";
import ClickProvider from "./Context/clickContext";
import { CardProvider } from "./Context/CardsContext";
import { Fragment } from "react";

export default function App() {
  return (
    <div>
      <Fragment>
        <Header />
        <ClickProvider>
          <CardProvider>
            <List />
          </CardProvider>
        </ClickProvider>
      </Fragment>
    </div>
  );
}
