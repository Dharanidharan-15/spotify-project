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

// i have not used this, instead i have used css handling ...
