import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <div id="footer">
    <MDBFooter className="font-small pt-4 mt-4">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          <h5 className="title">Miami Ridez</h5>
          &copy; {new Date().getFullYear()} Copyright: Miami Ridez LLC
        </MDBContainer>
      </div>
    </MDBFooter>
    </div>
  );
}

export default FooterPage;
