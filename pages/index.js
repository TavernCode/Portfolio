import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  useColorModeValue,
  Button
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
// import { GridItem } from '../components/grid-item'
import { IoLogoGithub, IoLogoDiscord } from 'react-icons/io5'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          mt={6}
          align="center"
        >
          Hello, Digital Designer based in Indonesia here!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Kevin Alif Sofyan
            </Heading>
            <p>
              Digital Designer ( Graphic Designer / Front-End Developer )
            </p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/IO.jpg"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About Him
          </Heading>
          <Paragraph>
            Kevin start the career as Graphic Designer, He used to work in a
            design company, usually design banners, flyers, posters, logos and
            etc. However he wanted to try new things, he quit his job and tried
            to work as a freelancer and started coding on the side and had experience on the Front-End
            web developer. With a passion for building digital services/stuff, he has a capable for all things digital products, from
            planning and designing all the way to solving real-life problems
            with Graphic Design or Some code. {''}
            {/* <NextLink href="/works">
              <Link>Working...</Link>
            </NextLink> */}
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
                The Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1999</BioYear>
            Born in Probolinggo, Indonesia
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Graduated from Multimedia High School in Probolinggo
          </BioSection>
          <BioSection>
            <BioYear>2019 to 2022</BioYear>
            Work as Graphic Designer
          </BioSection>
          <BioSection>
            <BioYear>2022 to Present</BioYear>
            Work as a Freelancer
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Hobby
          </Heading>
          <Paragraph>
            Web Developing,{' '}
            <Link href="https://prominents.github.io/myGameID" target="_blank">
              Gaming
            </Link>
            , Graphic Design
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/prominents" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="blue"
                  leftIcon={<IoLogoGithub />}
                >
                  @Prominents
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://discordapp.com/users/345454773790703616"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="blue"
                  leftIcon={<IoLogoDiscord />}
                >
                  @Leonhardt
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}
export default Page
