import cx from 'classnames';
import React, { Component, HTMLAttributes, ReactElement, Children, ReactNode } from 'react';
import ReactList, { ReactListProps } from '@jswork/react-list';

const CLASS_NAME = 'react-block-steps';
export type ReactBlockStepsProps = {
  value: number;
  size: number;
  activatedSection: ReactNode;
  deactivatedSection: ReactNode;
  listProps?: Omit<ReactListProps, 'items' | 'template'>;
} & HTMLAttributes<HTMLDivElement>;

export default class ReactBlockSteps extends Component<ReactBlockStepsProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    value: 0,
    size: 5,
  };

  get items() {
    const { size } = this.props;
    return Array.from({ length: size }, (_, index) => index + 1);
  }

  handleTemplate = ({ item, index }) => {
    const { value, activatedSection, deactivatedSection } = this.props;
    const active = value >= item;
    const customProps = { 'data-value': value, 'data-index': index };
    const children = active ? activatedSection : deactivatedSection;
    const _children = Children.map(children, (child: ReactElement) =>
      React.cloneElement(child, customProps)
    );
    return React.createElement(React.Fragment, { key: index }, _children);
  };

  render() {
    const { className, value, listProps, size, activatedSection, deactivatedSection, ...rest } =
      this.props;
    return (
      <div
        data-value={value}
        data-component={CLASS_NAME}
        className={cx(CLASS_NAME, className)}
        {...rest}>
        <ReactList items={this.items} template={this.handleTemplate} {...listProps} />
      </div>
    );
  }
}
