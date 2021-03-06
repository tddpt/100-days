/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { Heading } from "@theme-ui/components"

type TitleProps = {
  children?: React.ReactNode
  as?: string
  className?: string
  text: string
}

const Title = ({ text, children, as = `h2`, className }: TitleProps) => (
  <div
    sx={{
      justifyContent: `space-between`,
      alignItems: `center`,
      borderBottomStyle: `solid`,
      borderBottomWidth: `1px`,
      borderBottomColor: `divide`,
      pb: 4,
      mb: 5,
      flexFlow: `wrap`,
      boxSizing: `border-box`,
      display: `flex`,
    }}
  >
    <Heading as={as} sx={{ fontWeight: `medium`, fontSize: [4, 5], fontFamily: `heading` }} className={className}>
      {text}
    </Heading>
    <div
      sx={{
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
      }}
    >
      {children}
    </div>
  </div>
)

export default Title
