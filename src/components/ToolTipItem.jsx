import React from 'react';
import { Button, Tooltip } from 'reactstrap';

class TooltipItem extends React.Component {
  constructor(props) {
    super(props);
  }
  toggle = () => {
    this.setState({
        toolTipOpen: !this.props.toolTipOpen
    });
  }

  render() {
    return (
      <span>
        <Tooltip placement={"bottom"} isOpen={this.props.toolTipOpen} target={this.props.target} toggle={this.toggle}>
          {this.props.message}
        </Tooltip>
      </span>
    );
  }
}

export default TooltipItem;