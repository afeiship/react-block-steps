import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';
import { Card } from 'antd';

const CLASS_NAME = 'react-ant-card';

export default class ReactAntCard extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * If ant-card-body should have padding.
     */
    padding: PropTypes.bool
  };

  static defaultProps = {
    padding: false
  };

  render() {
    const { className, padding, ...props } = this.props;
    return (
      <Card
        data-component={CLASS_NAME}
        data-padding={padding}
        className={classNames(CLASS_NAME, className)}
        {...props}
      />
    );
  }
}
