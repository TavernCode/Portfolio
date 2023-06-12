import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbWork1 from '../public/images/works/work1.png'
import thumbWork2 from '../public/images/works/coming.png'
import thumbWork3 from '../public/images/works/coming.png'
import thumbWork4 from '../public/images/works/coming.png'

import Layout from '../components/layouts/article'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="work1" title="My Game ID Collection" thumbnail={thumbWork1}>
            You can add me on Game!
            </WorkGridItem>
          </Section>
          <Section delay={0.10}>
            <WorkGridItem id="work2" title="Work2" thumbnail={thumbWork2}>
              Description.
            </WorkGridItem>
          </Section>
          <Section delay={0.11}>
            <WorkGridItem
              id="thumbWork3"
              title="Work3"
              thumbnail={thumbWork3}
            >
              Description.
            </WorkGridItem>
          </Section>
          <Section delay={0.12}>
            <WorkGridItem id="thumbWork4" thumbnail={thumbWork4} title="Work4">
            Description.
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.2}>
          <Divider my={6} />
        </Section>
      </Container>
    </Layout>
  )
}

export default Works
