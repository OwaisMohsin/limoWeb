const useLayout = () => {
  const DarklayoutStyle = {
    backgroundColor: "#000000",
    overflow: "hidden",
    width: "calc(100% - 8px)",
    maxWidth: "calc(100% - 8px)",
  };
  const LightlayoutStyle = {
    backgroundColor: "#ffffff",
    overflow: "hidden",
    width: "calc(100% - 8px)",
    maxWidth: "calc(100% - 8px)",
  };

  //here will be state
  //!Following solution is temorary, it will be changed with the context API
  let layoutStyle = DarklayoutStyle;
  return layoutStyle;
};

export default useLayout;
