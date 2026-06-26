import { useEffect } from "react";

const Head = (props) => {
  useEffect(() => {
    document.title = props.title + " | Dogs";
    document
      .querySelector("meta[name='description']")
      .setAttribute(
        "content",
        props.description || "A simple project to show the dogs pictures",
      );
  }, [props]);

  return <></>;
};

export default Head;
