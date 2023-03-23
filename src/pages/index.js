import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Services from 'sections/services';
import Testimonials from 'sections/testimonials';
import OurTeam from 'sections/our-team';
import OtherServices from 'sections/other-services';
import WhyUs from 'sections/why-us';
import SubscribeUs from 'sections/subscribe-us';
import Blog from 'sections/blog';
import Features from 'sections/features';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Wisconsin Venture Club"
          description="Entrepreneurial Club At UW-Madison, People can Connect to investors, Boost their Startups and Get the most Systematic Entrepreneurial Education here."
        />
        <Banner />
        {/* <Services /> */}
        <Features />

        <Testimonials />
        <OurTeam />
        {/* <OtherServices /> */}
        <WhyUs />
        {/* <Blog /> */}
        <SubscribeUs />
      </Layout>
    </ThemeProvider>
  );
}
