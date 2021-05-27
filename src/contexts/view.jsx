import { createContext } from "react";

const ViewContext = createContext({
  state: {
    menuOpened: true,
    viewType: "board",
    currVideo: null,
    loading: false,
  },
  actions: {
    onVideoClick: () => {},
  },
});

export default ViewContext;
