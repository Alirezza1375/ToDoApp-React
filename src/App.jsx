import Header from "./components/Header";
import Startsection from "./components/Startsection";
import { Fragment } from "react";
import { ClickProvider } from "./contexts/clickContext";
import { DateTimeProvider } from "./contexts/dateTimeContext";

export default function App() {
  return (
    <div className="box-border">
      <Fragment>
        <Header />

        <ClickProvider>
          <DateTimeProvider>
            <Startsection />
          </DateTimeProvider>
        </ClickProvider>
      </Fragment>
    </div>
  );
}
