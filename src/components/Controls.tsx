import '../css/Controls.css';
import React from 'react';

export interface ControlsProps {
    onBoxClick: () => void;
}
export class Controls extends React.Component<ControlsProps, {}> {
    render(): React.ReactNode {
        return (
            <div className='controls'>
                <button onClick={this.props.onBoxClick}>Add a Box</button>
            </div>
        );
    }    
}
  
export default Controls;
  