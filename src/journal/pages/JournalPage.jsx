import { MailOutline } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import React from "react";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";

export const JournalPage = () => {
  return (
    <>
      <JournalLayout>
        <NothingSelectedView />
        {/* <NoteView /> */}
        <IconButton size="large" sx={{ color: "white" }} />
      </JournalLayout>
    </>
  );
};
