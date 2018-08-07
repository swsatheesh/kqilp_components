export const UPDATE_USERNAME = 'metadata/username';

export default username => (
    {
      type: UPDATE_USERNAME,
      payload: {
        username
      }
    }
  );
  