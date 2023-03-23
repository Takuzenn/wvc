/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Box, Container, Text } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Feature from 'components/cards/feature';
import { LearnMore } from 'components/link';
import Image from 'components/image';

import checkFilledCircle from 'assets/images/icons/check-circle-filled.png';
import { Fragment } from 'react';

const data = [
  {
    id: 1,
    color: '#28D1DC',
    value: '30+',
    title: 'Entrepreneurial minded Club members',
  },
  {
    id: 2,
    color: '#FF753A',
    value: '5+',
    title: 'Advisors and professors',
  },
  {
    id: 3,
    color: '#FA578E',
    value: '10+',
    title: 'Club member launched Venture',
  },
  {
    id: 4,
    color: '#28DCB2',
    value: '20+',
    title: '2h Entrepreneurial Courses Exclusive for members',
  },
];

const Features = () => {
  return (
    <Box as="section" id="intro" variant="section.features">
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.leftContent}>
            {data?.map((item) => (
              <Feature key={item?.id} feature={item} />
            ))}
          </Box>
          <Box sx={styles.rightContent}>
            <SectionHeading
              sx={styles.heading}
              title={
                <Fragment>
                  The best Entrepreneurial <br />
                  Club that you Should join
                </Fragment>
              }
              description="The first Entrepreneurial club (Wisconsin Venture Club | WVC) facing all students at the University of Wisconsin-Madison has officially been established. The Wisconsin Venture Club welcomes all outstanding undergraduate and graduate students to join us."/>
            <Text sx={styles.listItem} as="p">
              <Image src={checkFilledCircle} alt="check icon" />
              Meet you co-founder and investors here
            </Text>
            <Text sx={styles.listItem} as="p">
              <Image src={checkFilledCircle} alt="check icon" />
              Incubate your idea into a Venture
            </Text>
            {/* <Box sx={styles.explore}>
              <LearnMore path="#!" label="Explore More" />
            </Box> */}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Features;

const styles = {
  contentWrapper: {
    mt: ['20px'],
    gap: [30, 30, 30, 30, 40, 60, 70, 120],
    display: ['flex', 'flex', 'grid'],
    flexDirection: ['column-reverse', 'column-reverse', 'unset'],
    gridTemplateColumns: [
      '1.2fr 0.8fr',
      '1.2fr 0.8fr',
      '1.2fr 0.8fr',
      '1.1fr 0.9fr',
      '1.1fr 0.9fr',
      '1.1fr 0.9fr',
      '1.2fr 0.8fr',
    ],
    alignItems: 'center',
  },
  leftContent: {
    gap: [20, 20, 20, 20, 30, 45],
    display: ['grid', 'grid'],
    gridTemplateColumns: 'repeat(2, 1fr)',
    alignItems: 'flex-start',
    '> div': {
      ':first-of-type': {
        mt: ['65px'],
      },
      ':last-of-type': {
        mt: ['-65px'],
      },
    },
  },
  rightContent: {
    // ml: ['120px'],
  },
  heading: {
    textAlign: 'left',
    mb: ['20px'],
    mt: [0, 0, '-70px'],
    h2: {
      fontSize: ['28px', '28px', '28px', '28px', '36px', '40px'],
      lineHeight: [1.25, 1.5],
      letterSpacing: '-1.5px',
      br: {
        display: ['none', 'none', 'none', 'block'],
      },
    },
    p: {
      mt: ['15px', '10px'],
    },
  },
  listItem: {
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 2.81,
    display: 'flex',
    alignItems: 'center',
    img: {
      mr: '10px',
    },
  },
  explore: {
    mt: ['20px', '20px', '20px', '20px', '40px'],
  },
};
