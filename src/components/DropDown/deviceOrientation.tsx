import { useState, useEffect } from "react";
import { Dimensions } from "react-native";

function DeviceOrientation() {
  const [deviceOrientation, setDeviceOrientation] = useState('portrait');

  useEffect(() => {
    function updateState() {
      const { height, width } = Dimensions.get("window");
      if (height >= width) {
        setDeviceOrientation('portrait');
      } else {
        setDeviceOrientation('landscape');
      }
    }

    updateState();
    Dimensions.addEventListener("change", updateState);
    return () => Dimensions.removeEventListener("change", updateState);
  }, []);

  return deviceOrientation;
}

export default DeviceOrientation;
