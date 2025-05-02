import Header from "./components/Header";
import Startsection from "./components/Startsection";
import { Fragment } from "react";
import { ClickProvider } from "./contexts/clickContext";
import { DateTimeProvider } from "./contexts/dateTimeContext";
import { FormDataProvider } from "./contexts/taskFormContext";

export default function App() {
  return (
    <div className="box-border">
      <Fragment>
        <Header />

        <ClickProvider>
          <DateTimeProvider>
            <FormDataProvider>
              <Startsection />
            </FormDataProvider>
          </DateTimeProvider>
        </ClickProvider>
      </Fragment>
    </div>
  );
}
