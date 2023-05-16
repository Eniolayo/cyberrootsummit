import React from "react";

export default function UseShowTopBtn() {
  const [showTopBtn, setShowTopBtn] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 400 ? setShowTopBtn(true) : setShowTopBtn(false);
      return;
    });
  });
  return [showTopBtn, setShowTopBtn];
}
