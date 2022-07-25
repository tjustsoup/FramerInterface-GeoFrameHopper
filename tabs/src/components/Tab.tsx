import React from "react";
import { TeamsFxContext } from "./Context";
import { useData } from "@microsoft/teamsfx-react";
import FramingPage from "./FramingPage";
import MainPage from "./MainPage";
import { Provider, useSelector } from "react-redux";
import keplerStore from "../kepler.gl/store"

export default function Tab() {
  //  Redux store-based state management for the pages - "Main" and "Framing"
  //  Having this state managed by the store makes it so much easier to access/change in the custom kepler Location Panel
  const page = useSelector((state: any) => state.page.data);

  const { teamsfx } = React.useContext(TeamsFxContext);
  console.log(teamsfx);
  const getRequest = useData(async () => {
    if (teamsfx) {
      const accessToken = await teamsfx.getCredential().getToken([".default"]);
      console.log(accessToken);
    }
  });

  React.useEffect(() => {
    console.log(page);
  }, [page]);

  return (
    <div>
      {page === "Main" ? (
        <MainPage />
      ) : (
        <Provider store={keplerStore}>
          <FramingPage />
        </Provider>
      )}
    </div>
  );
}
