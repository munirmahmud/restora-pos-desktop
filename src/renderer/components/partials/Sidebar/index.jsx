import {
  faChartLine,
  faCog,
  faCube,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Image, Menu } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PremiumVersion from '../PremiumVersion';
import './Sidebar.style.scss';

const { SubMenu } = Menu;
const rootSubmenuKeys = ['food_management'];

export const Sidebar = ({ settings }) => {
  const [openKeys, setOpenKeys] = useState(['food_management']);
  const [premiumVersion, setPremiumVersion] = useState(false);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const onClick = (e) => {};

  return (
    <>
      <div className="sidebar" style={{ background: '#001529' }}>
        {settings?.logo && (
          <div className="sidebar_logo">
            <Image src={`file://${settings?.logo}`} preview={false} />
          </div>
        )}

        <Menu
          theme="dark"
          style={{
            height: '100%',
          }}
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
        >
          <Menu.Item key="dash_board" icon={<FontAwesomeIcon icon={faHome} />}>
            <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>

          <SubMenu
            key="food_management"
            title="Food Management"
            icon={<FontAwesomeIcon icon={faCube} />}
          >
            <SubMenu key="manage_category" title="Manage Category">
              <Menu.Item key="manage_category:1">
                <Link to="/add_category">Add Category</Link>
              </Menu.Item>

              <Menu.Item key="manage_category:2">
                <Link to="/category_list">Category List</Link>
              </Menu.Item>
            </SubMenu>

            <SubMenu key="manage_food" title="Manage Food">
              <Menu.Item key="manage_food:1">
                <Link to="/add_food">Add Food</Link>
              </Menu.Item>

              <Menu.Item key="manage_food:2">
                <Link to="/food_list">Food List</Link>
              </Menu.Item>

              {/* <Menu.Item key="manage_food:3">Add Group Item</Menu.Item> */}

              <Menu.Item key="manage_food:4">
                <Link to="/food_variant">Food Variant</Link>
              </Menu.Item>

              <Menu.Item key="manage_food:5">
                <Link to="/food_availability">Food Availability</Link>
              </Menu.Item>

              <Menu.Item key="manage_food:6">
                <Link to="/food_menuType">Menu Type</Link>
              </Menu.Item>
            </SubMenu>

            <SubMenu key="manage_addons" title="Manage Add-ons">
              <Menu.Item key="manage_addons:1">
                <Link to="/add_addons">Add Add-ons</Link>
              </Menu.Item>

              <Menu.Item key="manage_addons:2">
                <Link to="/addons_list">Add-ons Lists</Link>
              </Menu.Item>

              <Menu.Item key="manage_addons:3">
                <Link to="/addons_assign_list">Add-ons Assign List</Link>
              </Menu.Item>
            </SubMenu>
          </SubMenu>

          <SubMenu
            key="application_setting"
            title="Setting"
            icon={<FontAwesomeIcon icon={faCog} />}
          >
            <Menu.Item key="application_setting:1">
              <Link to="/application_setting">Application Setting</Link>
            </Menu.Item>

            <Menu.Item key="currency:2">
              <Link to="/currency">Currency</Link>
            </Menu.Item>

            <Menu.Item key="language:2">
              {settings.appStatus === 'free' ? (
                <Link to="#" onClick={() => setPremiumVersion(true)}>
                  Language
                </Link>
              ) : (
                <Link to="/language">Language</Link>
              )}
            </Menu.Item>
          </SubMenu>

          <SubMenu
            key="report"
            title="Report"
            icon={<FontAwesomeIcon icon={faChartLine} />}
          >
            <Menu.Item key="salesReport">
              <Link to="/sales_report">Sales Report</Link>
            </Menu.Item>

            <Menu.Item key="itemsSalesReport">
              <Link to="/items_sales_report">Items Sales Report</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>

      <PremiumVersion
        premiumVersion={premiumVersion}
        setPremiumVersion={setPremiumVersion}
      />
    </>
  );
};

export default Sidebar;
