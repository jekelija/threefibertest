import { Canvas } from '@react-three/fiber';
import React from 'react';
import './css/App.css';
import Controls from './components/Controls';
import Box from './components/scene/Box';

export interface AppState {
  numBoxes:number
}

export class App extends React.Component<{}, AppState> {
    constructor(props: {}) {
        super(props);
        this.onBoxClick = this.onBoxClick.bind(this);
        this.state = { numBoxes: 0 };
    }

    onBoxClick(): void {
      this.setState({ numBoxes: this.state.numBoxes+1 });
    }

    render(): React.ReactNode {
        const meshes = [];
        for (var i = 0; i < this.state.numBoxes; ++i) {
            // note: we are adding a key prop here to allow react to uniquely identify each
            // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
            meshes.push(<Box></Box>);
        }
        return (
            <div className="App">
                <div id="canvas-container">
                    <Canvas>
                        <ambientLight intensity={0.1} />
                        <directionalLight color="white" position={[0, 0, 5]} />
                        {meshes}
                    </Canvas>
                </div>
                <Controls onBoxClick={this.onBoxClick} />
            </div>
        );
    }
}

export default App;
