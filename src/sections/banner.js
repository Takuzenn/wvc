/** @jsxRuntime classic */
/** @jsx jsx */
import {
  jsx,
  Box,
  Container,
  Heading,
  Text,
  Label,
  Image,
  Button,
} from 'theme-ui';
import Input from 'components/input';
import wvc from 'assets/images/wvc.png';
import mvc from 'assets/images/mvc.png';
// import google from 'assets/images/google.png';
// import dropbox from 'assets/images/dropbox.png';
import { rgba } from 'polished';

const Banner = () => {
  return (
    <Box as="section" id="home" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.content}>
            <Heading as="h1">
              Wisconsin Venture Club
            </Heading>
            <Text as="p">
              Get to know Entrepreneurs At UW-Madison, Connect to investors,
              Boost your Startup and Get the most Systematic Entrepreneurial 
              Education here.
            </Text>
            <Box sx={styles.subscribe}>
              <Label htmlFor="email" variant="styles.srOnly">
                Email
              </Label>
              <a href="https://forms.gle/oWyxmpmuHJegmcqX9" sx={{textDecoration: 'none'}}>
                <Button variant="primary">Subscribe</Button>
              </a>          
            </Box>
            <Box sx={styles.sponsoredBy}>
              <Text as="span">Partenered with:</Text>
              <Box sx={styles.logos}>
                <Box as="figure" sx={{ display: 'flex' }}>
                  <Image src={mvc} alt="mvc" />
                </Box>
                {/* <Box as="figure" sx={{ display: 'flex' }}>
                  <Image src={google} alt="google" />
                </Box>
                <Box as="figure" sx={{ display: 'flex' }}>
                  <Image src={dropbox} alt="dropbox" />
                </Box> */}
              </Box>
            </Box>
          </Box>
          <Box as="figure" sx={styles.illustration}>
            <Image src={wvc} alt="wvc" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  contentWrapper: {
    display: ['block', null, null, null, 'grid', 'flex'],
    gridTemplateColumns: ['1fr 1fr', null, null, null, '0.9fr 1.1fr'],
    gap: [0, 0, 0, 0, 40],
    alignItems: 'center',
    minHeight: [null, null, '100vh', '70vh', '50vh', '100vh'],
    pt: ['100px', null, null, '130px', '25px', null, 0],
    textAlign: ['center', null, 'left'],
  },
  content: {
    maxWidth: [null, null, null, '75%', '100%'],
    margin: [null, null, null, '0 auto', 0],
    mt: ['50px', null, null, null, 80],
    textAlign: [null, null, null, 'center', 'left'],
    h1: {
      color: 'textSecondary',
      fontFamily: 'Crimson Text, Serif',
      fontWeight: 600,
      fontSize: ['34px', '34px', '34px', '44px', '40px', '49px', '62px'],
      lineHeight: [1.26, 1.26, 1.11, 1.4, 1.11],
    },
    p: {
      maxWidth: [450, null, null, 'none', 450],
      fontSize: ['14px', null, '18px', 17, '16px', '15px', '18px'],
      lineHeight: [1.87, 1.87, 2.33, 2.33, 2],
      mt: ['25px', null, null, null, 4],
    },
  },
  subscribe: {
    display: 'flex',
    alignItems: 'center',
    mt: ['30px'],
    input: {
      mr: ['15px'],
      minHeight: ['45px', null, null, 60, 50, null, 60],
    },
    button: {
      minHeight: ['45px', null, null, 60, 50, null, 60],
      fontSize: ['14px', '14px', '16px'],
    },
  },
  sponsoredBy: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: ['center', null, null, null, 'unset'],
    mt: "0px",
    span: {
      color: rgba('#566272', 0.6),
      fontSize: ['14px', '16px', '16px'],
    },
  },
  logos: {
    display: 'flex',
    alignItems: 'center',
    figure: {
      ml: ['10px', '16px', '28px', '16px', '16px'],
    },
    img: {
      maxWidth: '175px',
    },
  },
  illustration: {
    ml: [0, 0, '30px', 0, 0],
    mt: ['50px', null, null, null, 0],
    minWidth: ['auto', null, null, null, null, '600px'],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    img: {
      maxWidth: ['100%', null, null, '80%', '100%'],
      maxWidth: '500px',
    },
  },
};
