import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useDateTime } from "../contexts/dateTimeContext";
import dayjs from "dayjs";

export default function CustomeDateTimePicker() {
  const { selectedDateTime, handleDateTimeChange } = useDateTime();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateTimePicker"]}>
        <DateTimePicker
          value={selectedDateTime}
          onChange={handleDateTimeChange}
          label="Date & Time"
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
