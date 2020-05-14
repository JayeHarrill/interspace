import React from "react";
import styled from "styled-components";
import Collapsible from "react-collapsible";

const HelpStyled = styled.nav`
  text-align: left;

  .Collapsible__trigger {
    color: black;
    background-color: whitesmoke;
    cursor: pointer;
    padding: 0.2rem;
    :hover {
      background-color: #00ffbf;
    }
  }
  .Collapsible__contentOuter {
    max-width: 300px;
    background-color: #333;

    :hover {
      .Collapsible__contentInner {
      }
    }
  }
  .Collapsible__contentInner {
    padding: 0.5rem;

    a {
      color: #00ffbf;
    }
  }
`;

const StyledListItem = styled.li`
  list-style-type: none;
  padding: 1rem;
`;

const Help = () => {
  return (
    <HelpStyled>
      <Collapsible trigger="Help">
        <p>Heads up!</p>
        <ul>
          <StyledListItem>
            For a smoother experience, we recommend that you close all
            non-essential apps and browser tabs.<br/><br/>
            We recommend viewing VR in full screen.<br/><br/>
            By default, you are muted when entering any room.<br/><br/>
            Having sound issues in VR? Try switching your audio output
            on the welcome screen to internal speakers.<br/><br/>
            This is experimental.<br/><br/>
            VR may cause dizziness.<br/><br/>
            For VR headset viewing, must be viewed in Firefox with Firefox
            running off your discrete graphics card. Please note, some headsets
            have limited support.{" "}
          </StyledListItem>
        </ul>
        <hr />
        <p>Privacy:</p>
        <ul>
          <StyledListItem>Private Server</StyledListItem>
          <StyledListItem>Fully end to end encrypted</StyledListItem>
          <StyledListItem>
            Please don't write sensitive data into the chats.
          </StyledListItem>
          <StyledListItem>
            Please adhere to a general code of conduct or risk banning.
          </StyledListItem>
        </ul>
      </Collapsible>
    </HelpStyled>
  );
};

export default Help;
