import React from 'react';

import ResumePDF from "../lib/resumePDF/resumePDF.pdf"

const frameSize = {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: "100%",
    height: "500px",
}

export default function Home() {
  return (
    <div>

    <object {...frameSize} data={ResumePDF} type="application/pdf">
        <div>No online PDF viewer installed</div>
    </object>


    </div>
  );
}
