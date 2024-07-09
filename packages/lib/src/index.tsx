import cx from 'classnames';
import React, { Component, HTMLAttributes } from 'react';
import ReactList, { ReactListProps } from '@jswork/react-list';

const CLASS_NAME = 'react-block-steps';
export type ReactBlockStepsProps = {
  value: number;
  size: number;
  withIndex?: boolean;
  itemClassName?: string;
  activeClassName?: string;
  listProps?: Omit<ReactListProps, 'items' | 'template'>;
} & HTMLAttributes<HTMLDivElement>;

export default class ReactBlockSteps extends Component<ReactBlockStepsProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    value: 0,
    size: 5,
    withIndex: false,
    activeClassName: 'is-active',
  };

  get items() {
    const { size } = this.props;
    return Array.from({ length: size }, (_, index) => index + 1);
  }

  handleTemplate = ({ item, index }) => {
    const { value, itemClassName, withIndex, activeClassName } = this.props;
    const isActive = index < value;
    const children = withIndex ? item : null;
    return <span key={item} className={cx({ [activeClassName!]: isActive }, itemClassName)}>{children}</span>;
  };

  render() {
    const { className, value, listProps, activeClassName, itemClassName, withIndex, ...rest } = this.props;
    return (
      <div date-value={value} data-component={CLASS_NAME} className={cx(CLASS_NAME, className)} {...rest}>
        <ReactList items={this.items} template={this.handleTemplate} {...listProps} />
      </div>
    );
  }
}
