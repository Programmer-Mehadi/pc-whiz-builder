import { DesktopOutlined, DownSquareOutlined, HomeOutlined, UnorderedListOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
const { SubMenu } = Menu;
const { Header } = Layout;

const Navbar = () => {
  const itemCategories = [
    'CPU / Processor',
    'Motherboard',
    'RAM',
    'Power Supply Unit',
    'Storage Device',
    'Monitor',
    'Others',
  ];
  const showDropDown = () => {
    document.querySelector('.dropdown').classList.toggle('hidden');
  }
  return (
    <Layout className="layout navbar_layout">
      <Header className='flex justify-between gap-10 items-center'>
        <div className="logo text-white text-2xl">
          PcWhizBuilder
        </div>
        <Menu className='hidden lg:flex justify-end flex-1 ml-auto text-white' theme="" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Home
          </Menu.Item>
          <SubMenu key="2" icon={<DownSquareOutlined />} title="Categories">
            {
              itemCategories.map((item, index) => (
                <Menu.Item className='hover:bg-slate-200' key={`2-${index + 1}`}>{item}</Menu.Item>
              ))
            }
          </SubMenu>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            PC Builder
          </Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />}>
            Login
          </Menu.Item>
        </Menu>
        <div className='lg:hidden relative flex items-center'>
          <div onClick={showDropDown}>
            <UnorderedListOutlined className='text-white text-2xl' />
          </div>
          <Menu className='dropdown hidden absolute top-[70px] left-[-100px] rounded-[8px] bg-white border-[1px] border-slate-800 shadow' theme="" mode="vertical" defaultSelectedKeys={['1']}>
            <Menu.Item className='hover:bg-slate-200' key="1" icon={<HomeOutlined />}>
              Home
            </Menu.Item>
            <SubMenu key="2" icon={<DownSquareOutlined />} title="Categories">
              {
                itemCategories.map((item, index) => (
                  <Menu.Item className='hover:bg-slate-200' key={`2-${index + 1}`}>{item}</Menu.Item>
                ))
              }
            </SubMenu>
            <Menu.Item className='hover:bg-slate-200' key="2" icon={<DesktopOutlined />}>
              PC Builder
            </Menu.Item>
            <Menu.Item className='hover:bg-slate-200' key="3" icon={<UserOutlined />}>
              Login
            </Menu.Item>
          </Menu>
        </div>
      </Header>
    </Layout>
  );
};

export default Navbar;
