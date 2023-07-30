import { DesktopOutlined, DownSquareOutlined, HomeOutlined, LogoutOutlined, UnorderedListOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
const { SubMenu } = Menu;
const { Header } = Layout;

const Navbar = () => {
  const { data: session } = useSession()
  const itemCategories = [
    { path: 'cpu-processor', value: 'CPU / Processor' },
    { path: 'motherboard', value: 'Motherboard' },
    { path: 'ram', value: 'RAM' },
    { path: 'power-supply-unit', value: 'Power Supply Unit' },
    { path: 'storage-device', value: 'Storage Device' },
    { path: 'monitor', value: 'Monitor' },
    { path: 'others', value: 'Others' }
  ]

  const showDropDown = () => {
    document.querySelector('.dropdown').classList.toggle('hidden');
  }
  const showCategoriesDropDown = () => {

    document.querySelector('.categories_dropdown')?.classList.toggle('hidden');
    for (let i = 0; i < document.querySelectorAll('.categories_modile_item').length; i++) {
      document.querySelectorAll('.categories_modile_item')[i].classList.toggle('hidden');
      document.querySelectorAll('.categories_modile_item')[i].classList.toggle('grid');
    }
  }
  const router = useRouter();

  const [active, setActive] = useState(1);
  useEffect(() => {
    if (router.pathname === '/') {
      setActive('1');
    }
    else if (router.pathname.match('/categories/')) {
      setActive('2');
    }
    else if (router.pathname.match('/pc-builder')) {
      setActive('3');
    }
    else if (router.pathname.match('/login')) {
      setActive('4');
    }
  }, [router.pathname])

  return (
    <Layout className="layout navbar_layout px-0">
      <Header className='flex justify-between gap-10 items-center bg-[#001529] px-5'>
        <div className="logo text-white text-2xl font-bold">
          <Link href={'/'} className='no-underline text-white'>
            PcWhizBuilder</Link>
        </div>
        <Menu className='hidden lg:flex justify-end flex-1 ml-auto text-white' theme="dark" mode="horizontal" selectedKeys={[active]} defaultSelectedKeys={[active]}>
          <Menu.Item key="1" icon={<HomeOutlined />} className='text-white'>
            <Link href="/" className='ml-0 pl-0 '>Home</Link>
          </Menu.Item>
          <Menu.Item className='relative' key="2" icon={<DownSquareOutlined />}  >
            <span onClick={() => showCategoriesDropDown(0)}>Categories</span>
            <Menu className='categories_dropdown hidden absolute top-[70px] left-0 w-fit  flex flex-col border shadow rounded-[8px]' mode="vertical" theme="dark" selectedKeys={[0]}>
              {
                itemCategories.map((item, index) => (
                  <Menu.Item className='hover:bg-slate-200 text-white hover:text-black' key={`2-${index + 1}`}>
                    <Link href={`/categories/${item.path}`} className=' ml-0 pl-0 text-white hover:text-black'>{item.value}</Link>
                  </Menu.Item>
                ))
              }
            </Menu>
          </Menu.Item>
          <Menu.Item key="3" icon={<DesktopOutlined />}>
            <Link href="/pc-builder" className='text-white ml-0 pl-0'>PC Builder</Link>
          </Menu.Item>{
            session ? <Menu.Item key="4" icon={<LogoutOutlined />}>
              <span onClick={() => signOut()} className='text-white ml-0 pl-0'>Sign out</span>
            </Menu.Item> :
              <Menu.Item key="4" icon={<UserOutlined />}>
                <Link href="/login" className='text-white ml-0 pl-0'>Login</Link>
              </Menu.Item>
          }
        </Menu>
        <div className='lg:hidden relative flex items-center'>
          <div onClick={showDropDown}>
            <UnorderedListOutlined className='text-white text-2xl cursor-pointer' />
          </div>
          <Menu className='dropdown hidden w-[200px] overflow-hidden  absolute top-[70px] left-[-170px] rounded-[8px]  border-[1px] border-slate-800 shadow' theme="dark" mode="vertical" selectedKeys={[active]}>
            <Menu.Item className='hover:bg-slate-700' key="1" icon={<HomeOutlined />}>
              <Link href="/" className='ml-0 pl-0'>Home</Link>
            </Menu.Item>
            <Menu.Item className='hover:bg-slate-700' key="2" icon={<DownSquareOutlined />} >
              <span onClick={() => showCategoriesDropDown()}>Categories</span>
            </Menu.Item>
            <div className=' gap-1 border-l categories_modile_item hidden' style={{
              borderLeft: '2px solid #E5E7EB',
              marginLeft: '30px'
            }}>
              {
                itemCategories.map((item, index) => (
                  <Link href={`/categories/${item.path}`} className=' leading-7  hover:bg-slate-700  rounded-[0px] py-1 pl-2 cursor-pointer' key={`2-${index + 2}`}>{item.value}</Link>
                ))
              }
            </div>
            <Menu.Item className='hover:bg-slate-700' key="3" icon={<DesktopOutlined />}>
              <Link href="/pc-builder" className='ml-0 pl-0'>PC Builder</Link>
            </Menu.Item>
            {
              session ? <Menu.Item className='hover:bg-slate-700' key="4" icon={<LogoutOutlined />}>
                <span onClick={() => { signOut(); toast("Logged out !") }} className='ml-0 pl-0'>Sign out</span>
              </Menu.Item> :
                <Menu.Item className='hover:bg-slate-700' key="4" icon={<UserOutlined />}>
                  <Link href="/login" className='ml-0 pl-0'>Login</Link>
                </Menu.Item>
            }
          </Menu>
        </div>
      </Header>
    </Layout>
  );
};

export default Navbar;


