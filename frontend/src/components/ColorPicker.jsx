import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

const ColorPicker = ({ onChange }) => {
  const [color, setColor] = useState("#ffffff");

  const handleColorChange = (e) => {
    const newColor = e.target.value;
    setColor(newColor);
    onChange(newColor);
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center vh-10">
        <div className="col-md-4">
          <div className="card p-4 shadow-lg border-0 text-center">
            <h5 className="mb-3">🎨 Select Color Theme</h5>
            <div className="d-flex align-items-center justify-content-center">
              <input
                type="color"
                className="form-control form-control-color"
                value={color}
                onChange={handleColorChange}
                title="Choose your color"
              />
              <span className="ms-2 fw-bold" style={{ color }}>{color}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
