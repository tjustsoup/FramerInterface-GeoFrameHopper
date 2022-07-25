import React from "react";
import { TeamsFxContext } from "./Context";
import { useData } from "@microsoft/teamsfx-react";
import FramingPage from "./FramingPage";
import MainPage from "./MainPage";

export default function Tab() {
  const { teamsfx } = React.useContext(TeamsFxContext);
  console.log(teamsfx);
  const getRequest = useData(async () => {
    if (teamsfx) {
      const accessToken = await teamsfx.getCredential().getToken([".default"]);
      console.log(accessToken);
    }
  });
  const [page, setPage] = React.useState("Main");

  return (
    <div>
      {page === "Main" ? (
        <MainPage setPage={setPage} />
      ) : (
        <FramingPage setPage={setPage} />
      )}
    </div>
  );
}
