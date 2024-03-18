/*
  Requests the user's current location using the Geolocation API.
  It returns a Promise that resolves with the user's location if 
  the location is successfully retrieved, or resolves with null if 
  there's an error or if the user denies the request.
*/

export default function requestUserLocation(): Promise<GeolocationPosition | null> {
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(resolve, () => resolve(null));
  });
}
