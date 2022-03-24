import { useEffect } from "react";

export default function Spy(props) {
  useEffect(() => {
    const report = (event) => console.log("Clicked on", event.target, props.currentCity);
    document.addEventListener("click", report);

    return () => document.removeEventListener("click", report);
  });

  return <div onClick={props.discover}>🕵️</div>;
}
