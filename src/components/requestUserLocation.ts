export default function requestUserLocation(): Promise<GeolocationPosition | null> {
  return new Promise((resolve) => {
    const success = (position: GeolocationPosition) => {
      resolve(position);
    };

    const error = () => {
      resolve(null);
    };

    navigator.geolocation.getCurrentPosition(success, error);
  });
}
