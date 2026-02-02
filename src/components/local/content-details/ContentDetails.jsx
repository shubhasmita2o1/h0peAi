import { Container } from "react-bootstrap";
import "./contentDetails.css";
import AnimationTitles from "../../animations/AnimationTitles";

export default function ContentDetails() {
  return (
    <div className="content-details">
      <Container className="mt-5">
        <div className="image"></div>
        <AnimationTitles
          title="Here is your brand new, all-in-one SaaS template."
          color="black-100"
        />
        <p className="body1 black-50 mt-4">
          Lorem ipsum dolor sit amet consectetur. Amet vitae mi sit tellus felis
          ac. Eu donec lacinia leo semper. Quis enim nibh ultrices morbi.
          Viverra proin bibendum in bibendum vestibulum in pellentesque et. Sit
          eget semper ante nisl ut risus. Facilisis ac praesent gravamet
          consectetur. Amet vitae mi sit tellus felis ac. Eu donec lacinia leo
          semper. Quis enim nibh ultrices morbi. Viverra proin bibendum in
          bibendum vestibulum in pellentesque et. Sit eget semper ante nisl ut
          risus. Facilisis ac praesent gravida aliquam tellus. Est rhoncusida
          aliquam tellus. Est rhoncus elit ut ultrices faucibus et ultricies
          ornare leo. Aenean sapien vitamet consectetur. Amet vitae mi sit
          tellus felis ac. Eu donec lacinia leo semper. Quis enim nibh ultrices
          morbi. Viverra proin bibendum in bibendum vestibulum in pellentesque
          et. Siamet consectetur. Amet vitae mi sit tellus felis ac. Eu donec
          lacinia leo semper. Quis enim nibh ultrices morbi. Viverra proin
          bibendum in bibendum vestibulum in pellentesque et. Sit eget semper
          ante nisl ut risus. Facilisis ac praesent gravida aliquam tellus. Est
          rhoncust eget semper ante nisl ut risus. Facilisis ac praesent gravida
          aliquam tellus. Est rhoncusae fames porttitor odio feugiat purus eu.
        </p>
      </Container>
    </div>
  );
}
