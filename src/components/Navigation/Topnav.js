import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Menu, Popover, Icon } from 'antd';
import Avatar from '../Avatar';
import './Topnav.less';

const SubMenu = Menu.SubMenu;

class Topnav extends React.Component {
  static propTypes = {
    username: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      notificationsVisible: false,
    };
  }

  onNotificationChange(openKeys) {
    if (openKeys.indexOf('notifications') !== -1) {
      this.setState({ notificationsVisible: true });
    } else {
      this.setState({ notificationsVisible: false });
    }
  }

  render() {
    const { username } = this.props;
    return (
      <Menu
        className="Topnav"
        mode="horizontal"
        onOpenChange={openKeys => this.onNotificationChange(openKeys)}
      >
        <Menu.Item key="user" className="Topnav__item">
          <Link className="Topnav__user" to={`/@${username}`}>
            <Avatar username={username} size={36} />
            <span>{username}</span>
          </Link>
        </Menu.Item>
        <SubMenu
          key="notifications"
          className="Topnav__item Topnav__notifications-menu"
          title={
            <Popover visible={this.state.notificationsVisible} content={<span>Notifications</span>} title="Notifications"><span className="icon-beanie" /></Popover>
          }
        />
        <SubMenu key="more" className="Topnav__item" title={<Icon type="ellipsis" />}>
          <Menu.Item key="more:1">Option 1</Menu.Item>
          <Menu.Item key="more:2">Option 2</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default Topnav;
