/* eslint react/prop-types: 0 */
import React from "react"
import { preToCodeBlock } from "mdx-utils"
import { Text } from "@theme-ui/components"
import Code from "../@lekoarts/gatsby-theme-minimal-blog/components"
import Title from "../@lekoarts/gatsby-theme-minimal-blog/components/title"

export default {
  Text: ({ children, ...props }) => <Text {...props}>{children}</Text>,
  Title: ({ children, text, ...props }) => (
    <Title text={text} {...props}>
      {children}
    </Title>
  ),
  pre: preProps => {
    const props = preToCodeBlock(preProps)
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <Code {...props} />
    }
    // it's possible to have a pre without a code in it
    return <pre {...preProps} />
  },
  wrapper: ({ children }) => <>{children}</>,
}
