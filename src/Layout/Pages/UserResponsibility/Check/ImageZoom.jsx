import React from 'react';
import './ImageZoom.css'; // Import your CSS file

class ImageZoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
      mouseX: 0,
      mouseY: 0
    };
  }

  handleHover = (e) => {
    this.setState({
      isHovered: !this.state.isHovered,
      mouseX: e.nativeEvent.offsetX,
      mouseY: e.nativeEvent.offsetY
    });
  };

  render() {
    const { src, alt } = this.props;
    const { isHovered, mouseX, mouseY } = this.state;

    return (
      <div className="image-zoom-container" onMouseMove={this.handleHover}>
        <div className="image-zoom">
          <img src={src} alt={alt} className={isHovered ? 'zoom-in' : ''} />
        </div>
        {isHovered && (
          <div className="zoomed-image" style={{ left: mouseX, top: mouseY }}>
            <img src={src} alt={alt} />
          </div>
        )}
      </div>
    );
  }
}

export default ImageZoom;
