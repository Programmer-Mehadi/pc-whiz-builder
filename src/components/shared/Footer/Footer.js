import { Col, Layout, Row } from 'antd';
import Link from 'next/link';
 

const { Footer } = Layout;

const FooterSection = () => {
  return (
    <Layout className="layout z-9">
      {/* Your header and content here */}
      <Footer className="footer bg-[#001529] text-white px-5 py-14">
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
            <h3>Support</h3>
            <ul>
              <li>FAQ</li>
              <li>Help Center</li>
              <li>Contact Support</li>
            </ul>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
            <h3>Pages</h3>
            <ul>
              <li className='cursor-pointer hover:underline hover:text-[#FFD2D7]'>
                <Link href="/">Home</Link>
              </li>
              <li className='cursor-pointer hover:underline hover:text-[#FFD2D7]'>
              <Link href="/pc-builder">PC Builder</Link>
              </li>
              <li className='cursor-pointer hover:underline hover:text-[#FFD2D7]'>Privacy Policy</li>
            </ul>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <h3>Contact</h3>
            <ul>
              <li>
                Location: Lalbagh, Dhaka, Bangladesh
              </li>
              <li>
               mehadi.developer@gmail.com
              </li>
            </ul>
          </Col>
        </Row>
        <div className="footer-bottom">
          <p className='pt-12'>©2023 PcWhizBuilder. All rights reserved.</p>
        </div>
      </Footer>
    </Layout>
  );
};

export default FooterSection;
