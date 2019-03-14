/**
 *
 * Tabs
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  TabContent,
  Container,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from 'reactstrap';
import classnames from 'classnames';

import StyledTabs from './StyledTabs';
import Informations from '../Informations';
import Reviews from '../Reviews';

class Tabs extends React.Component {
  state = { activeTab: '2' };

  toggle(tab) {

    console.log(this.props.history);

    this.props.history.push({ search: `?tab=${tab}` });

    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    const { restaurant } = this.props;

    return (
      <>
        <StyledTabs />
        <div className="tabs-wrapper">
          <Nav tabs>
            <Container>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === '1'
                  })}
                  onClick={() => {
                    this.toggle('1');
                  }}
                >
                  <span title="Informations">Informations</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === '2'
                  })}
                  onClick={() => {
                    this.toggle('2');
                  }}
                >
                  <span title="Reviews">Reviews</span>
                </NavLink>
              </NavItem>
            </Container>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1" className="informations-pane">
              <Container>
                <Row>
                  <Col sm="12">
                    <Informations />
                  </Col>
                </Row>
              </Container>
            </TabPane>
            <TabPane tabId="2" className="reviews-pane">
              <Container>
                <Row>
                  <Col sm="12">
                    <Reviews restaurant={restaurant} />
                  </Col>
                </Row>
              </Container>
            </TabPane>
          </TabContent>
        </div>
      </>
    );
  }
}

Tabs.defaultProps = {
  restaurant: {}
};

Tabs.propTypes = {
  restaurant: PropTypes.object
};

export default Tabs;
