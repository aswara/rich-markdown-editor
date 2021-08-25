/* eslint-disable react/display-name */
import Example from "./index";
import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";

export default {
  title: "Example",
  component: Example,
} as Meta;

class YoutubeEmbed extends React.Component<{
  attrs: any;
  isSelected: boolean;
}> {
  render() {
    const { attrs } = this.props;
    const videoId = attrs.matches[1];

    return (
      <iframe
        className={this.props.isSelected ? "ProseMirror-selectednode" : ""}
        src={`https://www.youtube.com/embed/${videoId}?modestbranding=1`}
      />
    );
  }
}

export const ExampleEditor = () => (
  <Example
    blocks={[
      {
        name: "heading",
        title: "Big heading",
        keywords: "h1 heading1 title",
        icon: () => (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/75/YouTube_social_white_squircle_%282017%29.svg"
            width={24}
            height={24}
            alt="icon"
          />
        ),
        shortcut: "^ ⇧ 1",
        attrs: { level: 1 },
      },
      {
        name: "component",
        title: "component",
        keywords: "h1 heading1 title",
        icon: () => (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/75/YouTube_social_white_squircle_%282017%29.svg"
            width={24}
            height={24}
          />
        ),
        shortcut: "^ ⇧ 2",
        attrs: { level: 1 },
        onClick: ({ commands, ref }) => {
          console.log(ref)
          // commands["embed"]({
          //   href: "https://www.youtube.com/watch?v=Krg0COv_Xb8",
          //   matches: url => {
          //     return url.match(
          //       /(?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([a-zA-Z0-9_-]{11})$/i
          //     );
          //   },
          //   component: YoutubeEmbed,
          // });
        },

      },
    ]}
  />
);
