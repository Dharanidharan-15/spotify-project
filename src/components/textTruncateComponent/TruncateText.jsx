import React from "react";

function TruncateText({ text }) {
  const maxLength = 25;

  let trimmedText = text.substring(0, maxLength);

  if (text.length > maxLength) {
    trimmedText += "...";
  }

  return <p>{trimmedText}</p>;
}

export default TruncateText;
