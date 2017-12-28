import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Input } from 'antd';
import Affix from '../components/Utils/Affix';
import LeftSidebar from '../app/Sidebar/LeftSidebar';
import requiresLogin from '../auth/requiresLogin';
import './Settings.less';

@requiresLogin
export default class ProfileSettings extends React.Component {
  socialProfiles = [
    { id: 'website', icon: 'link', color: 'black', name: 'Website' },
    { id: 'facebook', icon: 'facebook', color: '#3b5998', name: 'Facebook' },
    { id: 'twitter', icon: 'twitter', color: '#00aced', name: 'Twitter' },
    { id: 'instagram', icon: 'instagram', color: '#8a3ab9', name: 'Instagram' },
    { id: 'github', icon: 'github', color: 'black', name: 'GitHub' },
    { id: 'bitcoin', icon: 'bitcoin', color: '#ff9900', name: 'Bitcoin' },
    { id: 'ethereum', icon: 'ethereum', color: '#3c3c3d', name: 'Ethereum' },
  ];

  render() {
    const socialInputs = this.socialProfiles.map(profile => (
      <Input
        key={profile.id}
        size="large"
        prefix={
          <i
            className={`Settings__prefix-icon iconfont icon-${profile.icon}`}
            style={{
              color: profile.color,
            }}
          />
        }
        placeholder={profile.name}
      />
    ));

    return (
      <div className="shifted">
        <div className="settings-layout container">
          <Affix className="leftContainer" stickPosition={77}>
            <div className="left">
              <LeftSidebar />
            </div>
          </Affix>
          <div className="center">
            <h1>
              <FormattedMessage id="edit_profile" defaultMessage="Edit Profile" />
            </h1>
            <div className="Settings">
              <div className="Settings__section">
                <h3>
                  <FormattedMessage id="profile_name" defaultMessage="Name" />
                </h3>
                <div className="Settings__section__inputs">
                  <Input size="large" placeholder="Name to display on your profile" />
                </div>
              </div>
              <div className="Settings__section">
                <h3>
                  <FormattedMessage id="profile_about" defaultMessage="About" />
                </h3>
                <div className="Settings__section__inputs">
                  <Input.TextArea
                    autosize={{ minRows: 2, maxRows: 6 }}
                    placeholder="Name to display on your profile"
                  />
                </div>
              </div>
              <div className="Settings__section">
                <h3>
                  <FormattedMessage id="profile_picture" defaultMessage="Profile picture" />
                </h3>
                <div className="Settings__section__inputs">
                  <Input size="large" placeholder="Profile picture" />
                </div>
              </div>
              <div className="Settings__section">
                <h3>
                  <FormattedMessage id="cover_picture" defaultMessage="Cover picture" />
                </h3>
                <div className="Settings__section__inputs">
                  <Input size="large" placeholder="Cover picture" />
                </div>
              </div>
              <div className="Settings__section">
                <h3>
                  <FormattedMessage id="Social profiles" defaultMessage="Social profiles" />
                </h3>
                <div className="Settings__section__inputs">{socialInputs}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
