import { createContext } from "react";

const ViewContext = createContext({
  state: {
    menuOpened: true,
    viewType: "board",
    currVideo: null,
  },
  actions: {
    onVideoClick: () => {},
  },
});

export default ViewContext;
