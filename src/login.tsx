import React from "react";
import {Container} from 'react-bootstrap';


const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=73aed06df4cf4d888e95af23dfbcfe23&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20playlist-modify-public%20playlist-modify-private";

  export default function Login() {
      return (
        <Container
          className="d-flex justify-content-center align-items-center"
        >
          <a
            className="btn btn-success btn-lg"
            href={AUTH_URL}
            style={{ backgroundColor: "#1b1b1b", border: "0px" }}
          >
            Login With Spotify
          </a>
        </Container>
      );

  }