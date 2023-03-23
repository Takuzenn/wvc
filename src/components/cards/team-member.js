/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Box, Image, Text, Heading, Link } from 'theme-ui';
import { FaTwitter, FaGithub, FaDribbble } from 'react-icons/fa';
import { Autoplay } from 'swiper';

const TeamMember = ({ member }) => {
  return (
    <Box sx={styles.section}>
      <Flex sx={styles.container}>

        <Flex as="figure" sx={styles.avatar}>
          <Image sx={styles.avatar} src={member?.avatar} alt={member?.name} />
        </Flex>
        <Box sx={styles.about}>
          <Heading as="h3">{member?.name}</Heading>
          <Text as="p">{member?.designation}</Text>
          {/* <Box sx={styles.socialLinks}>
            {member?.socialLinks?.map((social, index) => (
              <Link href={social?.link} key={index}>
                {social?.name === 'twitter' && (
                  <FaTwitter size="18px" color="#55ACEE" />
                )}
                {social?.name === 'github' && (
                  <FaGithub size="18px" color="#161614" />
                )}
                {social?.name === 'dribbble' && (
                  <FaDribbble
                    size="18px"
                    color="#B2215A"
                    style={{ backgroundColor: '#E74D89', borderRadius: 20 }}
                  />
                )}
              </Link>
            ))}
          </Box> */}
        </Box>
      </Flex>
    </Box>
  );
};

export default TeamMember;

const styles = {
  avatar: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 150,
    borderRadius: '50%',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: ['column', 'column', 'column', 'column'],
  },
  about: {
    alignItems: 'center',
    justifyContent: 'center',
    mt: [4],
    textAlign: ['center', 'center', 'center', 'center'],
    h3: {
      color: 'heading',
      fontFamily: 'body',
      fontSize: [3, null, 17, null, 4],
    },
    avatar: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    p: {
      color: '#7589A1',
      letterSpacing: '-0.2px',
      mt: [2],
    },
  },
  socialLinks: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: ['center', 'center', 'center', 'center'],
    mt: [3],
    a: {
      display: 'inline-flex',
      mr: [2],
    },
  },
};
