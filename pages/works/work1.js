import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="My Game ID Collection">
      <Container>
        <Title>
          Work1 <Badge>2022</Badge>
        </Title>
        <P>
          As a Online RPG game player who enjoys playing a variety of games
          across different genres.
          <UnorderedList>
            <ListItem>
              Honkai Star Rail <Badge>ID: 800039374</Badge>
            </ListItem>
            <ListItem>
              Blue Archive <Badge>ID: 415006</Badge>
            </ListItem>
            <ListItem>
              Genshin Impact <Badge>ID: 801777776</Badge>
            </ListItem>
            <ListItem>
              World Flipper <Badge>ID: 238827952432</Badge>
            </ListItem>
            <ListItem>
              Honkai Impact 3rd <Badge>ID: 14985692</Badge>
            </ListItem>
            <ListItem>
              Guardian Tales <Badge>ID: #R9D5W</Badge>
            </ListItem>
            <ListItem>
              Higan:Eruthyll <Badge>ID: 4737418940098</Badge>
            </ListItem>
          </UnorderedList>
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://prominents.github.io/myGameID">
              https://prominents.github.io/myGameID
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/Android/Linux</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>HTML, CSS, Javascript</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/work1.png" alt="Work" />
      </Container>
    </Layout>
  )
}

export default Work
