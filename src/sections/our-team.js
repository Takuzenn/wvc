/** @jsxRuntime classic */
/** @jsx jsx */
import { useRef, useState, useEffect } from 'react';
import { jsx, Box, Container, Image } from 'theme-ui';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionHeading from 'components/section-heading';
import TeamMember from 'components/cards/team-member';

import takuzen from 'assets/images/logos/takuzen.jpeg';
import ganco from 'assets/images/logos/ganco.jpeg';
import grin from 'assets/images/logos/grin.jpeg';
import michael from 'assets/images/logos/michael.jpeg';
import samyak from 'assets/images/logos/samyak.jpeg';
import tang from 'assets/images/logos/tang.jpg';
import tianzhe from 'assets/images/logos/tianzhe.jpg';
import jack from 'assets/images/logos/jack.png';
import jacob from 'assets/images/logos/jacob.jpg';
import atreyo from 'assets/images/logos/Atreyo.jpeg';


import avatar2 from 'assets/images/team/member2.png';
import avatar3 from 'assets/images/team/member3.png';
import avatar4 from 'assets/images/team/member4.png';
import arrowRight from 'assets/images/icons/arrow-right.png';

SwiperCore.use([Navigation, Pagination]);

const data = [
  {
    id: 1,
    avatar: takuzen,
    name: 'Takuzen',
    designation: 'President & Founder',
    socialLinks: [
      {
        name: 'twitter',
        link: 'http://twitter.com',
      },
      {
        name: 'github',
        link: 'http://github.com',
      },
      {
        name: 'dribbble',
        link: 'http://dribbble.com',
      },
    ],
  },
  {
    id: 2,
    avatar: grin,
    name: 'Ganco Martin',
    designation: 'Member',
    socialLinks: [
      {
        name: 'twitter',
        link: 'http://twitter.com',
      },
      {
        name: 'dribbble',
        link: 'http://dribbble.com',
      },
    ],
  },
  {
    id: 3,
    avatar: ganco,
    name: 'Nikolai Grin',
    designation: 'Advisor',
    socialLinks: [
      {
        name: 'twitter',
        link: 'http://twitter.com',
      },
      {
        name: 'dribbble',
        link: 'http://dribbble.com',
      },
    ],
  },
  {
    id: 4,
    avatar: tianzhe,
    name: 'TianXiong',
    designation: 'Member',
    socialLinks: [
      {
        name: 'twitter',
        link: 'http://twitter.com',
      },
      {
        name: 'github',
        link: 'http://github.com',
      },
    ],
  },
  {
    id: 5,
    avatar: jack,
    name: 'Jack',
    designation: 'Member',
    socialLinks: [
      {
        name: 'twitter',
        link: 'http://twitter.com',
      },
      {
        name: 'github',
        link: 'http://github.com',
      },
      {
        name: 'dribbble',
        link: 'http://dribbble.com',
      },
    ],
  },
  {
    id: 6,
    avatar: tang,
    name: 'Tang',
    designation: 'Member',
    socialLinks: [
      {
        name: 'twitter',
        link: 'http://twitter.com',
      },
      {
        name: 'github',
        link: 'http://github.com',
      },
      {
        name: 'dribbble',
        link: 'http://dribbble.com',
      },
    ],
  },
  {
    id: 7,
    avatar: michael,
    name: 'michael',
    designation: 'Member',
    socialLinks: [
      {
        name: 'twitter',
        link: 'http://twitter.com',
      },
      {
        name: 'dribbble',
        link: 'http://dribbble.com',
      },
    ],
  },
  {
    id: 8,
    avatar: jacob,
    name: 'jacob',
    designation: 'Member',
    socialLinks: [
      {
        name: 'twitter',
        link: 'http://twitter.com',
      },
      {
        name: 'github',
        link: 'http://github.com',
      },
    ],
  },
  {
    id: 9,
    avatar: samyak,
    name: 'samyak',
    designation: 'User interface designer',
    socialLinks: [
      {
        name: 'twitter',
        link: 'http://twitter.com',
      },
      {
        name: 'github',
        link: 'http://github.com',
      },
      {
        name: 'dribbble',
        link: 'http://dribbble.com',
      },
    ],
  },
  {
    id: 10,
    avatar: atreyo,
    name: 'Atreyok',
    designation: 'Member',
    socialLinks: [
      {
        name: 'twitter',
        link: 'http://twitter.com',
      },
      {
        name: 'github',
        link: 'http://github.com',
      },
      {
        name: 'dribbble',
        link: 'http://dribbble.com',
      },
    ],
  },
];

const OurTeam = () => {
  const swiperRef = useRef(null);
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerOffset, setContainerOffset] = useState({
    left: null,
    top: null,
  });

  const isEnd = swiperRef?.current?.swiper?.isEnd;

  const handlePrev = () => {
    swiperRef?.current?.swiper?.slidePrev();
    setInterval(() => {
      setCurrentIndex(swiperRef?.current?.swiper?.activeIndex);
    }, 100);

    clearInterval();
  };
  const handleNext = () => {
    swiperRef?.current?.swiper?.slideNext();
    setInterval(() => {
      setCurrentIndex(swiperRef?.current?.swiper?.activeIndex);
    }, 100);

    clearInterval();
  };

  useEffect(() => {
    setContainerOffset({
      left: containerRef.current.offsetLeft,
      top: containerRef.current.offsetTop,
    });
  }, [containerRef]);

  const breakpoints = {
    0: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1601: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  };

  return (
    <Box as="section" id="team" sx={styles.section}>
      <Container ref={containerRef}>
        <SectionHeading
          sx={styles.heading}
          title="Meet our superheros"
          description="Build an incredible workplace and grow your business with Gusto’s all-in-one platform with amazing contents."
        />
      </Container>
      <Box
        sx={{
          ml: currentIndex === 0 ? containerOffset?.left : 0,
          ...styles.teamWrapper,
        }}
      >
        {currentIndex !== 0 && (
          <button
            onClick={handlePrev}
            className="swiper-arrow swiper-arrow-left"
          >
            <Image src={arrowRight} alt="arrow left" />
          </button>
        )}
        {!isEnd && (
          <button
            className="swiper-arrow swiper-arrow-right"
            onClick={handleNext}
          >
            <Image src={arrowRight} alt="arrow right" />
          </button>
        )}

        <Swiper
          ref={swiperRef}
          spaceBetween={30}
          watchSlidesVisibility={true}
          slidesPerView={2}
          breakpoints={breakpoints}
        >
          {data?.map((item) => (
            <SwiperSlide key={item.id}>
              <TeamMember member={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default OurTeam;

const styles = {
  section: {
    pt: [11],
    pb: [11, null, null, 12, null, 14],
  },
  heading: {
    p: {
      maxWidth: 500,
      m: '10px auto 0',
    },
  },
  teamWrapper: {
    position: 'relative',
    pl: [6],
    pr: [6, null, null, 0],
    transition: '0.3s ease-in-out 0s',
    '.swiper-arrow': {
      backgroundColor: '#fff',
      border: 0,
      cursor: 'pointer',
      padding: 0,
      display: 'flex',
      width: [30, null, null, null, 40, 60],
      height: [30, null, null, null, 40, 60],
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0px 7px 14px rgba(25, 60, 101, 0.06)',
      borderRadius: '50%',
      position: 'absolute',
      zIndex: 2,
      top: 'calc(50% - 40px)',
      transform: 'translateY(-50%)',
      outline: 0,
      img: {
        maxWidth: [8, 10, null, null, '100%'],
      },
    },
    '.swiper-arrow-left': {
      left: [3, null, null, null, 20, 50],
      img: {
        transform: 'rotate(180deg)',
        marginLeft: '-4px',
      },
    },
    '.swiper-arrow-right': {
      right: [3, null, null, null, 20, 50],
      img: {
        marginRight: '-4px',
      },
    },
  },
};
