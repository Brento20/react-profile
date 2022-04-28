import React from 'react';

import ResumePDF from "../lib/resumePDF/resumePDF.pdf"

const frameSize = {
    width: "100%",
    height: "500px",
}

export default function Home() {
  return (
    <div id="container">

    <object {...frameSize} data={ResumePDF} type="application/pdf">
        <div>No online PDF viewer installed</div>
    </object>


    </div>
  );
}
