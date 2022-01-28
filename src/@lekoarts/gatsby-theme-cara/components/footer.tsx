/** @jsx jsx */
import { Box, Flex, Link, useColorMode, jsx } from "theme-ui"

const Footer = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <Box as="footer" variant="footer">
      <button
        sx={{ variant: `buttons.toggle`, fontWeight: `semibold`, display: `block`, mx: `auto`, mb: 3 }}
        onClick={toggleColorMode}
        type="button"
        aria-label="Toggle dark mode"
      >
        {isDark ? `Light` : `Dark`}
      </button>
      Copyright &copy; 2020-{new Date().getFullYear()}. XiaZe All rights reserved.
      <br />
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 3,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >
        <Link
          aria-label="Link to the beian.miit.gov.cn"
          sx={{ ml: 2 }}
          href="http://beian.miit.gov.cn"
        >
          苏ICP备20006368号-1
        </Link>
        &nbsp;
        <img width="30" height="30" src="/备案图标.png" alt="备案图标" />
        <Link
          aria-label="Link to the www.beian.gov.cn"
          sx={{ ml: 2 }}
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32059002002895"
        >
          苏公网安备 32059002002895号
        </Link>
      </Flex>
    </Box>
  )
}

export default Footer
