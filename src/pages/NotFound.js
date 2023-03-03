import styled from 'styled-components';

function NotFound() {
  return (
    <Section>
      <Container>
        <Box>
						<H1>404 Not Found</H1>
            <P>Please try again or try a different link.</P>
        </Box>
        <Image src="/images/notfound.gif" />
      </Container>
    </Section>
  )
}

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const Container = styled.div`

`

const Box = styled.div`

`

const H1 = styled.h1`
  font-size: 50px;
`

const P = styled.p`
  font-size: 20px;
`

const Image = styled.img`
  width: 100%;
`

export default NotFound